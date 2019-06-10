const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');

const helpers = require('../lib/helpers');

// Función de Login Passport
passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if(validPassword) {
            done(null, user, req.flash('success', 'Bienvenido ' + user.username));
        } else {
            done(null, false, req.flash('failure', 'Contraseña incorrecta'));
        }
    } else {
        return done(null, false, req.flash('failure', 'El nombre de usuario no existe'));
    }
}));

// Función de Registro con Passport
passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true 
}, async(req, username, password, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    // Verificamos si el usuario existe
    if (rows.length == 0) {
        const { nombre, apellido } = req.body;
        const newUser = {
            username,
            password,
            nombre,
            apellido
        };
        newUser.password = await helpers.encryptPassword(password);

        const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    
        newUser.id = result.insertId;
    
        // Terminamos y lo almacenamos en una sesión
        return done(null, newUser);
    } else {
        return done(null, false, req.flash('failure', `El nombre de usuario ${username} ya existe.`));
    }
}));

// Guarda el usuario dentro de la sesión
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Tomar ID para volver a tener los datos
passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
});
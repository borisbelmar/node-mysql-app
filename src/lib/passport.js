const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');

const helpers = require('../lib/helpers');

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true 
}, async(req, username, password, done) => {
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
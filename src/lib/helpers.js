const bcrypt = require('bcryptjs');

const helpers = {};

// Encriptando la contraseña

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

// Match de contraseñas para verificar el login

helpers.matchPassword = async (password, savedPassword) => {
    try {
        await bcrypt.compare(password, savedPassword);
    } catch(e) {
        // Cambiar por Flash
        console.log(e);
    }
};

module.exports = helpers;
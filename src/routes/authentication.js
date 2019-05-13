const express = require('express');
const router = express.Router();

const passport = require('passport');

const pool = require('../database');

// Signup Routes

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

// Login Routes

router.get('/login', (req, res) => {
    res.render('auth/login');
});

// Profile Route

router.get('/profile', (req, res) => {
    res.send('This is your profile');
});

module.exports = router;
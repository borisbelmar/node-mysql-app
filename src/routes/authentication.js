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

router.get('/signin', (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});
// Profile Route

router.get('/profile', (req, res) => {
    res.send('This is your profile');
});

module.exports = router;
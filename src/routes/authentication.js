const express = require('express');
const router = express.Router();

const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

const pool = require('../database');

// Signup Routes

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    })(req, res, next);
});

// Login Routes

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});
// Profile Route

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const UsersController=require('../controller/userController.js');
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));
router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.get('/logout', UsersController.logout);

module.exports = router;
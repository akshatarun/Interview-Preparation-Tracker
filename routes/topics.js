const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router(); // to use route module of express.
const passport = require('passport');
const Topic = require('../models/Topic');
const Question = require('../models/Question');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const TopicsController=require('../controller/topicController.js');

router.get('/', ensureAuthenticated,TopicsController.getTopic);
router.get('/:id', ensureAuthenticated,TopicsController.getTopicByID);
router.post('/', TopicsController.addNewQuestion);
router.get('/like/:id',ensureAuthenticated,TopicsController.bookmarkQuestion);

module.exports = router;
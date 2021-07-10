const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router(); // to use route module of express.
const passport = require('passport');
const Company=require('../models/Company');
const Exp = require('../models/Experience');
const multer = require('multer');
const path = require('path');
const CompanyController=require('../controller/companyController.js');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.use(express.static(__dirname+"./views/public/"));



var Storage= multer.diskStorage({
  destination:"./views/public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('file');

router.get('/',ensureAuthenticated,CompanyController.getCompanies);
router.post('/',upload, CompanyController.addCompany);
router.get('/:id', ensureAuthenticated,CompanyController.getCompanyById);

module.exports = router;
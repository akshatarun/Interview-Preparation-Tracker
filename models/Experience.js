const mongoose = require('mongoose');
const Company = require('./Company');
const ExpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    img:{
        type:String,
        req:true

    },
    branch:{
        type:String,
        
        required: true
    },
    year:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        req:true
        
    },
    intro: {
        type: String,
        required: true
      },
    exp:{
        type:String,
        req:true

    },
    approved:{
        type:Boolean,
        required:true,
        default:false

    },
    
  date:{
    type: Date,
    default: Date.now
  }
});
const Exp = mongoose.model('Exp',ExpSchema);
module.exports = Exp;
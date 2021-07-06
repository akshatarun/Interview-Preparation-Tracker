const mongoose = require('mongoose');
const Topic = require('./Topic');
const User = require('./User');
const QuestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    linkto:{
        type:String,
        required: true

    },
    topics:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Topic',
        required: true
    },
    approved:{
        type:Boolean,
        required:true,
        default:true

    },
    date: {
      type: Date,
      default: Date.now
    },
    difficulty:{
        type:Number,
        required:true
    },
    liked:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
});
const Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;
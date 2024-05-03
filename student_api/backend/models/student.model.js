const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema(
  {
    name:{
      type:String,
      required:[true,'Please enter name']
    },
    rollno:{
      type:String,
      unique:true,
      required:[true,'Please enter rollno']
    },
    wadmark:{
      type:Number,
      required:true,
      default:0
    },
    dsbdamark:{
      type:Number,
      required:true,
      default:0
    },
    ccmark:{
      type:Number,
      required:true,
      default:0
    },
    cnsmark:{
      type:Number,
      required:true,
      default:0
    },
    aimark:{
      type:Number,
      required:true,
      default:0
    },
  },
  {
    timestamp:true
  }
);

const Student=mongoose.model('student',StudentSchema);
module.exports=Student;

const Student=require('../models/student.model.js');

const getAllStudents=async (req,res)=>{

try{
const stud=await Student.find({});
res.status(200).json(stud);
}catch(err){
  res.status(500).json({message:err.message});
}

};

const createStudent=async (req,res)=>{
console.log(req.body);
try{
const stud=await Student.create(req.body);
res.status(200).json(stud);
}catch(err){
  res.status(500).json({message:err.message});
}

};

const updateMarksBy10=async (req,res)=>{
const {rollno}=req.params;

try{
  const stud=await Student.findOne({rollno:rollno});
  stud.dsbdamark+=10;
  stud.wadmark+=10;
  stud.aimark+=10;
  stud.cnsmark+=10;
  stud.ccmark+=10;
  await stud.save();

  res.status(200).json({stud,message:'updated'});
  }catch(err){
    res.status(500).json({message:err.message});
  }

};

const getDSBDAgt10=async (req,res)=>{
  try{
    const stud=await Student.find({
     dsbdamark:{$gt:10}
    });
    res.status(200).json(stud);
    }catch(err){
      res.status(500).json({message:err.message});
    }
};

const getAllgt25=async (req,res)=>{
  try{
    const stud=await Student.find({
      dsbdamark:{$gt:25},
      wadmark:{$gt:25},
      cnsmark:{$gt:25},
      ccmark:{$gt:25},
      aimark:{$gt:25},
    });

    res.status(200).json(stud);
    }catch(err){
      res.status(500).json({message:err.message});
    }
};

const deleteByRollNo=async (req,res)=>{
const {rollno}=req.params;

try{
  const stud=await Student.findOneAndDelete({rollno:rollno});  
  res.status(200).json({stud,message:'Deleted successfully'});
  }catch(err){
    res.status(500).json({message:err.message});
  }
};

module.exports={
  getAllStudents,
  createStudent,
  updateMarksBy10,
  getDSBDAgt10,
  getAllgt25,
  deleteByRollNo
}
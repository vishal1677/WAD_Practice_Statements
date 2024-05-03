const express=require('express');
const router=express.Router();
const {getAllStudents,createStudent,getAllgt25,getDSBDAgt10,updateMarksBy10,deleteByRollNo}=require('../controllers/student.controller.js');

router.get('/',getAllStudents);
router.get('/dsbdagt10',getDSBDAgt10);
router.get('/getallgt25',getAllgt25);

router.post('/',createStudent);

router.put('/:rollno',updateMarksBy10);

router.delete('/:rollno',deleteByRollNo);

module.exports=router;

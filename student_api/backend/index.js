const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const studentRouter=require('./routes/student.route.js');

app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/student',studentRouter);

app.get('/',(req,res)=>{
res.send('Hello from node server');
});

mongoose.connect('ABC').then(()=>{
console.log('Connected to db !');
app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})
}).catch((err)=>{
console.log(err.message);
});


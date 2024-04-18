const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

const mongoURI = 'mongodb://localhost:27017';
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db('student');
});

app.use(express.json());
// app.use(cors()); // Use the cors middleware
app.use(cors({ origin: 'http:localhost//127.0.0.1:5500' }));

// Define your routes below

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.post('/createCollection', async (req, res) => {
  try {
    await db.createCollection('studentmarks');
    res.send('Collection created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating collection');
  }
});

app.post('/insertDocuments', async (req, res) => {
  try {
    const documents = req.body;
    const result = await db.collection('studentmarks').insertMany(documents);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting documents');
  }
});

app.get('/listDocuments', async (req, res) => {
  try {
    const count = await db.collection('studentmarks').countDocuments();
    const documents = await db.collection('studentmarks').find().toArray();
    res.json({ count, documents });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error listing documents');
  }
});

app.get('/dsbdaGreaterThan20', async (req, res) => {
  try {
    const students = await db
      .collection('studentmarks')
      .find({ DSBDA_Marks: { $gt: 20 } }, { projection: { Name: 1, _id: 0 } })
      .toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error listing students');
  }
});

app.put('/updateMarks/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const result = await db.collection('studentmarks').updateOne(
      { _id: ObjectId(studentId) },
      { $inc: { WAD_Marks: 10, CC_Marks: 10, DSBDA_Marks: 10, CNS_Marks: 10, AI_marks: 10 } }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating marks');
  }
});

app.get('/allSubjectsGreaterThan25', async (req, res) => {
  try {
    const students = await db
      .collection('studentmarks')
      .find({
        WAD_Marks: { $gt: 25 },
        CC_Marks: { $gt: 25 },
        DSBDA_Marks: { $gt: 25 },
        CNS_Marks: { $gt: 25 },
        AI_marks: { $gt: 25 },
      })
      .project({ Name: 1, _id: 0 })
      .toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error listing students');
  }
});

app.get('/mathsAndScienceLessThan40', async (req, res) => {
  try {
    const students = await db
      .collection('studentmarks')
      .find({
        $or: [{ WAD_Marks: { $lt: 40 } }, { CC_Marks: { $lt: 40 } }],
        $or: [{ DSBDA_Marks: { $lt: 40 } }, { CNS_Marks: { $lt: 40 } }],
      })
      .project({ Name: 1, _id: 0 })
      .toArray();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error listing students');
  }
});

app.delete('/deleteStudent/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const result = await db.collection('studentmarks').deleteOne({ _id: ObjectId(studentId) });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting student');
  }
});
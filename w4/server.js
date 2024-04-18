const express = require('express');
const cors=require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

// Serve user.json file
app.get('/user', (req, res) => {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Handle POST requests to update user.json
app.post('/user', (req, res) => {
  const userData = req.body;
  fs.writeFile('user.json', JSON.stringify(userData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Data saved successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

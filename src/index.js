const express=require('express')
const path=require('path')
const app = express();


app.use(express.static(path.join(__dirname, 'src')));


app.use('*.css', (req, res, next) => {
  res.header('Content-Type', 'text/css');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
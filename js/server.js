  
const express = require('express');
const cors = require('cors');  // CORS modulini import qilib olish

const app = express();
const port = 3000;

const baza = require('./carData');

app.use(cors());  // CORS ni o'rnatib olish

app.get('/api/cars', (req, res) => {
  res.json(baza);
});

app.listen(port, () => {
  console.log(`Server is listening at https://localhost:${port}`);
});

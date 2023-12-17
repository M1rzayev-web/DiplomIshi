const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const baza = require('./carData');

app.use(cors());
app.use(bodyParser.json());  // JSON formatdagi malumotlarni o'qish uchun

app.get('/api/cars', (req, res) => {
  res.json(baza);
});

// POST so'rovni qabul qilish
app.post('/api/cars', (req, res) => {
  const newData = req.body;  // POST so'rov bilan kelgan malumotlar
  // Malumotlarni qo'shish yoki qaytarish loyixasi
  // ...

  // Masalan, uni baza arrayiga qo'shib qo'ysa bo'ladi:
  baza.push(newData);
  
  // Natija qaytarish
  res.json({ success: true, message: 'Malumot qabul qilindi' });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());

// const mysql2 = require('mysql2');
// const db = mysql2.createConnection({
//   host: 'localhost',
//   user: 'TechverseAdmin',
//   password: 'techverse123',
//   database: 'Techverse'
// });                                                                  **Commented code is from MySQL** 
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL Database!');
// });

mongoose.connect(process.env.MongoDB_url, {
}).then(() => {
  console.log('Connected to MongoDB Database!');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const gallerySchema = new mongoose.Schema({
  name: String,
  img_url: String,
  description: String,
  category: String
});
const Gallery = mongoose.model('Gallery', gallerySchema);



// app.get('/gallery', (req, res) => {
//   const query = "SELECT * FROM Gallery";
//   db.query(query, (err, data) => {
//     if (err) throw err;
//     return res.json(data);
//   });
// });

app.get('/gallery', async (req, res) => {
  try {
    const data = await Gallery.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// app.get('/gallery', async (req, res) => {
//   try {
//     const { category } = req.query;
//     let filter = {};
//     if (category) {
//       filter.category = category;                                                    **Filter by category if provided**
//     }
//     const images = await Gallery.find(filter);
//     res.json(images);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


app.get('/', (req, res) => {
   return res.json('Hello World!');
})

app.listen(5000, () => {
   console.log('Server is running on port 5000');
})
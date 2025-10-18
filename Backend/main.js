const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Parser } = require('json2csv');
require('dotenv').config();
const app = express();
app.use(cors());

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

app.get('/gallery', async (req, res) => {
  try {
    const data = await Gallery.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/Contact.csv', async (req, res) => {
  try {
    const apiKey = req.query.key;
    if (apiKey !== process.env.Contact_form_key) {
      return res.status(403).send('Unauthorized: Invalid API Key');
    }
    const data = await Contact.find().lean(); 
    const parser = new Parser();
    const csv = parser.parse(data);
    res.header('Content-Type', 'text/csv');
    res.attachment('contact.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).send(err.message);
  }
})

app.get('/gallery', async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};
    if (category) {
      filter.category = category;                                                   
    }
    const images = await Gallery.find(filter);
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/', (req, res) => {
   return res.json('Hello World!');
})

app.listen(5000, () => {
   console.log('Server is running on port 5000');
})
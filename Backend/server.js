const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MongoDB_url, {
}).then(() => {
  console.log('Connected to MongoDB Database!');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
    return res.json('Hello World!');
 })

 const Gallery = require('./routes/GalleryServer');
 app.use('/gallery', Gallery);
 const Contact = require('./routes/ContactServer');
 app.use('/contact', Contact);

 
 app.listen(5000, () => {
    console.log('Server is running on port 5000');
 })

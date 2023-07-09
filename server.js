const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Karan_Kaushal:Kaushal907@cluster0.skrr3.mongodb.net/userInfo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Create a POST route to handle incoming data
app.post('/users', userController.createUser);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

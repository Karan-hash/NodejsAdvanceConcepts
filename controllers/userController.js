const User = require('../models/userModel');

// POST /api/users
exports.createUser = async (req, res) => {
  try {
    console.log('---req body---: ', req.body);
    const { email, name, fields } = req.body;

    // Create a new user document
    const newUser = new User({ email, name, fields });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
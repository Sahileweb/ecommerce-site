const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

 
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }


    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
   console.error('Signup error:', err.message);
res.status(500).json({ message: err.message });

  }
});

module.exports = router;


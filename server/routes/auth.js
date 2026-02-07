const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({msg: "User already exists. Please login."});

        user = new User({ name, email, password, role});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.json({msg: "User registered successfully!"});

    } catch (err) {
        res.status(500).send("Server Error");
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({msg: 'Invalid Credentials. Please try again.'});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg: "Invalid Credentials. PLease Try Again."});

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );

        res.json({
            token,
            user: { id: user._id, name: user.name, role: user.role}
        });

    } catch(err) {
        res.status(500).send("Server Error");
    }

});

module.exports = router;
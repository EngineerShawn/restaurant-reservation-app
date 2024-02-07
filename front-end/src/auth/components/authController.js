const User = require('./userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        // Extract user details from request body
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save user in the database
        await user.save();

        // Send success response
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
};

exports.login = async (req, res) => {
    try {
        // Extract login credentials from request body
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        // Compare hashed password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).send('Invalid credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h' // Token expires in 1 hour
        });

        // Send success response with token
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Error logging in user');
    }
};

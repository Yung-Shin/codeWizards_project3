const express = require('express');
const { User } = require('../../models');
const { signToken } = require('../utils/auth');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, userName, password, email } = req.body;
        const user = await User.create({ firstName, lastName, userName, password, email });
        const token = signToken(user);
        res.json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to register user' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        if (!user || !user.isCorrectPassword(password)) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
        const token = signToken(user);
        res.json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Delete the user from the database based on the provided id
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete user' });
    }
});

module.exports = router;

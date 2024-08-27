const express = require('express');
const prisma = require('../config/db.config');

module.exports = (app) => {
    app.post('/register', async (req, res) => {
        console.log('Request body:', req.body);

        const { fullname, username, email, password } = req.body;

        try {
            const newuser = await prisma.User.create({
                data: {
                    fullName: fullname,
                    username: username,
                    email: email,
                    password: password
                }
            });
            console.log('User created:', newuser);
            return res.status(200).json({
                message: "user created"
            });
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).json({
                // data: { fullname, username, email, password },
                message: "something went wrong"
            });
        }
    });
    // console.log('/register route set up');
}
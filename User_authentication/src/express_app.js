const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const user = require('./api/user');

module.exports = async (app) => {
    // console.log('Setting up middleware...');
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());

    user(app);
    // console.log('User routes added');
}
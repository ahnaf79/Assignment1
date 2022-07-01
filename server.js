#!/usr/bin/env node

/* File name: server.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */


const express = require('express');
const app = express();

//Routes
app.get('/', home);
app.get('/about', about);
app.get('/projects', projects);
app.get('/contact', contact);


//Controllers
function home(req, res) {
    res.send('Home');
}

function about(req, res) {
    res.send('About me');
}

function projects(req, res) {
    res.send('Projects page');
}

function contact(req, res) {
    res.send('Contact Me');
}


//sets the port and runs the app
app.listen(3000);
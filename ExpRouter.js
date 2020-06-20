// Express router helps to seperate our routes in seperate files
const express = require('express');
const path=require('path');
const app = express();

app.use('/public' ,express.static(path.join(__dirname,'static')));
app.set('view engine' , 'ejs');

const test = require('./routes/people');

app.use('/people',test);
app.listen(3000);
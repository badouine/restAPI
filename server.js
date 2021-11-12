const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const connectDB = require('./config/db');
// Load config
dotenv.config({ path: './config/.env'});
connectDB();

// Routes
app.use('/', require('./routes/index'));

// port 
app.listen(3000);
const express = require('express');
const dotenv = require('dotenv');
const app = express();

const connectDB = require('./config/db');
// Load config
dotenv.config({ path: './config/.env'});
connectDB();

// Routes
app.use('/', require('./routes/index'));

// port 
app.listen(3000);
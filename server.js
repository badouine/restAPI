const express = require('express');
const dotenv = require('dotenv');
const app = express();

const connectDB = require('./config/db');
// Load config
dotenv.config({ path: './config/.env'});
connectDB();
app.listen(3000);
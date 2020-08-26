const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const router = require('./router');
require('dotenv').config();


app.use(express.static(path.resolve(__dirname, "..", process.env.STATIC_PATH)));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

mongoose.connect(`mongodb://${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`);


server.listen(process.env.APP_PORT, () => console.log(`Listening on port ${process.env.APP_PORT}`));
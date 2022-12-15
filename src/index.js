// In src/index.js 

var bodyParser = require('body-parser');

//sebas 
const dotenv = require('dotenv');
dotenv.config()
cors = require('cors')

// sebas esto me toco ponerlo por que se estaba estallando la aplicacion
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const express = require("express");
const v1DataRouter = require('./v1/routes/dataRoutes');
const v1UserRouter = require('./v1/routes/userRoutes');
const database = require('./database/database')

const app = express(); 
const PORT = process.env.PORT || 3000; 

//sebas
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json());
app.use('/api/v1/',v1DataRouter);
app.use('/api/v1/user/',v1UserRouter);

// For testing purposes 
/*app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
});*/

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} 🚀`); 
});
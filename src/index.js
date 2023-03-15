
var bodyParser = require('body-parser');

//sebas 
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors')
const morgan = require('morgan');

// sebas esto me toco ponerlo por que se estaba estallando la aplicacion
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const express = require("express");
const v1DataRouter = require('./v1/routes/dataRoutes');
const v1AuthRoutes = require('./v1/routes/authRoutes');
const v1UserRouter = require('./v1/routes/userRoutes');
const v1LogRouter = require('./v1/routes/logsRoutes');
const v1RolesRoutes = require('./v1/routes/rolesRoutes');
const database = require('./database/database');

const app = express(); 
const PORT = process.env.PORT || 3000; 

//morgan es algo opcionar
app.use(morgan('dev'));

//sebas
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.use('/api/v1/',v1DataRouter);
app.use('/api/v1/auth/',v1AuthRoutes);
app.use('/api/v1/user/',v1UserRouter);
app.use('/api/v1/log/',v1LogRouter);
app.use('/api/v1/role/',v1RolesRoutes);

// For testing purposes 
/*app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
});*/

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} 🚀`); 
});
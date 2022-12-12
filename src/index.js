// In src/index.js 
const express = require("express");
const v1DataRouter = require('./v1/routes/dataRoutes');
const database = require('./database/database')

const app = express(); 
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use('/api/v1/',v1DataRouter);

// For testing purposes 
/*app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
});*/

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} 🚀`); 
});
const mongoose = require('mongoose');
const config = require('../config/config.json');

mongoose.connect(config.urlDatabase,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log('Error connecting database ' + error))
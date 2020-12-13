const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/lovebooks', 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });   
        
        console.log('DB bookhappy Ready')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error Init Database, View Logs');
    }    
}

module.exports = {
    dbConnection
}
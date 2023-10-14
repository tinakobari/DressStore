const mongoose = require("mongoose");

// Alert: For production environment never expose your connection string AND secret keys.
module.exports = {
    "ATLASDB" : "mongodb+srv://dbuser:A3t4I8M1KRU316Um@cluster0.naebaek.mongodb.net/"
}

async function connectToDatabase(){
    return mongoose.connect(URI,{
        useNewUrlParser : true,
        useUnifiedToplogy: true,
    }); 
}

//TQYDTlHyyIggeZ3a

module.exports = connectToDatabase;
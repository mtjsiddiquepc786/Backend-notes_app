const mongoose = require("mongoose")


async function connectedDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("database connected  .  ..  ...")
} 

    
module.exports = connectedDB
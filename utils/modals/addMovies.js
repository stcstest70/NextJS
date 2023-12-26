const mongoose = require('mongoose');
const MovieModal = require("./movie.js");
const jsonData = require("./movie.json");

async function connectToDatabase() {
    await mongoose.connect('mongodb+srv://JayPrakash:JayPrakash@cluster0.1qyfer2.mongodb.net/next-project?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  }

async function runScript(){
    try{
        await connectToDatabase();
        await MovieModal.insertMany(jsonData);
        console.log('Data saved to MongoDB');
    }
    catch(e){
        console.log('Some error while saving data  : ');
        console.log(e);
    }
}

runScript();
// This file is responsible for connecting to our Database
const mongoose = require('mongoose');
const BlogArticle = require('./Article.js');

// const dataFromOtherFile = require('./test.js');
// console.log(dataFromOtherFile.personData);

// Get the address for the Database
const connectionString = 'mongodb://localhost:27017/testblog';

// Fire off the connection
// and deactivate pesky deprication warnings
mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

// Listen for when we connect, and let us know!
mongoose.connection.on('connected', () => {
  console.log('You are connected to MongoDB! 🥭');
})

// Make all of our Models available from this file (index.js)
module.exports = {
  BlogArticle: BlogArticle
};
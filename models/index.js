// This file is responsible for connecting to our Database
const mongoose = require('mongoose');

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
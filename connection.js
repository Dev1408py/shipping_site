const mongoose = require("mongoose");
// require("dotenv").config();

// enter MONGO_URL in .env file
const MONGO_URI='mongodb+srv://shivamspatel21:Shivam123@cluster0.d7lvksl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(MONGO_URI);


module.exports = connection;

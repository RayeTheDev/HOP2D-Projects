const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Turbold:Hello0220@cluster0.lr3z2ms.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is successfully connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;

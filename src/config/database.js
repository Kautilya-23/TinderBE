const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://kautilyasathwara:XQX8Gh6lPVvnLyKM@namastenode.07mzjrb.mongodb.net/TinderBE"
    );
};

module.exports = connectDB;

const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user")


app.use(express.json());

// get user by email
app.get("/user", async(req, res) => {
    const userEmail = req.body.emailId;

    try{
        const user = await User.findOne({emailId: userEmail});
        if(!user) {
            res.status(400).send("User not found");
        } else {
            res.send(user);
        }
    }

    // try{
    //     const users = await User.find({emailId: userEmail});
    //     if(users.length === 0)
    //         res.status(400).send("User not found");
    //     else{
    //         res.send(users);
    //     }
    // }
    catch (err) {
        res.status(400).send("Something went wrong!");
    }
    
});

// Feed API - GET /feed - get all the users from database
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send("Something went wrong!");
    }
});

app.post("/signup", async (req, res) => {
    // Creating a new instance of a user model
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User Added Successfully");
    } catch (err) {
            res.status(400).send("Error saving the user:" + err.message);
        }
    
});

connectDB()
    .then(() => {
        console.log("Database connection established...");
        app.listen(7777, () => {
        console.log("Server listening the port 7777....");
});
    })
    .catch((err) => {
        console.error("Database can not be connected!!");
    });


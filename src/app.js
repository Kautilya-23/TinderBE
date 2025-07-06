const express = require("express");
const { adminAuth, userAuth } = require("../middlewares/auth");

const app = express();

// order of the routes is matter
app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.post("/user/login", (req, res) => {
    res.send("User is logged in");
},);

app.get("/user/data", (req, res) => {
    res.send("User Data sent");
})

app.get("/admin/getAllData", (req, res) => {
    res.send("Getting the All Data");
},);

app.get("/admin/deleteUser", (req, res) => {
    res.send("Delete the user");
},);

app.listen(7777, () => {
    console.log("Server listening the port 7777....");
});
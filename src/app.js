const express = require("express");

const app = express();

app.use("/", (req,res) => {
    res.send("OKK just for check")
});

app.use("/home", (req,res) => {
    res.send("Hello from the home route")
});

app.use("/test", (req,res) => {
    res.send("Hello from the test route")
});

app.listen(7777, () => {
    console.log("Server listening the port 7777....");
});
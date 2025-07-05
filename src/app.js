const express = require("express");

const app = express();

// order of the routes is matter

app.get("/user", (req, res) => {
    res.send({firstname:"Kautilya", lastname:"Sathwara"})
});

app.post("/user", (req, res) => {
    // saving data to DB
    res.send("Data successfully saved to database!")
});

app.delete("/user", (req, res) => {
    res.send("Deleted Successfully!")
})

app.use("/test", (req,res) => {
    res.send("Hello from the test route")
});

app.listen(7777, () => {
    console.log("Server listening the port 7777....");
});
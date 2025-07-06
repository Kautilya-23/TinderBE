const express = require("express");

const app = express();

// order of the routes is matter

// app.use("./route", rh, [rh2, rh3], rh4, rh5);

app.get("/user", (req, res, next) => {
    console.log("Handling the route user!!");
    next();
},
    (req, res, next) => {
    console.log("Handling the route 2nd user!!");
    // res.send("2nd Response");
    next();
    },
    (req, res, next) => {
    console.log("Handling the route 3rd user!!");
    // res.send("3rd Response");
    next();
    },
    (req, res, next) => {
    console.log("Handling the route 4th user!!");
    // res.send("4th Response");
    next();
    },
    (req, res, next) => {
    console.log("Handling the route 5th user!!");
    res.send("5th Response");
    },
);

app.listen(7777, () => {
    console.log("Server listening the port 7777....");
});
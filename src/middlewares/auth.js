const adminAuth = (req, res, next) => {
    console.log("Admin auth is successfully checked");
    const token = "abc";
    const isAdminAuthorized = token === "abc";
    if(isAdminAuthorized) {
        next();
    }
    else{
        res.status(401).send("Unauthorized Request");
    }
};

const userAuth = (req, res, next) => {
    console.log("User auth is successfully checked");
    const token = "xyz";
    const isUserAuthorized = token === "xyz";
    if(!isUserAuthorized){
        res.status(401).send("Unauthorized Request");
    }
    else{
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
};
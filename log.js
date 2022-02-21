var express = require("express");
var router = express.Router();

const credentials = {
    username = "david",
    pass = "123"
};

router.post('/login', (req, res) => {
    if (req.body.username == credentials.username && req.body.pass == credentials.pass) {
        req.session.user = req.body.username;
        res.redirect('/da/dashboard')
    } else {
        res.end("Error de inicio de sesion");
    }
});
module.exports = log;
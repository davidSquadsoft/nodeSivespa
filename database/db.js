const mysql = require("mysql");


const conexion = mysql.createConnection({

    host: "31.220.58.161",
    user: "root",
    password: "Sivespa0013!#123",
    database: "u674755405_sivespa",
    multipleStatements: true

})


conexion.connect((error) => {
    if (error) {

        console.log('error de conexion' + error);
        return
    }
    console.log('conexion exitosa');

})
module.exports = conexion;


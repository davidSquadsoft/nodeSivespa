const mysql = require("mysql");


const conexion = mysql.createConnection({

    host: process.env.DB_HOST,
    user: "root",
    password: "",
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


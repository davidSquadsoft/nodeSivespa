const conexion = require("../database/db");


  module.exports = function busqueda(sql){
    return new Promise(function(resolve,reject){
  
    conexion.query(sql,function(err,rows,fields){
      if(err){
        return reject(err);
      }
      data=rows
      resolve(data);
      });
    });
  }  
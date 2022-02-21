
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const { promisify } = require("util");
const { userInfo } = require("os");
const { Console } = require("console");

exports.filterent = async (req, res) => {
    
    try {
        const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");

        
        kbuscar=req.body.kbuscar
        console.log(kbuscar)

        filtroCODDIVIPOLA='SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from RL_DIVIPOLA WHERE CONCAT(`NOMMUNIPIO`,`CODMUNIC`) LIKE "%'+ kbuscar + '%" COLLATE utf8_general_ci'


        conexion.query(filtroCODDIVIPOLA, function(error,results){

        if(results[0]){
            MUNIbuscar=results[0].CODMUNIC
            console.log(MUNIbuscar)
        }else{
          MUNIbuscar="no existe"
        }

        filtroMUNI = 'SELECT * FROM `db_ent_mun` WHERE CONCAT(`COD_MUN`,`NOM_MUN`,`FEC_INICIAR`,`FEC_CAMCAR`,`NOMBRE_RESPON`,`APELLIDO_RESPON`,`ID_RL_TIP_IDE`,`NRO_DOC`,`EMAIL`,`TELEFONO`) LIKE "%'+ kbuscar + '%" OR CONCAT(`COD_MUN`,`NOM_MUN`,`FEC_INICIAR`,`FEC_CAMCAR`,`NOMBRE_RESPON`,`APELLIDO_RESPON`,`ID_RL_TIP_IDE`,`NRO_DOC`,`EMAIL`,`TELEFONO`) LIKE "%' + MUNIbuscar + '%" COLLATE utf8_general_ci'

        filtroUPGD = 'SELECT * FROM `db_uni_not` WHERE CONCAT(`FEC_INICAR`,`FEC_CAMCAR`,`COD_PRE`,`COD_SUB`,`COD_MUN`,`RAZ_SOC`,`COR_ELE`,`ID_RES_NOT`,`TEL`,`ACT_SIV`,`NIT_UPGD`,`ES_UNI_NOT`,`ESTADOUPGD`) LIKE "%'+ kbuscar + '%" OR CONCAT(`FEC_INICAR`,`FEC_CAMCAR`,`COD_PRE`,`COD_SUB`,`COD_MUN`,`RAZ_SOC`,`COR_ELE`,`ID_RES_NOT`,`TEL`,`ACT_SIV`,`NIT_UPGD`,`ES_UNI_NOT`,`ESTADOUPGD`) LIKE "%' + MUNIbuscar + '%" COLLATE utf8_general_ci'
        
        filtroUSERS = 'SELECT * FROM `st_user` WHERE CONCAT(`TIP_USER`,`NOMBRE`,`APELLIDO`,`TIP_IDEN`,`CEDULA`,`EMAIL`,`TEL`,`ENTIDAD`,`COD_MUN`,`COD_PRE`,`USER`) LIKE "%'+ kbuscar +  '%" OR CONCAT(`TIP_USER`,`NOMBRE`,`APELLIDO`,`TIP_IDEN`,`CEDULA`,`EMAIL`,`TEL`,`ENTIDAD`,`COD_MUN`,`COD_PRE`,`USER`) LIKE "%' + MUNIbuscar + '%" COLLATE utf8_general_ci'
        
        
        filtroTotal= filtroMUNI + ';' + filtroUPGD + ';' + filtroUSERS 
        conexion.query(filtroTotal, [1,2,3], function(error, resultF, fieldsd){

            conexion.query(
                "SELECT * FROM st_user WHERE id_st_user =?",
                [decodificada.id],
                (error, resultU) => {
                    req.user = resultU[0];

                  sqlmunicipios = 'SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from RL_DIVIPOLA'
                  sqltipoide = 'SELECT `DESC`, `COD` FROM rl_tip_ide'
                  sqltipoUPGD = 'SELECT `COD_PRE`,`RAZ_SOC` FROM `db_uni_not`'
                  munfiltro = req.user.COD_MUN
                  sqlmiMun =
                    'SELECT `COD_PRE`,`RAZ_SOC` FROM `db_uni_not` WHERE COD_MUN = ' + munfiltro
                  todasUPGD = 'SELECT `COD_PRE`,`COD_MUN`,`RAZ_SOC` FROM `db_uni_not`'
                  listaUPGD = 'SELECT * FROM `db_uni_not`'
                  listaUSERS = 'SELECT * FROM `st_user`'
                  listaMUNI = 'SELECT * FROM `db_ent_mun`'
                  sqltotal =
                    sqlmunicipios +
                    '; ' +
                    sqltipoide +
                    '; ' +
                    sqltipoUPGD +
                    '; ' +
                    sqlmiMun +
                    '; ' +
                    todasUPGD +
                    '; ' +
                    listaUPGD +
                    '; ' +
                    listaUSERS +
                    '; ' +
                    listaMUNI
                  conexion.query(sqltotal, [1, 2, 3, 4, 5, 6, 7, 8], function (
                    error,
                    result,
                    fields,
                  ) {
                    if (error) {
                      throw error
                    } else {
                        console.log(resultF[1])
                         res.render('da/usuarios/entidades',   {
                          filtro:1,
                          user:req.user,
                          regiones: result[0],
                          tipo_ide: result[1],
                          listaUPGD: result[2],
                          misUPGD: result[3],
                          todasUPGD: result[4],
                          listaUPGD: result[5],
                          listaUSERS: result[6],
                          listaMUNI: result[7],
                          tittle: 'Entidades y usuarios ',
                          filtroMUNI: resultF[0],
                          filtroUPGD: resultF[1],
                          filtroUSERS: resultF[2],
                          filtro:1
                        })
                    }


               
             
                }
              )
         

        })
    })
})
}catch (error) {
        console.log(error);
    }
  
   

  };


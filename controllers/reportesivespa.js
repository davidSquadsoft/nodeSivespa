const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const conexion = require("../database/db");
const { promisify } = require("util");
const { userInfo } = require("os");
const { Console } = require("console");
const authController = require('./authController');
const q = require('../database/querys')

  exports.tamizajecrafft = async(req,res)=>{

  try {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");

    creador= await q(`SELECT * FROM st_user WHERE id_st_user =${decodificada.id}`)
    
    id_tamizaje = req.body.NUM_IDE + factual
    const id_creador= creador[0].CEDULA
    const nombrecreador= creador[0].NOMBRE + creador[0].APELLIDO
    var factual=new Date().toISOString().slice(0, 10);
    
    constTIP_IDE = req.body.TIP_IDE
    constNUM_IDE = req.body.NUM_IDE
    constPRI_NOM = req.body.PRI_NOM
    constSEG_NOM = req.body.SEG_NOM
    constPRI_APE = req.body.PRI_APE
    constSEG_APE = req.body.SEG_APE
    constTELEFONO = req.body.TELEFONO
    constFECHA_NTO = req.body.FECHA_NTO
    constEDAD = req.body.EDAD
    constSEXO = req.body.SEXO
    constNACION = req.body.NACION
    constID_RL_DIVIPOLA = req.body.ID_RL_DIVIPOLA
    constID_RL_DIVIPOLA_RESI = req.body.ID_RL_DIVIPOLA_RESI
    constDIR_RES = req.body.DIR_RES
    consttip_reg = req.body.tip_reg
    constcod_adm = req.body.cod_adm
    constEDAD_INI = req.body.EDAD_INI
    constSPA_INI = req.body.SPA_INI
    constCRAFFT_Pa1_ALC = req.body.CRAFFT_Pa1_ALC
    constCRAFFT_Pa2_MAR = req.body.CRAFFT_Pa2_MAR
    constCRAFFT_Pa3_OTR = req.body.CRAFFT_Pa3_OTR
    constCRAFFT_Pb1_RIESGOS = req.body.CRAFFT_Pb1_RIESGOS
    constCRAFFT_Pb2_DISMIN = req.body.CRAFFT_Pb2_DISMIN
    constCRAFFT_Pb3_RELAJ = req.body.CRAFFT_Pb3_RELAJ
    constCRAFFT_Pb4_LIOS = req.body.CRAFFT_Pb4_LIOS
    constCRAFFT_Pb5_OLVIDO = req.body.CRAFFT_Pb5_OLVIDO
    constCRAFFT_Pb6_SOLO = req.body.CRAFFT_Pb6_SOLO
    CRAFFT_Puntaje =
    values=[]
    sqlguardar = 'INSERT INTO db_tam_crafft VALUES (?)'

  } catch (error) {
    console.log(error)
  }
  
    };

    
  exports.dareporte = async(req,res)=>{
try {

  const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");

  conexion.query(
    "SELECT * FROM st_user WHERE id_st_user =?",
    [decodificada.id],
    (error, resultU) => {
      user=resultU[0]
      
      
    
      //fecha actual:
      const factual = new Date().toISOString().slice(0, 10);
      //semana epidemiologica:
      currentdate = new Date();
      var oneJan = new Date(currentdate.getFullYear(),0,1);
      var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
      var semanaEp = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7)
      //año
      const fechaN = new Date()


      var idglobalreporte= req.body.NUM_IDE + factual

      console.log(idglobalreporte)


      //****** leemos variables para db_info_gnral */
      const año=fechaN.getFullYear();
      const COD_EVEN=req.body.COD_CIE10
      const COD_PRE=user.COD_PRE
      const COD_SUB=user.COD_SUB
      
      


      console.log(req.body.PRI_NOM)

      // variables de db_ide_pac identificacion de paciente
      const ID_TIP_IDE =req.body.ID_TIP_IDE
      const NUM_IDE = req.body.NUM_IDE 
      PRI_NOM=req.body.PRI_NOM
      SEG_NOM=req.body.SEG_NOM
      PRI_APE=req.body.PRI_APE
      SEG_APE=req.body.SEG_APE
      TELEFONO=req.body.TELEFONO
      FECHA_NTO =req.body.FECHA_NTO
      EDAD=req.body.EDAD
      ID_SEXO=req.body.ID_SEXO
      ID_RL_NACIONALIDAD=req.body.ID_RL_NACIONALIDAD
      ID_RL_DIVIPOLA=req.body.ID_RL_DIVIPOLA
      DIR_RES=req.body.DIR_RES
      ID_COD_PAIS_O = ID_RL_NACIONALIDAD
      DIR_RES=req.body.DIR_RES
      id_rl_tip_ss=req.body.id_rl_tip_ss
      ESTRATO=req.body.ESTRATO
      gpdes=req.body.gpdes || 2
      gpmigr=req.body.gpmigr || 2
      gpcar=req.body.gpcar || 2
      gpges=req.body.gpges || 2
      SEM_GES=req.body.SEM_GES || 0
      gpindi=req.body.gpindi || 2
      gpicbfs=req.body.gpicbfs || 2
      gpmc=req.body.gpmc || 2
      gpdesmo=req.body.gpdesmo || 2
      gppsi=req.body.gppsi || 2
      gpvicvio=req.body.gpvicvio || 2
      gpotro=req.body.gpotro || 2
      const valuesDBidenpac=[
        idglobalreporte,
        ID_TIP_IDE,
        NUM_IDE,
        PRI_NOM,
        SEG_NOM,
        PRI_APE,
        SEG_APE,
        TELEFONO,
        FECHA_NTO,
        EDAD,
        ID_SEXO,
        ID_RL_NACIONALIDAD[0],
        ID_RL_NACIONALIDAD[0],
        ID_RL_DIVIPOLA[0],
        DIR_RES,
        id_rl_tip_ss,
        ESTRATO,
        gpdes,
        gpmigr,
        gpcar,
        gpges,
        SEM_GES,
        gpindi,
        gpicbfs,
        gpmc,
        gpdesmo,
        gppsi,
        gpvicvio,
        gpotro]

        
      // redaccion del query de db_ide_pac identificacion de paciente
        //queryDBidenpac ='INSERT INTO db_ide_pac (`ID_TIP_IDE`,`NUM_IDE`,`PRI_NOM`,`SEG_NOM`,`PRI_APE`,`SEG_APE`,`TELEFONO`,`FECHA_NTO`,`EDAD`,`ID_SEXO`,`ID_RL_NACIONALIDAD`,`ID_COD_PAIS_O`,`ID_RL_DIVIPOLA`,`DIR_RES`,`id_rl_tip_ss`,`ESTRATO`,`gpdes`,`gpmigr`,`gpcar`,`gpges`,`SEM_GES`,`gpindi`,`gpicbfs`,`gpmc`,`gpdesmo`,`gppsi`,`gpvicvio`,`gpotro`) VALUES(?)'
        queryDBidenpac ='INSERT INTO db_ide_pac VALUES(?)'
        //********************** */
      
      
      // VARIABLES PARA LA NOTIFICACION DB_notif  
      ID_RL_FUENTE=req.body.ID_RL_FUENTE

      DIR_RES=req.body.DIR_RES
      FEC_CON=req.body.FEC_CON
      INI_SIN=req.body.INI_SIN
      ID_TIP_CAS=req.body.ID_TIP_CAS
      PAC_HOS=req.body.PAC_HOS
      FEC_HOS=req.body.FEC_HOS || 0000-00-00
      ID_CON_FIN=req.body.ID_CON_FIN
      FEC_DEF=req.body.FEC_DEF || 0000-00-00
      CER_DEF=req.body.CER_DEF || 'No aplica'
      ID_RL_CIE_10=req.body.ID_RL_CIE_10
      NOM_DIL_FI=req.body.NOM_DIL_FI
      TEL_DIL_FI=req.body.TEL_DIL_FI
      
      const valuesDBnotif=[
        idglobalreporte,
        ID_RL_FUENTE,
        ID_RL_NACIONALIDAD[0],
        ID_RL_DIVIPOLA[0],
        DIR_RES,
        FEC_CON,
        INI_SIN,
        ID_TIP_CAS,
        PAC_HOS,
        FEC_HOS,
        ID_CON_FIN,
        FEC_DEF,
        CER_DEF,
        ID_RL_CIE_10[0],
        NOM_DIL_FI,
        TEL_DIL_FI
      ]
     // redaccion del query de db_notif notificacion del incidente
//      queryDBnotif='INSERT INTO db_notif (`ID_RL_FUENTE`,`ID_RL_PAIS_DIAN`,`ID_RL_DIVIPOLA`,`DIR_RES`,`FEC_CON`,`INI_SIN`,`ID_TIP_CAS`,`PAC_HOS`,`FEC_HOS`,`ID_CON_FIN`,`FEC_DEF`,`CER_DEF`,`ID_RL_CIE_10`,`NOM_DIL_FI`,`TEL_DIL_FI`) VALUES (?)'
queryDBnotif='INSERT INTO db_notif VALUES (?)'    
      
      //VARIABLES DE AJUSTE DEL CASO
      
      ID_RL_AJUSTE=req.body.ID_RL_AJUSTE
      
      ID_DISP_AYUDA=req.body.ID_DISP_AYUDA
      const valuesDBajustecaso=[
        idglobalreporte,
        ID_RL_AJUSTE,
        factual,
        ID_DISP_AYUDA
        
      ]
      //redaccion del query para db_aju base de datos de ajustes del caso y notificacion del incidente
      //queryDBajustecaso='INSERT INTO db_aju (`ID_RL_AJUSTE`,`FEC_AJU`,`ID_HP_AYUDA`) VALUES (?)'
      queryDBajustecaso='INSERT INTO db_aju VALUES (?)'


      //variables de inicio de consumo (varias se usan en otras db atento)
      INI_EDAD =req.body.INI_EDAD
      ID_RL_LISTA_SPA =req.body.INI_SPA
      ID_RL_LISTA_SPA2 =req.body.INI_SPA_OTRA || 'No aplica'
      ID_RL_INI_PER =req.body.INI_PERSONA
      ID_RL_INI_ENTORNO =req.body.INI_ENTORNO
      ID_RL_INI_LUGAR=req.body.INI_LUGAR
      ID_RL_INI_MOTIV =req.body.INI_MOTIVO
      ID_RL_INI_MOTIV2 =req.body.INI_MOTIVO_OTRA || 'No aplica'

      const valuesDBiniconsumo=[
        idglobalreporte,
        INI_EDAD,
        ID_RL_LISTA_SPA,
        ID_RL_LISTA_SPA2,
        ID_RL_INI_PER,
        ID_RL_INI_ENTORNO,
        ID_RL_INI_LUGAR,
        ID_RL_INI_MOTIV,
        ID_RL_INI_MOTIV2,
      ]

      //queryDBiniconsumo='INSERT INTO db_ini_con (`INI_EDAD`,`ID_RL_LISTA_SPA`,`ID_RL_LISTA_SPA2`,`ID_RL_INI_PER`,`ID_RL_INI_ENTORNO`,`ID_RL_INI_LUGAR`,`ID_RL_INI_MOTIV`,`ID_RL_INI_MOTIV2`) VALUES (?)'
      queryDBiniconsumo='INSERT INTO db_ini_con VALUES (?)'


      // variables de consumo actual db_con_act BASE DE DATOS DE CONSUMO ACTUAL
      ID_CIE_10 = req.body.COD_CIE10
      ID_RL_LISTA_SPA = req.body.IMP_SPA
      ID_RL_LISTA_SPA2 = req.body.IMP_SPA_OTRA || 'No aplica'
      ID_RL_IMP_FREC_USO = req.body.IMP_FREC_USO
      ID_RL_IMP_VIA_ADM = req.body.IMP_VIA_ADM 
      IMP_FR_INYECC = req.body.IMP_FR_INYECC 
      ID_RL_INI_ENTORNO  = req.body.IMP_ENTORNO
      ID_RL_INI_LUGAR  = req.body.IMP_LUGAR
      ID_RL_INI_LUGAR2 = req.body.IMP_LUGAR_OTRO || 'No aplica'
      ID_RL_PRO_CA =req.body.PRO_CA|| 2
      FR_SOBRED = req.body.FR_SOBRED|| 2
      FR_SEXUAL =req.body.FR_SEXUAL|| 2
      ACT_SPA_ALC=req.body.ACT_SPA_ALC 	|| 2
      ACT_SPA_TAB=req.body.ACT_SPA_TAB 	|| 2
      ACT_SPA_MAR=req.body.ACT_SPA_MAR 	|| 2
      ACT_SPA_COC=req.body.ACT_SPA_COC 	|| 2
      ACT_SPA_BAS=req.body.ACT_SPA_BAS 	|| 2
      ACT_SPA_EXT=req.body.ACT_SPA_EXT 	|| 2
      ACT_SPA_LSD=req.body.ACT_SPA_LSD 	|| 2
      ACT_SPA_HER=req.body.ACT_SPA_HER 	|| 2
      ACT_SPA_2CB=req.body.ACT_SPA_2CB 	|| 2
      ACT_SPA_MET=req.body.ACT_SPA_MET 	|| 2
      ACT_SPA_GHB=req.body.ACT_SPA_GHB 	|| 2
      ACT_SPA_KET=req.body.ACT_SPA_KET 	|| 2
      ACT_SPA_POP=req.body.ACT_SPA_POP 	|| 2
      ACT_SPA_DIC=req.body.ACT_SPA_DIC 	|| 2
      ACT_SPA_SOL=req.body.ACT_SPA_SOL 	|| 2
      ACT_SPA_ANF=req.body.ACT_SPA_ANF 	|| 2
      ACT_SPA_TRA=req.body.ACT_SPA_TRA 	|| 2
      ACT_SPA_OPI=req.body.ACT_SPA_OPI 	|| 2
      ACT_SPA_CAC=req.body.ACT_SPA_CAC 	|| 2
      ACT_SPA_HON=req.body.ACT_SPA_HON 	|| 2
      ACT_SPA_CSI=req.body.ACT_SPA_CSI 	|| 2
      ACT_SPA_OTR=req.body.ACT_SPA_OTR 	|| 2
      ACT_SPA_OTR_CUA=req.body.ACT_SPA_OTR_CUA || 'No aplica'
      
  
      
      const valuesDBconsumoactual=[
        idglobalreporte,
        ID_CIE_10,
        ID_RL_LISTA_SPA,
        ID_RL_LISTA_SPA2,
        ID_RL_IMP_FREC_USO,
        ID_RL_IMP_VIA_ADM,
        IMP_FR_INYECC,
        ID_RL_INI_ENTORNO,
        ID_RL_INI_LUGAR,
        ID_RL_INI_LUGAR2,
        ID_RL_PRO_CA,
        FR_SOBRED,
        FR_SEXUAL,
        ACT_SPA_ALC,
        ACT_SPA_TAB,
        ACT_SPA_MAR,
        ACT_SPA_COC,
        ACT_SPA_BAS,
        ACT_SPA_EXT,
        ACT_SPA_LSD,
        ACT_SPA_HER,
        ACT_SPA_2CB,
        ACT_SPA_MET,
        ACT_SPA_GHB,
        ACT_SPA_KET,
        ACT_SPA_POP,
        ACT_SPA_DIC,
        ACT_SPA_SOL,
        ACT_SPA_ANF,
        ACT_SPA_TRA,
        ACT_SPA_OPI,
        ACT_SPA_CAC,
        ACT_SPA_HON,
        ACT_SPA_CSI,
        ACT_SPA_OTR,
        ACT_SPA_OTR_CUA,
      ]
      
      //redaccion del query de consumo actual DB_CON_ACT
      //queryDBconsumoactual='INSERT INTO db_con_act (`ID_CIE_10`,`ID_RL_LISTA_SPA`,`ID_RL_LISTA_SPA2`,`ID_RL_IMP_FREC_USO`,`ID_RL_IMP_VIA_ADM`,`IMP_FR_INYECC`,`ID_RL_INI_ENTORNO`,`ID_RL_INI_LUGAR`,`ID_RL_INI_LUGAR2`,`ID_RL_PRO_CA`,`FR_SOBRED`,`FR_SEXUAL`,`ACT_SPA_ALC`,`ACT_SPA_TAB`,`ACT_SPA_MAR`,`ACT_SPA_COC`,`ACT_SPA_BAS`,`ACT_SPA_EXT`,`ACT_SPA_LSD`,`ACT_SPA_HER`,`ACT_SPA_2CB`,`ACT_SPA_MET`,`ACT_SPA_GHB`,`ACT_SPA_KET`,`ACT_SPA_POP`,`ACT_SPA_DIC`,`ACT_SPA_SOL`,`ACT_SPA_ANF`,`ACT_SPA_TRA`,`ACT_SPA_OPI`,`ACT_SPA_CAC`,`ACT_SPA_HON`,`ACT_SPA_CSI`,`ACT_SPA_OTR`,`ACT_SPA_OTR_CUA`) VALUES (?)'
      queryDBconsumoactual='INSERT INTO db_con_act VALUES (?)'
   
      // variables de base de datos de intervenciones db_intven 
      EDUC_PREV =req.body.EDUC_PREV
      ID_RL_EDUC_CAL =req.body.ID_RL_EDUC_CAL
      TTO_PREVIO =req.body.TTO_PREVIO
      
      RED_APOYO =req.body.RED_APOYO

      const valuesDBintven=[
        idglobalreporte,
        EDUC_PREV,
        ID_RL_EDUC_CAL,
        TTO_PREVIO,
        ID_DISP_AYUDA,
        RED_APOYO
      ]
      //redaccion del query de las intervenciones  db_intven
      //queryDBintven='INSERT INTO db_intven (`EDUC_PREV`,`ID_RL_EDUC_CAL`,`TTO_PREVIO`,`ID_DISP_AYUDA`,`RED_APOYO`) VALUES (?)'
      queryDBintven='INSERT INTO db_intven VALUES (?)'


      //variables del responsable de notificacion
      NOMBRES = user.NOMBRE
      APELLIDOS= user.APELLIDO
      ID_RL_TIP_IDE  = user.TIP_IDEN
      NRO_DOC  = user.CEDULA
      TEL_PER = user.TEL
      ID_RL_PRE_SERV_SAL =user.COD_PRE
      
      const valuesDBresnot=[
        idglobalreporte,
        NOMBRES,
        APELLIDOS,
        ID_RL_TIP_IDE,
        NRO_DOC,
        TEL_PER,
        ID_RL_PRE_SERV_SAL
      ]
      
      // redaccion del query de responsable de la notificacion db_res_not
//      queryDBresnot='INSERT INTO `db_res_not` VALUES(`NOMBRES`,`APELLIDOS`,`ID_RL_TIP_IDE`,`NRO_DOC`,`TEL_PER`,`ID_RL_PRE_SERV_SAL`) VALUES (?)'
      queryDBresnot='INSERT INTO `db_res_not` VALUES (?)'

      //variables mas globales que van en otras ddb del reporte
      ID_RL_CIE_10=req.body.ID_RL_CIE_10
      COD_ASE=req.body.COD_ASE
      rl_per_ind=req.body.rl_per_ind
      NOM_GRUPO=req.body.NOM_GRUPO

      
      GENERO=req.body.GENERO
      EST_CIV=req.body.EST_CIV
      NIV_ESC_TER=req.body.NIV_ESC_TER

      
      //query y campos para db_info_general
      const valuesDBinfogneral=[idglobalreporte, NUM_IDE,COD_EVEN,factual, semanaEp,año,COD_PRE,COD_SUB]
      queryDBinfogneral ='INSERT INTO db_info_gral VALUES(?)'
      
      
      //************* */

     

//insertar en db_info_general
      conexion.query( queryDBinfogneral , [valuesDBinfogneral], (error)=>{
        if(error){
          throw error
        }
      })

//insertar en db_ide_pac
     conexion.query( queryDBidenpac ,[valuesDBidenpac], (error)=>{
       if(error){
         throw error
       }
       })
//insertar en db_notif

       conexion.query( queryDBnotif , [valuesDBnotif], (error)=>{
        if(error){
          throw error
        }
      })

//insertar en db_ajus

      conexion.query( queryDBajustecaso , [valuesDBajustecaso], (error)=>{
        if(error){
          throw error
        }
      })

//insertar en db_ajus

      conexion.query( queryDBiniconsumo , [valuesDBiniconsumo], (error)=>{
        if(error){
          throw error
        }
      })
//insertar en db_con_act

      conexion.query( queryDBconsumoactual , [valuesDBconsumoactual], (error)=>{
        if(error){
          throw error
        }
      })

//insertar en db_intven

conexion.query( queryDBintven , [valuesDBintven], (error)=>{
  if(error){
    throw error
  }
})

//insertar en db_res_not

conexion.query( queryDBresnot , [valuesDBresnot], (error)=>{
  if(error){
    throw error
  }
})








 
});
  res.redirect('/da/nuevoreporte')

} catch (error) {
   console.log(error);
}

  };


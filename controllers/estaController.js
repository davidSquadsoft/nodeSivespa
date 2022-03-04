const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const conexion = require("../database/db");
const { promisify } = require("util");
const { userInfo } = require("os");
const { Console } = require("console");
const authController = require('./authController');
const q = require('../database/querys')
const { DateTime } = require("luxon");
const util = require('util');
var moment = require('moment');  
//estadisticas por municipio // fecha
exports.estamuni = async (req, res) => {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
    user= await q(`SELECT * FROM st_user WHERE id_st_user = ${decodificada.id}`)
    user=user[0]
    dateini = req.body.dateini || new Date('1900/01/01').toISOString().slice(0, 10);
    dateend = req.body.dateend || new Date().toISOString().slice(0, 10);
    codmuni = parseInt(req.body.geoEstadistica) || 0
    var filtro
    if(user.TIP_USER==3){
        fechas = await q(`SELECT id_reporte FROM db_info_gral WHERE FEC_NOT >= "${dateini}" AND FEC_NOT <= "${dateend}" AND COD_PRE="${user.COD_PRE}"`)
      
    }else{
        fechas = await q(`SELECT id_reporte FROM db_info_gral WHERE FEC_NOT >= "${dateini}" AND FEC_NOT <= "${dateend}"`)

    }
    municipio = await q(`SELECT id_reporte FROM db_ide_pac WHERE id_rl_divipola LIKE "${codmuni}%"`)
    nommuni = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${codmuni}`)
    //verificamos si se coloca un dato valido en el filtro de municipios
    if(nommuni.length<1){
        muninombre='nada'
    }else{
        muninombre=nommuni[0].NOMMUNIPIO
    }
    if (fechas.length>=1){
    var concatfechas = fechas[0].id_reporte
    for(i=0; i<fechas.length;i++){
        concatfechas +=  ',' + '"' + fechas[i].id_reporte + '"' 
    }
        }else{
            concatfechas = 0
        }
    //concatenamos los codigos de reporte que correspondan al municipio luego de validar que el municipio sea valido
    var quemuni = municipio
    if (quemuni.length >= 1) {
        filtro='mun'
      var concatmuni = municipio[0].id_reporte
      for (j = 1; j < municipio.length; j++) {
        concatmuni += ',' + '"' + quemuni[j].id_reporte + '"' 
      }
    } else {
        concatmuni = 0
    }
    if(muninombre=='nada'){
        filtro='nada'
    }else{
        filtro='mun'
    }
    if(codmuni!=0){
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
    }else{
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatfechas})`)   || [{cantidad:0}]
        var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        muninombre='Antioquia'
    }
    if(user.TIP_USER==3){
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1  AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1  AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1  AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
        var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatfechas})`)  || [{cantidad:0}]
    }
    var lmuni = await q(`SELECT DISTINCT NOMMUNIPIO,CODMUNIC from rl_divipola`)
    res.render('da/estadisticas/estadisticas', {
      tittle: 'Estadisticas',
      user: user,
      alcoholAnt: alcoholAnt[0].cantidad,
      tabaco: tabaco[0].cantidad,
      marihuana: marihuana[0].cantidad,
      cocaina: cocaina[0].cantidad,
      basuco: basuco[0].cantidad,
      extasis: extasis[0].cantidad,
      lsd: lsd[0].cantidad,
      cb2: cb2[0].cantidad,
      metanfetaminas: metanfetaminas[0].cantidad,
      ghb: ghb[0].cantidad,
      ketamina: ketamina[0].cantidad,
      popper: popper[0].cantidad,
      dick: dick[0].cantidad,
      solventes: solventes[0].cantidad,
      anfetaminas: anfetaminas[0].cantidad,
      benzodiazepinas: benzodiazepinas[0].cantidad,
      analgecicos: analgecicos[0].cantidad,
      cacaosab: cacaosab[0].cantidad,
      hongos: hongos[0].cantidad,
      cannartifi: cannartifi[0].cantidad,
      lmuni: lmuni,
      filtro:filtro,
      muninombre: muninombre
  })
}
exports.estasemana= async(req,res)=>{
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
    user= await q(`SELECT * FROM st_user WHERE id_st_user = ${decodificada.id}`)
    user=user[0]
    var lmuni = await q(`SELECT DISTINCT NOMMUNIPIO,CODMUNIC from rl_divipola`)
    codmuni = parseInt(req.body.geoEstadistica) || 0
    municipio = await q(`SELECT id_reporte FROM db_ide_pac WHERE id_rl_divipola LIKE "${codmuni}%"`)
    ano=req.body.ano
    semana=req.body.semana
    semEsta= await q(`SELECT id_reporte FROM db_info_gral WHERE SEMANA = ${semana} AND ANO = ${ano}`)
    nommuni= lmuni.filter(name=>name.CODMUNIC == codmuni)
    nommuni=nommuni[0].NOMMUNIPIO

    if(user.TIP_USER == 3){
        semEsta= await q(`SELECT id_reporte FROM db_info_gral WHERE SEMANA = ${semana} AND ANO= ${ano} AND COD_PRE="${user.COD_PRE}"`)
    }else{
        semEsta= await q(`SELECT id_reporte FROM db_info_gral WHERE SEMANA = ${semana} AND ANO=  ${ano}`)
    }
    if (semEsta.length>=1){
    var concatSem = semEsta[0].id_reporte
    for(d=0;d<semEsta.length;d++){
        concatSem += ',' + '"' + semEsta[d].id_reporte + '"' 
    }
    }else{
        concatSem=0
    }
    if (municipio.length>=1){
        var concatMuni = municipio[0].id_reporte
        for(d=0;d<municipio.length;d++){
            concatMuni += ',' + '"' + municipio[d].id_reporte + '"' 
        }
        }else{
           concatMuni=0
        }
    if(concatMuni==0){
    var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    }else if(concatMuni!=0){
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
        var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatSem}) AND id_reporte IN (${concatMuni})`)  || [{cantidad:0}]
    }
    if(user.TIP_USER==3){
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatSem})`)  || [{cantidad:0}]
    }
    res.render('da/estadisticas/estadisticas', {
        tittle: 'Estadisticas',
        user: user,
        alcoholAnt: alcoholAnt[0].cantidad,
        tabaco: tabaco[0].cantidad,
        marihuana: marihuana[0].cantidad,
        cocaina: cocaina[0].cantidad,
        basuco: basuco[0].cantidad,
        extasis: extasis[0].cantidad,
        lsd: lsd[0].cantidad,
        cb2: cb2[0].cantidad,
        metanfetaminas: metanfetaminas[0].cantidad,
        ghb: ghb[0].cantidad,
        ketamina: ketamina[0].cantidad,
        popper: popper[0].cantidad,
        dick: dick[0].cantidad,
        solventes: solventes[0].cantidad,
        anfetaminas: anfetaminas[0].cantidad,
        benzodiazepinas: benzodiazepinas[0].cantidad,
        analgecicos: analgecicos[0].cantidad,
        cacaosab: cacaosab[0].cantidad,
        hongos: hongos[0].cantidad,
        cannartifi: cannartifi[0].cantidad,
        lmuni: lmuni,
        filtro:'sem',
        muninombre: nommuni
    }) 
}
exports.estaedad=async(req,res)=>{
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
    user= await q(`SELECT * FROM st_user WHERE id_st_user = ${decodificada.id}`)
    user=user[0]
    var lmuni = await q(`SELECT DISTINCT NOMMUNIPIO,CODMUNIC from rl_divipola`)
    edadini=req.body.edadini
    edadfinal=req.body.edadfinal
    semana=req.body.semana
    ano=req.body.ano
    codmuni= parseInt(req.body.geoEstadistica) || 0
    var filtro
    municipio = await q(`SELECT id_reporte FROM db_ide_pac WHERE id_rl_divipola LIKE "${codmuni}%"`)
    edad = await q(`SELECT id_reporte FROM db_ide_pac WHERE EDAD >= "${edadini}" AND EDAD <= "${edadfinal}"`)
    nommuni = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${codmuni}`)
    if (user.TIP_USER==3){
        semEsta= await q(`SELECT id_reporte FROM db_info_gral WHERE SEMANA = ${semana} AND ANO = ${ano} AND COD_PRE="${user.COD_PRE}"`)    
    }else{
            semEsta= await q(`SELECT id_reporte FROM db_info_gral WHERE SEMANA = ${semana} AND ANO=  ${ano}`)
        }
    edadR=edad
    if(codmuni!=0){
        nommuni=nommuni[0].NOMMUNIPIO
    }else{
        nommuni='Antioquia'
    }
    //concatenamos las edades
    if(edadR.length>=1){
        var concatEdadR=edadR[0].id_reporte;
        for (j=1; j<edadR.length;j++){
            concatEdadR += ',' + '"' + edadR[j].id_reporte + '"' 
        }
    }else{
        concatEdadR = 0
    }
    //concatenamos los municipios
    var quemuni = municipio
    if (quemuni.length >= 1) {
        filtro='edad'
      var concatmuni = municipio[0].id_reporte
      for (j = 1; j < municipio.length; j++) {
        concatmuni += ',' + '"' + quemuni[j].id_reporte + '"' 
      }
    } else {
        concatmuni = 0
    }
//concatenamos la semana y año
    if (semEsta.length>=1){
        var concatfechas = semEsta[0].id_reporte
        for(d=0;d<semEsta.length;d++){
            concatfechas += ',' + '"' + semEsta[d].id_reporte + '"' 
        }
        }else{
            concatfechas=0
        }
    if(codmuni!=0){
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatmuni}) AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
    }else{
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
    }
    if(user.TIP_USER==3){
        var alcoholAnt = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var tabaco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var marihuana = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cocaina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var basuco = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var extasis = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var lsd = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cb2 = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var metanfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var ghb = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var ketamina = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var popper = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var dick = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var solventes = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var anfetaminas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var benzodiazepinas = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var analgecicos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cacaosab = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var hongos = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
        var cannartifi = await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1 AND id_reporte IN (${concatfechas}) AND id_reporte IN (${concatEdadR})`)  || [{cantidad:0}]
    }
    res.render('da/estadisticas/estadisticas', {
        tittle: 'Estadisticas',
        user: user,
        alcoholAnt: alcoholAnt[0].cantidad,
        tabaco: tabaco[0].cantidad,
        marihuana: marihuana[0].cantidad,
        cocaina: cocaina[0].cantidad,
        basuco: basuco[0].cantidad,
        extasis: extasis[0].cantidad,
        lsd: lsd[0].cantidad,
        cb2: cb2[0].cantidad,
        metanfetaminas: metanfetaminas[0].cantidad,
        ghb: ghb[0].cantidad,
        ketamina: ketamina[0].cantidad,
        popper: popper[0].cantidad,
        dick: dick[0].cantidad,
        solventes: solventes[0].cantidad,
        anfetaminas: anfetaminas[0].cantidad,
        benzodiazepinas: benzodiazepinas[0].cantidad,
        analgecicos: analgecicos[0].cantidad,
        cacaosab: cacaosab[0].cantidad,
        hongos: hongos[0].cantidad,
        cannartifi: cannartifi[0].cantidad,
        lmuni: lmuni,
        filtro:filtro,
        muninombre: nommuni
    }) 
}
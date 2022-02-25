const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const conexion = require("../database/db");
const { promisify } = require("util");
const { userInfo } = require("os");
const { Console } = require("console");
const authController = require('./authController');
const q = require('../database/querys')


exports.tamizajeassist = async(req,res)=>{
try {
  const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
  creador = await q(`SELECT * FROM st_user WHERE id_st_user =${decodificada.id}`)
  var factual = new Date().toISOString().slice(0, 10);
  id_tamizaje = req.body.NUM_IDE + factual
  const id_creador = creador[0].CEDULA
  const nombrecreador = creador[0].NOMBRE + creador[0].APELLIDO
  var factual = new Date().toISOString().slice(0, 10);
  const TIP_IDE = req.body.TIP_IDE
  const NUM_IDE = req.body.NUM_IDE
  const PRI_NOM = req.body.PRI_NOM
  const SEG_NOM = req.body.SEG_NOM
  const PRI_APE = req.body.PRI_APE
  const SEG_APE = req.body.SEG_APE
  const TELEFONO = req.body.TELEFONO
  const FECHA_NTO = req.body.FECHA_NTO
  const EDAD = req.body.EDAD
  const SEXO = req.body.SEXO
  const NACION = req.body.NACION
  const ID_RL_DIVIPOLA = req.body.ID_RL_DIVIPOLA
  const ID_RL_DIVIPOLA_RESI = req.body.ID_RL_DIVIPOLA_RESI
  const DIR_RES = req.body.DIR_RES
  const tip_reg = req.body.tip_reg
  const cod_adm = req.body.cod_adm
  const INI_EDAD = req.body.INI_EDAD
  const PROFESION= req.body.PROFESION
  ASSIST_P1a_TAB= parseInt(req.body.ASSIST_P1a_TAB) || 0
  ASSIST_P1_EDAD_INI_CIG=req.body.ASSIST_P1_EDAD_INI_CIG || 0
  ASSIST_P1b_ALC= parseInt(req.body.ASSIST_P1b_ALC) || 0
  ASSIST_P1c_CAN= parseInt(req.body.ASSIST_P1c_CAN) || 0
  ASSIST_P1d_COC= parseInt(req.body.ASSIST_P1d_COC) || 0
  ASSIST_P1e_ANF= parseInt(req.body.ASSIST_P1e_ANF) || 0
  ASSIST_P1f_INH= parseInt(req.body.ASSIST_P1f_INH) || 0
  ASSIST_P1g_TRA= parseInt(req.body.ASSIST_P1g_TRA) || 0
  ASSIST_P1h_ALU= parseInt(req.body.ASSIST_P1h_ALU) || 0
  ASSIST_P1i_OPI= parseInt(req.body.ASSIST_P1i_OPI) || 0
  ASSIST_P1j_OTR= parseInt(req.body.ASSIST_P1j_OTR) || 0
  ASSIST_P1_CUAL_OTRA=req.body.ASSIST_P1_CUAL_OTRA || 'no aplica'
  ASSIST_P2a_TAB= parseInt(req.body.ASSIST_P2a_TAB) || 0
  ASSIST_P2b_ALC= parseInt(req.body.ASSIST_P2b_ALC) || 0
  ASSIST_P2c_CAN= parseInt(req.body.ASSIST_P2c_CAN) || 0
  ASSIST_P2d_COC= parseInt(req.body.ASSIST_P2d_COC) || 0
  ASSIST_P2e_ANF= parseInt(req.body.ASSIST_P2e_ANF) || 0
  ASSIST_P2f_INH= parseInt(req.body.ASSIST_P2f_INH) || 0
  ASSIST_P2g_TRA= parseInt(req.body.ASSIST_P2g_TRA) || 0
  ASSIST_P2h_ALU= parseInt(req.body.ASSIST_P2h_ALU) || 0
  ASSIST_P2i_OPI= parseInt(req.body.ASSIST_P2i_OPI) || 0
  ASSIST_P2j_OTR= parseInt(req.body.ASSIST_P2j_OTR) || 0
  ASSIST_P2i_CUAL=req.body.ASSIST_P2i_CUAL || 'no aplica'
  ASSIST_P3a_TAB= parseInt(req.body.ASSIST_P3a_TAB) || 0
  ASSIST_P3b_ALC= parseInt(req.body.ASSIST_P3b_ALC) || 0
  ASSIST_P3c_CAN= parseInt(req.body.ASSIST_P3c_CAN) || 0
  ASSIST_P3d_COC= parseInt(req.body.ASSIST_P3d_COC) || 0
  ASSIST_P3e_ANF= parseInt(req.body.ASSIST_P3e_ANF) || 0
  ASSIST_P3f_INH= parseInt(req.body.ASSIST_P3f_INH) || 0
  ASSIST_P3g_TRA= parseInt(req.body.ASSIST_P3g_TRA) || 0
  ASSIST_P3h_ALU= parseInt(req.body.ASSIST_P3h_ALU) || 0
  ASSIST_P3i_OPI= parseInt(req.body.ASSIST_P3i_OPI) || 0
  ASSIST_P3j_OTR= parseInt(req.body.ASSIST_P3j_OTR) || 0
  ASSIST_P4a_TAB= parseInt(req.body.ASSIST_P4a_TAB) || 0
  ASSIST_P4b_ALC= parseInt(req.body.ASSIST_P4b_ALC) || 0
  ASSIST_P4c_CAN= parseInt(req.body.ASSIST_P4c_CAN) || 0
  ASSIST_P4d_COC= parseInt(req.body.ASSIST_P4d_COC) || 0
  ASSIST_P4e_ANF= parseInt(req.body.ASSIST_P4e_ANF) || 0
  ASSIST_P4f_INH= parseInt(req.body.ASSIST_P4f_INH) || 0
  ASSIST_P4g_TRA= parseInt(req.body.ASSIST_P4g_TRA) || 0
  ASSIST_P4h_ALU= parseInt(req.body.ASSIST_P4h_ALU) || 0
  ASSIST_P4i_OPI= parseInt(req.body.ASSIST_P4i_OPI) || 0
  ASSIST_P4j_OTR= parseInt(req.body.ASSIST_P4j_OTR) || 0
  ASSIST_P5a_TAB= parseInt(req.body.ASSIST_P5a_TAB) || 0
  ASSIST_P5b_ALC= parseInt(req.body.ASSIST_P5b_ALC) || 0
  ASSIST_P5c_CAN= parseInt(req.body.ASSIST_P5c_CAN) || 0
  ASSIST_P5d_COC= parseInt(req.body.ASSIST_P5d_COC) || 0
  ASSIST_P5e_ANF= parseInt(req.body.ASSIST_P5e_ANF) || 0
  ASSIST_P5f_INH= parseInt(req.body.ASSIST_P5f_INH) || 0
  ASSIST_P5g_TRA= parseInt(req.body.ASSIST_P5g_TRA) || 0
  ASSIST_P5h_ALU= parseInt(req.body.ASSIST_P5h_ALU) || 0
  ASSIST_P5i_OPI= parseInt(req.body.ASSIST_P5i_OPI) || 0
  ASSIST_P5j_OTR= parseInt(req.body.ASSIST_P5j_OTR) || 0
  ASSIST_P6a_TAB= parseInt(req.body.ASSIST_P6a_TAB) || 0
  ASSIST_P6b_ALC= parseInt(req.body.ASSIST_P6b_ALC) || 0
  ASSIST_P6c_CAN= parseInt(req.body.ASSIST_P6c_CAN) || 0
  ASSIST_P6d_COC= parseInt(req.body.ASSIST_P6d_COC) || 0
  ASSIST_P6e_ANF= parseInt(req.body.ASSIST_P6e_ANF) || 0
  ASSIST_P6f_INH= parseInt(req.body.ASSIST_P6f_INH) || 0
  ASSIST_P6g_TRA= parseInt(req.body.ASSIST_P6g_TRA) || 0
  ASSIST_P6h_ALU= parseInt(req.body.ASSIST_P6h_ALU) || 0
  ASSIST_P6i_OPI= parseInt(req.body.ASSIST_P6i_OPI) || 0
  ASSIST_P6j_OTR= parseInt(req.body.ASSIST_P6j_OTR) || 0
  ASSIST_P7a_TAB= parseInt(req.body.ASSIST_P7a_TAB) || 0
  ASSIST_P7b_ALC= parseInt(req.body.ASSIST_P7b_ALC) || 0
  ASSIST_P7c_CAN= parseInt(req.body.ASSIST_P7c_CAN) || 0
  ASSIST_P7d_COC= parseInt(req.body.ASSIST_P7d_COC) || 0
  ASSIST_P7e_ANF= parseInt(req.body.ASSIST_P7e_ANF) || 0
  ASSIST_P7f_INH= parseInt(req.body.ASSIST_P7f_INH) || 0
  ASSIST_P7g_TRA= parseInt(req.body.ASSIST_P7g_TRA) || 0
  ASSIST_P7h_ALU= parseInt(req.body.ASSIST_P7h_ALU) || 0
  ASSIST_P7i_OPI= parseInt(req.body.ASSIST_P7i_OPI) || 0
  ASSIST_P7j_OTR= parseInt(req.body.ASSIST_P7j_OTR) || 0
  ASSIST_P8_1_INY=parseInt(req.body.ASSIST_P8_1_INY) || 0
  ASSIST_P8_2_FREC=parseInt(req.body.ASSIST_P8_2_FREC) || 0

ASSIST_Puntajea_TAB = ASSIST_P1a_TAB + ASSIST_P2a_TAB + ASSIST_P3a_TAB + ASSIST_P4a_TAB + ASSIST_P5a_TAB + ASSIST_P6a_TAB + ASSIST_P7a_TAB;

ASSIST_Puntajeb_ALC = ASSIST_P1b_ALC +ASSIST_P2b_ALC+ASSIST_P3b_ALC+ASSIST_P4b_ALC+ASSIST_P5b_ALC+ASSIST_P6b_ALC+ASSIST_P7b_ALC

ASSIST_Puntajec_CAN =ASSIST_P1c_CAN+ASSIST_P2c_CAN+ASSIST_P3c_CAN+ASSIST_P4c_CAN+ASSIST_P5c_CAN+ASSIST_P6c_CAN+ASSIST_P7c_CAN

ASSIST_Puntajed_COC =ASSIST_P1d_COC+ASSIST_P2d_COC+ASSIST_P3d_COC+ASSIST_P4d_COC+ASSIST_P5d_COC+ASSIST_P6d_COC+ASSIST_P7d_COC

ASSIST_Puntajee_ANF =ASSIST_P1e_ANF+ASSIST_P2e_ANF+ASSIST_P3e_ANF+ASSIST_P4e_ANF+ASSIST_P5e_ANF+ASSIST_P6e_ANF+ASSIST_P7e_ANF

ASSIST_Puntajef_INH =ASSIST_P1f_INH+ASSIST_P2f_INH+ASSIST_P3f_INH+ASSIST_P4f_INH+ASSIST_P5f_INH+ASSIST_P6f_INH+ASSIST_P7f_INH

ASSIST_Puntajeg_TRA = ASSIST_P1g_TRA+ASSIST_P2g_TRA+ASSIST_P3g_TRA+ASSIST_P4g_TRA+ASSIST_P5g_TRA+ASSIST_P6g_TRA+ASSIST_P7g_TRA

ASSIST_Puntajeh_ALU  =ASSIST_P1h_ALU+ASSIST_P2h_ALU+ASSIST_P3h_ALU+ASSIST_P4h_ALU+ASSIST_P5h_ALU+ASSIST_P6h_ALU+ASSIST_P7h_ALU

ASSIST_Puntajei_OPI =ASSIST_P1i_OPI+ASSIST_P2i_OPI+ASSIST_P3i_OPI+ASSIST_P4i_OPI+ASSIST_P5i_OPI+ASSIST_P6i_OPI+ASSIST_P7i_OPI

ASSIST_Puntajej_OTR = ASSIST_P1j_OTR+ASSIST_P2j_OTR+ASSIST_P3j_OTR+ASSIST_P4j_OTR+ASSIST_P5j_OTR+ASSIST_P6j_OTR+ASSIST_P7j_OTR

ASSIST_Puntajej_8INY = ASSIST_P8_1_INY + ASSIST_P8_2_FREC


sqlguardar = `INSERT INTO db_tam_assist VALUES(?)`




values=[
  id_tamizaje,
id_creador,
nombrecreador,
factual,
TIP_IDE,
NUM_IDE,
PRI_NOM,
SEG_NOM,
PRI_APE,
SEG_APE,
TELEFONO,
FECHA_NTO,
EDAD,
SEXO,
NACION,
ID_RL_DIVIPOLA,
ID_RL_DIVIPOLA_RESI,
DIR_RES,
tip_reg,
cod_adm,
INI_EDAD,
PROFESION,
ASSIST_P1a_TAB,
ASSIST_P1_EDAD_INI_CIG,
ASSIST_P1b_ALC,
ASSIST_P1c_CAN,
ASSIST_P1d_COC,
ASSIST_P1e_ANF,
ASSIST_P1f_INH,
ASSIST_P1g_TRA,
ASSIST_P1h_ALU,
ASSIST_P1i_OPI,
ASSIST_P1j_OTR,
ASSIST_P1_CUAL_OTRA,
ASSIST_P2a_TAB,
ASSIST_P2b_ALC,
ASSIST_P2c_CAN,
ASSIST_P2d_COC,
ASSIST_P2e_ANF,
ASSIST_P2f_INH,
ASSIST_P2g_TRA,
ASSIST_P2h_ALU,
ASSIST_P2i_OPI,
ASSIST_P2j_OTR,
ASSIST_P2i_CUAL,
ASSIST_P3a_TAB,
ASSIST_P3b_ALC,
ASSIST_P3c_CAN,
ASSIST_P3d_COC,
ASSIST_P3e_ANF,
ASSIST_P3f_INH,
ASSIST_P3g_TRA,
ASSIST_P3h_ALU,
ASSIST_P3i_OPI,
ASSIST_P3j_OTR,
ASSIST_P4a_TAB,
ASSIST_P4b_ALC,
ASSIST_P4c_CAN,
ASSIST_P4d_COC,
ASSIST_P4e_ANF,
ASSIST_P4f_INH,
ASSIST_P4g_TRA,
ASSIST_P4h_ALU,
ASSIST_P4i_OPI,
ASSIST_P4j_OTR,
ASSIST_P5a_TAB,
ASSIST_P5b_ALC,
ASSIST_P5c_CAN,
ASSIST_P5d_COC,
ASSIST_P5e_ANF,
ASSIST_P5f_INH,
ASSIST_P5g_TRA,
ASSIST_P5h_ALU,
ASSIST_P5i_OPI,
ASSIST_P5j_OTR,
ASSIST_P6a_TAB,
ASSIST_P6b_ALC,
ASSIST_P6c_CAN,
ASSIST_P6d_COC,
ASSIST_P6e_ANF,
ASSIST_P6f_INH,
ASSIST_P6g_TRA,
ASSIST_P6h_ALU,
ASSIST_P6i_OPI,
ASSIST_P6j_OTR,
ASSIST_P7a_TAB,
ASSIST_P7b_ALC,
ASSIST_P7c_CAN,
ASSIST_P7d_COC,
ASSIST_P7e_ANF,
ASSIST_P7f_INH,
ASSIST_P7g_TRA,
ASSIST_P7h_ALU,
ASSIST_P7i_OPI,
ASSIST_P7j_OTR,
ASSIST_P8_1_INY,
ASSIST_P8_2_FREC,
ASSIST_Puntajea_TAB,
ASSIST_Puntajeb_ALC,
ASSIST_Puntajec_CAN,
ASSIST_Puntajed_COC,
ASSIST_Puntajee_ANF,
ASSIST_Puntajef_INH,
ASSIST_Puntajeg_TRA,
ASSIST_Puntajeh_ALU,
ASSIST_Puntajei_OPI,
ASSIST_Puntajej_OTR,
ASSIST_Puntajej_8INY
]
conexion.query(sqlguardar, [values], (error) => {
  if (error) {
    throw error
  }else{
    res.redirect('/da/reportes')
  }
})
} catch (error) {
  console.log(error)
}

};

exports.updateAssist=async(req,res)=>{
  const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
  creador = await q(`SELECT * FROM st_user WHERE id_st_user =${decodificada.id}`)
  var factual = new Date().toISOString().slice(0, 10);
  id_tamizaje = req.body.id_tamizaje
  const id_creador = creador[0].CEDULA
  const nombrecreador = creador[0].NOMBRE + creador[0].APELLIDO
  var factual = new Date().toISOString().slice(0, 10);
  const TIP_IDE = req.body.TIP_IDE
  const NUM_IDE = req.body.NUM_IDE
  const PRI_NOM = req.body.PRI_NOM
  const SEG_NOM = req.body.SEG_NOM
  const PRI_APE = req.body.PRI_APE
  const SEG_APE = req.body.SEG_APE
  const TELEFONO = req.body.TELEFONO
  const FECHA_NTO = req.body.FECHA_NTO
  const EDAD = req.body.EDAD
  const SEXO = req.body.SEXO
  const NACION = req.body.NACION
  const ID_RL_DIVIPOLA = req.body.ID_RL_DIVIPOLA
  const ID_RL_DIVIPOLA_RESI = req.body.ID_RL_DIVIPOLA_RESI
  const DIR_RES = req.body.DIR_RES
  const tip_reg = req.body.tip_reg
  const cod_adm = req.body.cod_adm
  const INI_EDAD = req.body.INI_EDAD
  const PROFESION= req.body.PROFESION
  ASSIST_P1a_TAB= parseInt(req.body.ASSIST_P1a_TAB) || 0
  ASSIST_P1_EDAD_INI_CIG=req.body.ASSIST_P1_EDAD_INI_CIG || 0
  ASSIST_P1b_ALC= parseInt(req.body.ASSIST_P1b_ALC) || 0
  ASSIST_P1c_CAN= parseInt(req.body.ASSIST_P1c_CAN) || 0
  ASSIST_P1d_COC= parseInt(req.body.ASSIST_P1d_COC) || 0
  ASSIST_P1e_ANF= parseInt(req.body.ASSIST_P1e_ANF) || 0
  ASSIST_P1f_INH= parseInt(req.body.ASSIST_P1f_INH) || 0
  ASSIST_P1g_TRA= parseInt(req.body.ASSIST_P1g_TRA) || 0
  ASSIST_P1h_ALU= parseInt(req.body.ASSIST_P1h_ALU) || 0
  ASSIST_P1i_OPI= parseInt(req.body.ASSIST_P1i_OPI) || 0
  ASSIST_P1j_OTR= parseInt(req.body.ASSIST_P1j_OTR) || 0
  ASSIST_P1_CUAL_OTRA=req.body.ASSIST_P1_CUAL_OTRA || 'no aplica'
  ASSIST_P2a_TAB= parseInt(req.body.ASSIST_P2a_TAB) || 0
  ASSIST_P2b_ALC= parseInt(req.body.ASSIST_P2b_ALC) || 0
  ASSIST_P2c_CAN= parseInt(req.body.ASSIST_P2c_CAN) || 0
  ASSIST_P2d_COC= parseInt(req.body.ASSIST_P2d_COC) || 0
  ASSIST_P2e_ANF= parseInt(req.body.ASSIST_P2e_ANF) || 0
  ASSIST_P2f_INH= parseInt(req.body.ASSIST_P2f_INH) || 0
  ASSIST_P2g_TRA= parseInt(req.body.ASSIST_P2g_TRA) || 0
  ASSIST_P2h_ALU= parseInt(req.body.ASSIST_P2h_ALU) || 0
  ASSIST_P2i_OPI= parseInt(req.body.ASSIST_P2i_OPI) || 0
  ASSIST_P2j_OTR= parseInt(req.body.ASSIST_P2j_OTR) || 0
  ASSIST_P2i_CUAL=req.body.ASSIST_P2i_CUAL || 'no aplica'
  ASSIST_P3a_TAB= parseInt(req.body.ASSIST_P3a_TAB) || 0
  ASSIST_P3b_ALC= parseInt(req.body.ASSIST_P3b_ALC) || 0
  ASSIST_P3c_CAN= parseInt(req.body.ASSIST_P3c_CAN) || 0
  ASSIST_P3d_COC= parseInt(req.body.ASSIST_P3d_COC) || 0
  ASSIST_P3e_ANF= parseInt(req.body.ASSIST_P3e_ANF) || 0
  ASSIST_P3f_INH= parseInt(req.body.ASSIST_P3f_INH) || 0
  ASSIST_P3g_TRA= parseInt(req.body.ASSIST_P3g_TRA) || 0
  ASSIST_P3h_ALU= parseInt(req.body.ASSIST_P3h_ALU) || 0
  ASSIST_P3i_OPI= parseInt(req.body.ASSIST_P3i_OPI) || 0
  ASSIST_P3j_OTR= parseInt(req.body.ASSIST_P3j_OTR) || 0
  ASSIST_P4a_TAB= parseInt(req.body.ASSIST_P4a_TAB) || 0
  ASSIST_P4b_ALC= parseInt(req.body.ASSIST_P4b_ALC) || 0
  ASSIST_P4c_CAN= parseInt(req.body.ASSIST_P4c_CAN) || 0
  ASSIST_P4d_COC= parseInt(req.body.ASSIST_P4d_COC) || 0
  ASSIST_P4e_ANF= parseInt(req.body.ASSIST_P4e_ANF) || 0
  ASSIST_P4f_INH= parseInt(req.body.ASSIST_P4f_INH) || 0
  ASSIST_P4g_TRA= parseInt(req.body.ASSIST_P4g_TRA) || 0
  ASSIST_P4h_ALU= parseInt(req.body.ASSIST_P4h_ALU) || 0
  ASSIST_P4i_OPI= parseInt(req.body.ASSIST_P4i_OPI) || 0
  ASSIST_P4j_OTR= parseInt(req.body.ASSIST_P4j_OTR) || 0
  ASSIST_P5a_TAB= parseInt(req.body.ASSIST_P5a_TAB) || 0
  ASSIST_P5b_ALC= parseInt(req.body.ASSIST_P5b_ALC) || 0
  ASSIST_P5c_CAN= parseInt(req.body.ASSIST_P5c_CAN) || 0
  ASSIST_P5d_COC= parseInt(req.body.ASSIST_P5d_COC) || 0
  ASSIST_P5e_ANF= parseInt(req.body.ASSIST_P5e_ANF) || 0
  ASSIST_P5f_INH= parseInt(req.body.ASSIST_P5f_INH) || 0
  ASSIST_P5g_TRA= parseInt(req.body.ASSIST_P5g_TRA) || 0
  ASSIST_P5h_ALU= parseInt(req.body.ASSIST_P5h_ALU) || 0
  ASSIST_P5i_OPI= parseInt(req.body.ASSIST_P5i_OPI) || 0
  ASSIST_P5j_OTR= parseInt(req.body.ASSIST_P5j_OTR) || 0
  ASSIST_P6a_TAB= parseInt(req.body.ASSIST_P6a_TAB) || 0
  ASSIST_P6b_ALC= parseInt(req.body.ASSIST_P6b_ALC) || 0
  ASSIST_P6c_CAN= parseInt(req.body.ASSIST_P6c_CAN) || 0
  ASSIST_P6d_COC= parseInt(req.body.ASSIST_P6d_COC) || 0
  ASSIST_P6e_ANF= parseInt(req.body.ASSIST_P6e_ANF) || 0
  ASSIST_P6f_INH= parseInt(req.body.ASSIST_P6f_INH) || 0
  ASSIST_P6g_TRA= parseInt(req.body.ASSIST_P6g_TRA) || 0
  ASSIST_P6h_ALU= parseInt(req.body.ASSIST_P6h_ALU) || 0
  ASSIST_P6i_OPI= parseInt(req.body.ASSIST_P6i_OPI) || 0
  ASSIST_P6j_OTR= parseInt(req.body.ASSIST_P6j_OTR) || 0
  ASSIST_P7a_TAB= parseInt(req.body.ASSIST_P7a_TAB) || 0
  ASSIST_P7b_ALC= parseInt(req.body.ASSIST_P7b_ALC) || 0
  ASSIST_P7c_CAN= parseInt(req.body.ASSIST_P7c_CAN) || 0
  ASSIST_P7d_COC= parseInt(req.body.ASSIST_P7d_COC) || 0
  ASSIST_P7e_ANF= parseInt(req.body.ASSIST_P7e_ANF) || 0
  ASSIST_P7f_INH= parseInt(req.body.ASSIST_P7f_INH) || 0
  ASSIST_P7g_TRA= parseInt(req.body.ASSIST_P7g_TRA) || 0
  ASSIST_P7h_ALU= parseInt(req.body.ASSIST_P7h_ALU) || 0
  ASSIST_P7i_OPI= parseInt(req.body.ASSIST_P7i_OPI) || 0
  ASSIST_P7j_OTR= parseInt(req.body.ASSIST_P7j_OTR) || 0
  ASSIST_P8_1_INY=parseInt(req.body.ASSIST_P8_1_INY) || 0
  ASSIST_P8_2_FREC=parseInt(req.body.ASSIST_P8_2_FREC) || 0

  ASSIST_Puntajea_TAB = ASSIST_P1a_TAB + ASSIST_P2a_TAB + ASSIST_P3a_TAB + ASSIST_P4a_TAB + ASSIST_P5a_TAB + ASSIST_P6a_TAB + ASSIST_P7a_TAB;

  ASSIST_Puntajeb_ALC = ASSIST_P1b_ALC +ASSIST_P2b_ALC+ASSIST_P3b_ALC+ASSIST_P4b_ALC+ASSIST_P5b_ALC+ASSIST_P6b_ALC+ASSIST_P7b_ALC

  ASSIST_Puntajec_CAN =ASSIST_P1c_CAN+ASSIST_P2c_CAN+ASSIST_P3c_CAN+ASSIST_P4c_CAN+ASSIST_P5c_CAN+ASSIST_P6c_CAN+ASSIST_P7c_CAN

  ASSIST_Puntajed_COC =ASSIST_P1d_COC+ASSIST_P2d_COC+ASSIST_P3d_COC+ASSIST_P4d_COC+ASSIST_P5d_COC+ASSIST_P6d_COC+ASSIST_P7d_COC

  ASSIST_Puntajee_ANF =ASSIST_P1e_ANF+ASSIST_P2e_ANF+ASSIST_P3e_ANF+ASSIST_P4e_ANF+ASSIST_P5e_ANF+ASSIST_P6e_ANF+ASSIST_P7e_ANF

  ASSIST_Puntajef_INH =ASSIST_P1f_INH+ASSIST_P2f_INH+ASSIST_P3f_INH+ASSIST_P4f_INH+ASSIST_P5f_INH+ASSIST_P6f_INH+ASSIST_P7f_INH

  ASSIST_Puntajeg_TRA = ASSIST_P1g_TRA+ASSIST_P2g_TRA+ASSIST_P3g_TRA+ASSIST_P4g_TRA+ASSIST_P5g_TRA+ASSIST_P6g_TRA+ASSIST_P7g_TRA

  ASSIST_Puntajeh_ALU  =ASSIST_P1h_ALU+ASSIST_P2h_ALU+ASSIST_P3h_ALU+ASSIST_P4h_ALU+ASSIST_P5h_ALU+ASSIST_P6h_ALU+ASSIST_P7h_ALU

  ASSIST_Puntajei_OPI =ASSIST_P1i_OPI+ASSIST_P2i_OPI+ASSIST_P3i_OPI+ASSIST_P4i_OPI+ASSIST_P5i_OPI+ASSIST_P6i_OPI+ASSIST_P7i_OPI

  ASSIST_Puntajej_OTR = ASSIST_P1j_OTR+ASSIST_P2j_OTR+ASSIST_P3j_OTR+ASSIST_P4j_OTR+ASSIST_P5j_OTR+ASSIST_P6j_OTR+ASSIST_P7j_OTR

  ASSIST_Puntajej_8INY = ASSIST_P8_1_INY + ASSIST_P8_2_FREC

  updateassist= await q(`UPDATE db_tam_assist SET 
  id_creador=${id_creador},
nombrecreador="${nombrecreador}",
FEC_NOT='${factual}',
TIP_IDE=${TIP_IDE},
NUM_IDE=${NUM_IDE},
PRI_NOM="${PRI_NOM}",
SEG_NOM="${SEG_NOM}",
PRI_APE="${PRI_APE}",
SEG_APE="${SEG_APE}",
TELEFONO=${TELEFONO},
FECHA_NTO='${FECHA_NTO}',
EDAD=${EDAD},
SEXO=${SEXO},
NACION=${NACION},
ID_RL_DIVIPOLA=${ID_RL_DIVIPOLA},
ID_RL_DIVIPOLA_RESI=${ID_RL_DIVIPOLA_RESI},
DIR_RES="${DIR_RES}",
tip_reg=${tip_reg},
cod_adm=${cod_adm},
INI_EDAD=${INI_EDAD},
PROFESION=${PROFESION},
ASSIST_P1_EDAD_INI_CIG=${ASSIST_P1_EDAD_INI_CIG},
ASSIST_P1b_ALC=${ASSIST_P1b_ALC},
ASSIST_P1c_CAN=${ASSIST_P1c_CAN},
ASSIST_P1d_COC=${ASSIST_P1d_COC},
ASSIST_P1e_ANF=${ASSIST_P1e_ANF},
ASSIST_P1f_INH=${ASSIST_P1f_INH},
ASSIST_P1g_TRA=${ASSIST_P1g_TRA},
ASSIST_P1h_ALU=${ASSIST_P1h_ALU},
ASSIST_P1i_OPI=${ASSIST_P1i_OPI},
ASSIST_P1j_OTR=${ASSIST_P1j_OTR},
ASSIST_P1_CUAL_OTRA="${ASSIST_P1_CUAL_OTRA}",
ASSIST_P2a_TAB=${ASSIST_P2a_TAB},
ASSIST_P2b_ALC=${ASSIST_P2b_ALC},
ASSIST_P2c_CAN=${ASSIST_P2c_CAN},
ASSIST_P2d_COC=${ASSIST_P2d_COC},
ASSIST_P2e_ANF=${ASSIST_P2e_ANF},
ASSIST_P2f_INH=${ASSIST_P2f_INH},
ASSIST_P2g_TRA=${ASSIST_P2g_TRA},
ASSIST_P2h_ALU=${ASSIST_P2h_ALU},
ASSIST_P2i_OPI=${ASSIST_P2i_OPI},
ASSIST_P2j_OTR=${ASSIST_P2j_OTR},
ASSIST_P2i_CUAL="${ASSIST_P2i_CUAL}",
ASSIST_P3a_TAB=${ASSIST_P3a_TAB},
ASSIST_P3b_ALC=${ASSIST_P3b_ALC},
ASSIST_P3c_CAN=${ASSIST_P3c_CAN},
ASSIST_P3d_COC=${ASSIST_P3d_COC},
ASSIST_P3e_ANF=${ASSIST_P3e_ANF},
ASSIST_P3f_INH=${ASSIST_P3f_INH},
ASSIST_P3g_TRA=${ASSIST_P3g_TRA},
ASSIST_P3h_ALU=${ASSIST_P3h_ALU},
ASSIST_P3i_OPI=${ASSIST_P3i_OPI},
ASSIST_P3j_OTR=${ASSIST_P3j_OTR},
ASSIST_P4a_TAB=${ASSIST_P4a_TAB},
ASSIST_P4b_ALC=${ASSIST_P4b_ALC},
ASSIST_P4c_CAN=${ASSIST_P4c_CAN},
ASSIST_P4d_COC=${ASSIST_P4d_COC},
ASSIST_P4e_ANF=${ASSIST_P4e_ANF},
ASSIST_P4f_INH=${ASSIST_P4f_INH},
ASSIST_P4g_TRA=${ASSIST_P4g_TRA},
ASSIST_P4h_ALU=${ASSIST_P4h_ALU},
ASSIST_P4i_OPI=${ASSIST_P4i_OPI},
ASSIST_P4j_OTR=${ASSIST_P4j_OTR},
ASSIST_P5a_TAB=${ASSIST_P5a_TAB},
ASSIST_P5b_ALC=${ASSIST_P5b_ALC},
ASSIST_P5c_CAN=${ASSIST_P5c_CAN},
ASSIST_P5d_COC=${ASSIST_P5d_COC},
ASSIST_P5e_ANF=${ASSIST_P5e_ANF},
ASSIST_P5f_INH=${ASSIST_P5f_INH},
ASSIST_P5g_TRA=${ASSIST_P5g_TRA},
ASSIST_P5h_ALU=${ASSIST_P5h_ALU},
ASSIST_P5i_OPI=${ASSIST_P5i_OPI},
ASSIST_P5j_OTR=${ASSIST_P5j_OTR},
ASSIST_P6a_TAB=${ASSIST_P6a_TAB},
ASSIST_P6b_ALC=${ASSIST_P6b_ALC},
ASSIST_P6c_CAN=${ASSIST_P6c_CAN},
ASSIST_P6d_COC=${ASSIST_P6d_COC},
ASSIST_P6e_ANF=${ASSIST_P6e_ANF},
ASSIST_P6f_INH=${ASSIST_P6f_INH},
ASSIST_P6g_TRA=${ASSIST_P6g_TRA},
ASSIST_P6h_ALU=${ASSIST_P6h_ALU},
ASSIST_P6i_OPI=${ASSIST_P6i_OPI},
ASSIST_P6j_OTR=${ASSIST_P6j_OTR},
ASSIST_P7a_TAB=${ASSIST_P7a_TAB},
ASSIST_P7b_ALC=${ASSIST_P7b_ALC},
ASSIST_P7c_CAN=${ASSIST_P7c_CAN},
ASSIST_P7d_COC=${ASSIST_P7d_COC},
ASSIST_P7e_ANF=${ASSIST_P7e_ANF},
ASSIST_P7f_INH=${ASSIST_P7f_INH},
ASSIST_P7g_TRA=${ASSIST_P7g_TRA},
ASSIST_P7h_ALU=${ASSIST_P7h_ALU},
ASSIST_P7i_OPI=${ASSIST_P7i_OPI},
ASSIST_P7j_OTR=${ASSIST_P7j_OTR},
ASSIST_P8_1_INY=${ASSIST_P8_1_INY},
ASSIST_P8_2_FREC=${ASSIST_P8_2_FREC},
ASSIST_Puntajea_TAB=${ASSIST_Puntajea_TAB},
ASSIST_Puntajeb_ALC=${ASSIST_Puntajeb_ALC},
ASSIST_Puntajec_CAN=${ASSIST_Puntajec_CAN},
ASSIST_Puntajed_COC=${ASSIST_Puntajed_COC},
ASSIST_Puntajee_ANF=${ASSIST_Puntajee_ANF},
ASSIST_Puntajef_INH=${ASSIST_Puntajef_INH},
ASSIST_Puntajeg_TRA=${ASSIST_Puntajeg_TRA},
ASSIST_Puntajeh_ALU=${ASSIST_Puntajeh_ALU},
ASSIST_Puntajei_OPI=${ASSIST_Puntajei_OPI},
ASSIST_Puntajej_OTR=${ASSIST_Puntajej_OTR},
ASSIST_Puntajej_8INY=${ASSIST_Puntajej_8INY} WHERE id_tamizaje= "${id_tamizaje}"
  
  `)
  console.log(id_tamizaje)
  res.redirect(`/da/vertamizaje_assist/${id_tamizaje}`)
  
};

exports.deleteAssist = async(req,res)=>{
  id_tamizaje=req.params.id
  console.log(id_tamizaje)
  delete_tam=await q(`DELETE FROM db_tam_assist WHERE db_tam_assist.id_tamizaje="${id_tamizaje}"`)
  res.redirect('/da/reportes')};

exports.tamizajecrafft = async (req, res) => {
  try {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
    creador = await q(`SELECT * FROM st_user WHERE id_st_user =${decodificada.id}`)
    var factual = new Date().toISOString().slice(0, 10);
    id_tamizaje = req.body.NUM_IDE + factual
    const id_creador = creador[0].CEDULA
    const nombrecreador = creador[0].NOMBRE + creador[0].APELLIDO
    var factual = new Date().toISOString().slice(0, 10);
    const TIP_IDE = req.body.TIP_IDE
    const NUM_IDE = req.body.NUM_IDE
    const PRI_NOM = req.body.PRI_NOM
    const SEG_NOM = req.body.SEG_NOM
    const PRI_APE = req.body.PRI_APE
    const SEG_APE = req.body.SEG_APE
    const TELEFONO = req.body.TELEFONO
    const FECHA_NTO = req.body.FECHA_NTO
    const EDAD = req.body.EDAD
    const SEXO = req.body.SEXO
    const NACION = req.body.NACION
    const ID_RL_DIVIPOLA = req.body.ID_RL_DIVIPOLA
    const ID_RL_DIVIPOLA_RESI = req.body.ID_RL_DIVIPOLA_RESI
    const DIR_RES = req.body.DIR_RES
    const tip_reg = req.body.tip_reg
    const cod_adm = req.body.cod_adm
    const EDAD_INI = req.body.EDAD_INI
    const SPA_INI = req.body.SPA_INI
    const CRAFFT_Pa1_ALC = req.body.CRAFFT_Pa1_ALC
    const CRAFFT_Pa2_MAR = req.body.CRAFFT_Pa2_MAR
    const CRAFFT_Pa3_OTR = req.body.CRAFFT_Pa3_OTR
    var CRAFFT_Pb1_RIESGOS = parseInt(req.body.CRAFFT_Pb1_RIESGOS)
    var CRAFFT_Pb2_DISMIN = parseInt(req.body.CRAFFT_Pb2_DISMIN)
    var CRAFFT_Pb3_RELAJ = parseInt(req.body.CRAFFT_Pb3_RELAJ)
     var CRAFFT_Pb4_LIOS = parseInt(req.body.CRAFFT_Pb4_LIOS)
    var CRAFFT_Pb5_OLVIDO = parseInt(req.body.CRAFFT_Pb5_OLVIDO)
    var CRAFFT_Pb6_SOLO = parseInt(req.body.CRAFFT_Pb6_SOLO)
    var CRAFFT_Puntaje=CRAFFT_Pb2_DISMIN + CRAFFT_Pb3_RELAJ + CRAFFT_Pb4_LIOS + CRAFFT_Pb1_RIESGOS + CRAFFT_Pb5_OLVIDO + CRAFFT_Pb6_SOLO
    console.log(CRAFFT_Puntaje)
    if (CRAFFT_Puntaje == 1 || CRAFFT_Puntaje==2){
      var accion='Se debe hacer entrevista a profundidad y hablar con la familia (núcleo primario) por tratarse de un menor de edad.'

    }else if (CRAFFT_Puntaje ==3 || CRAFFT_Puntaje==4 || CRAFFT_Puntaje==6){
      var accion= 'Alerta sobre un posible consumo de riesgo, criterio para remitir al usuario a una evaluación especializada; se debe afianzar el criterio con lo identificado en la entrevista y la aplicación de otras pruebas'
      
    }else{
      var accion='No corre riesgo'
    }

    values = [
      id_tamizaje,
      id_creador,
      nombrecreador,
      factual,
      TIP_IDE,
      NUM_IDE,
      PRI_NOM,
      SEG_NOM,
      PRI_APE,
      SEG_APE,
      TELEFONO,
      FECHA_NTO,
      EDAD,
      SEXO,
      NACION,
      ID_RL_DIVIPOLA,
      ID_RL_DIVIPOLA_RESI,
      DIR_RES,
      tip_reg,
      cod_adm,
      EDAD_INI,
      SPA_INI,
      CRAFFT_Pa1_ALC,
      CRAFFT_Pa2_MAR,
      CRAFFT_Pa3_OTR,
      CRAFFT_Pb1_RIESGOS,
      CRAFFT_Pb2_DISMIN,
      CRAFFT_Pb3_RELAJ,
      CRAFFT_Pb4_LIOS,
      CRAFFT_Pb5_OLVIDO,
      CRAFFT_Pb6_SOLO,
      CRAFFT_Puntaje,
      accion
    ]
    sqlguardar = 'INSERT INTO db_tam_crafft VALUES (?)'

    conexion.query(sqlguardar, [values], (error) => {
      if (error) {
        throw error
      }else{
        res.redirect('/da/reportes')
      }
    })
  } catch (error) {
    console.log(error)
  }
};

exports.updateCrafft= async(req,res)=>{
  id_tamizaje=req.body.id_tamizaje
  try {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
    creador = await q(`SELECT * FROM st_user WHERE id_st_user =${decodificada.id}`)
    var factual = new Date().toISOString().slice(0, 10);
    id_tamizaje = req.body.id_tamizaje
    const id_creador = creador[0].CEDULA
    const nombrecreador = creador[0].NOMBRE + creador[0].APELLIDO
    var factual = new Date().toISOString().slice(0,10);
    const TIP_IDE = req.body.TIP_IDE
    const NUM_IDE = req.body.NUM_IDE
    const PRI_NOM = req.body.PRI_NOM
    const SEG_NOM = req.body.SEG_NOM
    const PRI_APE = req.body.PRI_APE
    const SEG_APE = req.body.SEG_APE
    const TELEFONO = req.body.TELEFONO
    var FECHA_NTO = req.body.FECHA_NTO
    
    const EDAD = req.body.EDAD
    const SEXO = req.body.SEXO
    const NACION = req.body.NACION
    const ID_RL_DIVIPOLA = req.body.ID_RL_DIVIPOLA
    const ID_RL_DIVIPOLA_RESI = req.body.ID_RL_DIVIPOLA_RESI
    const DIR_RES = req.body.DIR_RES
    const tip_reg = req.body.tip_reg
    const cod_adm = req.body.cod_adm
    const EDAD_INI = req.body.EDAD_INI
    const SPA_INI = req.body.SPA_INI
    const CRAFFT_Pa1_ALC = req.body.CRAFFT_Pa1_ALC
    const CRAFFT_Pa2_MAR = req.body.CRAFFT_Pa2_MAR
    const CRAFFT_Pa3_OTR = req.body.CRAFFT_Pa3_OTR
    var CRAFFT_Pb1_RIESGOS = parseInt(req.body.CRAFFT_Pb1_RIESGOS)
    var CRAFFT_Pb2_DISMIN = parseInt(req.body.CRAFFT_Pb2_DISMIN)
    var CRAFFT_Pb3_RELAJ = parseInt(req.body.CRAFFT_Pb3_RELAJ)
     var CRAFFT_Pb4_LIOS = parseInt(req.body.CRAFFT_Pb4_LIOS)
    var CRAFFT_Pb5_OLVIDO = parseInt(req.body.CRAFFT_Pb5_OLVIDO)
    var CRAFFT_Pb6_SOLO = parseInt(req.body.CRAFFT_Pb6_SOLO)
    var CRAFFT_Puntaje=CRAFFT_Pb2_DISMIN + CRAFFT_Pb3_RELAJ + CRAFFT_Pb4_LIOS + CRAFFT_Pb1_RIESGOS + CRAFFT_Pb5_OLVIDO + CRAFFT_Pb6_SOLO
    
    if (CRAFFT_Puntaje == 1 || CRAFFT_Puntaje==2){
      var accion='Se debe hacer entrevista a profundidad y hablar con la familia (núcleo primario) por tratarse de un menor de edad.'

    }else if (CRAFFT_Puntaje ==3 || CRAFFT_Puntaje==4 || CRAFFT_Puntaje==6){
      var accion= 'Alerta sobre un posible consumo de riesgo, criterio para remitir al usuario a una evaluación especializada; se debe afianzar el criterio con lo identificado en la entrevista y la aplicación de otras pruebas'
      
    }else{
      var accion='No corre riesgo'
    }

    console.log(factual)
    sqlupdate = await q(`UPDATE db_tam_crafft SET nombrecreador='${nombrecreador}',
      
      TIP_IDE=${TIP_IDE},
      NUM_IDE=${NUM_IDE},
      PRI_NOM='${PRI_NOM}',
      SEG_NOM='${SEG_NOM}',
      PRI_APE='${PRI_APE}',
      SEG_APE='${SEG_APE}',
      TELEFONO=${TELEFONO},
      FECHA_NTO='${FECHA_NTO}',
      EDAD=${EDAD},
      SEXO=${SEXO},
      NACION=${NACION},
      ID_RL_DIVIPOLA=${ID_RL_DIVIPOLA[0]},
      ID_RL_DIVIPOLA_RESI=${ID_RL_DIVIPOLA_RESI[0]},
      DIR_RES='${DIR_RES}',
      tip_reg=${tip_reg},
      cod_adm=${cod_adm},
      EDAD_INI=${EDAD_INI},
      SPA_INI=${SPA_INI},
      CRAFFT_Pa1_ALC=${CRAFFT_Pa1_ALC},
      CRAFFT_Pa2_MAR=${CRAFFT_Pa2_MAR},
      CRAFFT_Pa3_OTR=${CRAFFT_Pa3_OTR},
      CRAFFT_Pb1_RIESGOS=${CRAFFT_Pb1_RIESGOS},
      CRAFFT_Pb2_DISMIN=${CRAFFT_Pb2_DISMIN},
      CRAFFT_Pb3_RELAJ=${CRAFFT_Pb3_RELAJ},
      CRAFFT_Pb4_LIOS=${CRAFFT_Pb4_LIOS},
      CRAFFT_Pb5_OLVIDO=${CRAFFT_Pb5_OLVIDO},
      CRAFFT_Pb6_SOLO=${CRAFFT_Pb6_SOLO},
      CRAFFT_Puntaje=${CRAFFT_Puntaje},
      accion='${accion}' WHERE db_tam_crafft.id_tamizaje="${id_tamizaje}"
    
    
    `)
    res.redirect(`/da/vertamizaje_crafft/${id_tamizaje}`)
   

    
  } catch (error) {
    console.log(error)
  }
};

exports.deleteCrafft = async(req,res)=>{
  id_tamizaje=req.params.id
  console.log(id_tamizaje)
  delete_tam=await q(`DELETE FROM db_tam_crafft WHERE db_tam_crafft.id_tamizaje="${id_tamizaje}"`)
  res.redirect('/da/reportes')
};

exports.dareporte = async (req, res) => {
  try {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
    conexion.query(
      "SELECT * FROM st_user WHERE id_st_user =?",
      [decodificada.id],
      (error, resultU) => {
        user = resultU[0]
        //fecha actual:
        const factual = new Date().toISOString().slice(0, 10);
        //semana epidemiologica:
        currentdate = new Date();
        var oneJan = new Date(currentdate.getFullYear(), 0, 1);
        var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        var semanaEp = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7)
        //año
        const fechaN = new Date()
        var idglobalreporte = req.body.NUM_IDE + factual
        console.log(idglobalreporte)
        //****** leemos variables para db_info_gnral */
        const año = fechaN.getFullYear();
        const COD_EVEN = req.body.COD_CIE10
        const COD_PRE = user.COD_PRE
        const COD_SUB = user.COD_SUB
        console.log(req.body.PRI_NOM)
        // variables de db_ide_pac identificacion de paciente
        const ID_TIP_IDE = req.body.ID_TIP_IDE
        const NUM_IDE = req.body.NUM_IDE
        PRI_NOM = req.body.PRI_NOM
        SEG_NOM = req.body.SEG_NOM
        PRI_APE = req.body.PRI_APE
        SEG_APE = req.body.SEG_APE
        TELEFONO = req.body.TELEFONO
        FECHA_NTO = req.body.FECHA_NTO
        EDAD = req.body.EDAD
        ID_SEXO = req.body.ID_SEXO
        ID_RL_NACIONALIDAD = req.body.ID_RL_NACIONALIDAD
        ID_RL_DIVIPOLA = req.body.ID_RL_DIVIPOLA
        DIR_RES = req.body.DIR_RES
        ID_COD_PAIS_O = ID_RL_NACIONALIDAD
        DIR_RES = req.body.DIR_RES
        id_rl_tip_ss = req.body.id_rl_tip_ss
        CIUO88 = req.body.CIUO88
        ESTRATO = req.body.ESTRATO
        gpdes = req.body.gpdes || 2
        gpmigr = req.body.gpmigr || 2
        gpcar = req.body.gpcar || 2
        gpges = req.body.gpges || 2
        SEM_GES = req.body.SEM_GES || 0
        gpindi = req.body.gpindi || 2
        gpicbfs = req.body.gpicbfs || 2
        gpmc = req.body.gpmc || 2
        gpdesmo = req.body.gpdesmo || 2
        gppsi = req.body.gppsi || 2
        gpvicvio = req.body.gpvicvio || 2
        gpotro = req.body.gpotro || 2
        COD_ASE = req.body.COD_ASE
        rl_per_ind = req.body.rl_per_ind
        NOM_GRUPO = req.body.NOM_GRUPO || 'No aplica'
        GENERO = req.body.GENERO
        EST_CIV = req.body.EST_CIV
        NIV_ESC_TER = req.body.NIV_ESC_TER
        const valuesDBidenpac = [
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
          gpotro,
          CIUO88,
          COD_ASE,
          rl_per_ind,
          NOM_GRUPO,
          GENERO,
          EST_CIV,
          NIV_ESC_TER]
        // redaccion del query de db_ide_pac identificacion de paciente
        //queryDBidenpac ='INSERT INTO db_ide_pac (`ID_TIP_IDE`,`NUM_IDE`,`PRI_NOM`,`SEG_NOM`,`PRI_APE`,`SEG_APE`,`TELEFONO`,`FECHA_NTO`,`EDAD`,`ID_SEXO`,`ID_RL_NACIONALIDAD`,`ID_COD_PAIS_O`,`ID_RL_DIVIPOLA`,`DIR_RES`,`id_rl_tip_ss`,`ESTRATO`,`gpdes`,`gpmigr`,`gpcar`,`gpges`,`SEM_GES`,`gpindi`,`gpicbfs`,`gpmc`,`gpdesmo`,`gppsi`,`gpvicvio`,`gpotro`) VALUES(?)'
        queryDBidenpac = 'INSERT INTO db_ide_pac VALUES(?)'
        //********************** */
        // VARIABLES PARA LA NOTIFICACION DB_notif  
        ID_RL_FUENTE = req.body.ID_RL_FUENTE
        DIR_RES = req.body.DIR_RES
        FEC_CON = req.body.FEC_CON
        INI_SIN = req.body.INI_SIN || new Date("1001-01-01").toISOString().slice(0, 10)
         
        ID_TIP_CAS = req.body.ID_TIP_CAS
        PAC_HOS = req.body.PAC_HOS
        FEC_HOS = req.body.FEC_HOS || new Date("1001-01-01").toISOString().slice(0, 10)
        ID_CON_FIN = req.body.ID_CON_FIN
        FEC_DEF = req.body.FEC_DEF || new Date("1001-01-01").toISOString().slice(0, 10)
        CER_DEF = req.body.CER_DEF || 'No aplica'
        ID_RL_CIE_10 = req.body.ID_RL_CIE_10 || 20000
        NOM_DIL_FI = req.body.NOM_DIL_FI
        TEL_DIL_FI = req.body.TEL_DIL_FI
        const valuesDBnotif = [
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
          ID_RL_CIE_10,
          NOM_DIL_FI,
          TEL_DIL_FI
        ]
        // redaccion del query de db_notif notificacion del incidente
        
        queryDBnotif = 'INSERT INTO db_notif VALUES (?)'
        //VARIABLES DE AJUSTE DEL CASO
        ID_RL_AJUSTE = req.body.ID_RL_AJUSTE
        ID_DISP_AYUDA = req.body.ID_DISP_AYUDA
        const valuesDBajustecaso = [
          idglobalreporte,
          ID_RL_AJUSTE,
          factual,
          ID_DISP_AYUDA
        ]
        //redaccion del query para db_aju base de datos de ajustes del caso y notificacion del incidente
        //queryDBajustecaso='INSERT INTO db_aju (`ID_RL_AJUSTE`,`FEC_AJU`,`ID_HP_AYUDA`) VALUES (?)'
        queryDBajustecaso = 'INSERT INTO db_aju VALUES (?)'
        //variables de inicio de consumo (varias se usan en otras db atento)
        INI_EDAD = req.body.INI_EDAD
        ID_RL_LISTA_SPA = req.body.INI_SPA
        ID_RL_LISTA_SPA2 = req.body.INI_SPA_OTRA || 'No aplica'
        ID_RL_INI_PER = req.body.INI_PERSONA
        ID_RL_INI_ENTORNO = req.body.INI_ENTORNO
        ID_RL_INI_LUGAR = req.body.INI_LUGAR
        INI_LUGAR_OTRO = req.body.INI_LUGAR_OTRO || 'No aplica'
        ID_RL_INI_MOTIV = req.body.INI_MOTIVO
        ID_RL_INI_MOTIV2 = req.body.INI_MOTIVO_OTRA || 'No aplica'
        const valuesDBiniconsumo = [
          idglobalreporte,
          INI_EDAD,
          ID_RL_LISTA_SPA,
          ID_RL_LISTA_SPA2,
          ID_RL_INI_PER,
          ID_RL_INI_ENTORNO,
          ID_RL_INI_LUGAR,
          INI_LUGAR_OTRO,
          ID_RL_INI_MOTIV,
          ID_RL_INI_MOTIV2,
        ]
        //queryDBiniconsumo='INSERT INTO db_ini_con (`INI_EDAD`,`ID_RL_LISTA_SPA`,`ID_RL_LISTA_SPA2`,`ID_RL_INI_PER`,`ID_RL_INI_ENTORNO`,`ID_RL_INI_LUGAR`,`ID_RL_INI_MOTIV`,`ID_RL_INI_MOTIV2`) VALUES (?)'
        queryDBiniconsumo = 'INSERT INTO db_ini_con VALUES (?)'
        // variables de consumo actual db_con_act BASE DE DATOS DE CONSUMO ACTUAL
        ID_CIE_10 = req.body.COD_CIE10
        ID_RL_LISTA_SPA = req.body.IMP_SPA
        ID_RL_LISTA_SPA2 = req.body.IMP_SPA_OTRA || 'No aplica'
        ID_RL_IMP_FREC_USO = req.body.IMP_FREC_USO
        ID_RL_IMP_VIA_ADM = req.body.IMP_VIA_ADM
        IMP_FR_INYECC = req.body.IMP_FR_INYECC
        ID_RL_INI_ENTORNO = req.body.IMP_ENTORNO
        ID_RL_INI_LUGAR = req.body.IMP_LUGAR
        ID_RL_INI_LUGAR2 = req.body.IMP_LUGAR_OTRO || 'No aplica'
        ID_RL_PRO_CA = req.body.PRO_CA || 2
        FR_SOBRED = req.body.FR_SOBRED || 2
        FR_SEXUAL = req.body.FR_SEXUAL || 2
        ACT_SPA_ALC = req.body.ACT_SPA_ALC || 2
        ACT_SPA_TAB = req.body.ACT_SPA_TAB || 2
        ACT_SPA_MAR = req.body.ACT_SPA_MAR || 2
        ACT_SPA_COC = req.body.ACT_SPA_COC || 2
        ACT_SPA_BAS = req.body.ACT_SPA_BAS || 2
        ACT_SPA_EXT = req.body.ACT_SPA_EXT || 2
        ACT_SPA_LSD = req.body.ACT_SPA_LSD || 2
        ACT_SPA_HER = req.body.ACT_SPA_HER || 2
        ACT_SPA_2CB = req.body.ACT_SPA_2CB || 2
        ACT_SPA_MET = req.body.ACT_SPA_MET || 2
        ACT_SPA_GHB = req.body.ACT_SPA_GHB || 2
        ACT_SPA_KET = req.body.ACT_SPA_KET || 2
        ACT_SPA_POP = req.body.ACT_SPA_POP || 2
        ACT_SPA_DIC = req.body.ACT_SPA_DIC || 2
        ACT_SPA_SOL = req.body.ACT_SPA_SOL || 2
        ACT_SPA_ANF = req.body.ACT_SPA_ANF || 2
        ACT_SPA_TRA = req.body.ACT_SPA_TRA || 2
        ACT_SPA_OPI = req.body.ACT_SPA_OPI || 2
        ACT_SPA_CAC = req.body.ACT_SPA_CAC || 2
        ACT_SPA_HON = req.body.ACT_SPA_HON || 2
        ACT_SPA_CSI = req.body.ACT_SPA_CSI || 2
        ACT_SPA_OTR = req.body.ACT_SPA_OTR || 2
        ACT_SPA_OTR_CUA = req.body.ACT_SPA_OTR_CUA || 'No aplica'
        const valuesDBconsumoactual = [
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
        queryDBconsumoactual = 'INSERT INTO db_con_act VALUES (?)'
        // variables de base de datos de intervenciones db_intven 
        EDUC_PREV = req.body.EDUC_PREV
        ID_RL_EDUC_CAL = req.body.ID_RL_EDUC_CAL
        TTO_PREVIO = req.body.TTO_PREVIO
        RED_APOYO = req.body.RED_APOYO
        const valuesDBintven = [
          idglobalreporte,
          EDUC_PREV,
          ID_RL_EDUC_CAL,
          TTO_PREVIO,
          ID_DISP_AYUDA,
          RED_APOYO
        ]
        //redaccion del query de las intervenciones  db_intven
        //queryDBintven='INSERT INTO db_intven (`EDUC_PREV`,`ID_RL_EDUC_CAL`,`TTO_PREVIO`,`ID_DISP_AYUDA`,`RED_APOYO`) VALUES (?)'
        queryDBintven = 'INSERT INTO db_intven VALUES (?)'
        //variables del responsable de notificacion
        NOMBRES = user.NOMBRE
        APELLIDOS = user.APELLIDO
        ID_RL_TIP_IDE = user.TIP_IDEN
        NRO_DOC = user.CEDULA
        TEL_PER = user.TEL
        ID_RL_PRE_SERV_SAL = user.COD_PRE
        const valuesDBresnot = [
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
        queryDBresnot = 'INSERT INTO `db_res_not` VALUES (?)'
        //variables mas globales que van en otras ddb del reporte
        //query y campos para db_info_general
        const valuesDBinfogneral = [idglobalreporte, NUM_IDE, COD_EVEN, factual, semanaEp, año, COD_PRE, COD_SUB]
        queryDBinfogneral = 'INSERT INTO db_info_gral VALUES(?)'
        //************* */
        //insertar en db_info_general
        conexion.query(queryDBinfogneral, [valuesDBinfogneral], (error) => {
          if (error) {
            throw error
          }
        })
        //insertar en db_ide_pac
        conexion.query(queryDBidenpac, [valuesDBidenpac], (error) => {
          if (error) {
            throw error
          }
        })
        //insertar en db_notif
        conexion.query(queryDBnotif, [valuesDBnotif], (error) => {
          if (error) {
            throw error
          }
        })
        //insertar en db_ajus
        conexion.query(queryDBajustecaso, [valuesDBajustecaso], (error) => {
          if (error) {
            throw error
          }
        })
        //insertar en db_ajus
        conexion.query(queryDBiniconsumo, [valuesDBiniconsumo], (error) => {
          if (error) {
            throw error
          }
        })
        //insertar en db_con_act
        conexion.query(queryDBconsumoactual, [valuesDBconsumoactual], (error) => {
          if (error) {
            throw error
          }
        })
        //insertar en db_intven
        conexion.query(queryDBintven, [valuesDBintven], (error) => {
          if (error) {
            throw error
          }
        })
        //insertar en db_res_not
        conexion.query(queryDBresnot, [valuesDBresnot], (error) => {
          if (error) {
            throw error
          }
        })
      });
    res.redirect('/da/nuevoreporte')
  } catch (error) {
    console.log(error);
  }
};
exports.updatereporte = async (req, res) => {
  try {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
    creador = await q(`SELECT * FROM st_user WHERE id_st_user =${decodificada.id}`)
    user = creador[0]
    id_reporte = req.body.id_reporte
     factual = new Date().toISOString().slice(0, 10);
     ID_TIP_IDE = req.body.ID_TIP_IDE
     NUM_IDE = req.body.NUM_IDE
    PRI_NOM = req.body.PRI_NOM
    SEG_NOM = req.body.SEG_NOM
    PRI_APE = req.body.PRI_APE
    SEG_APE = req.body.SEG_APE
    TELEFONO = req.body.TELEFONO
    FECHA_NTO = req.body.FECHA_NTO
    EDAD = req.body.EDAD
    ID_SEXO = req.body.ID_SEXO
    ID_RL_NACIONALIDAD = req.body.ID_RL_NACIONALIDAD[0]
    var ID_RL_NACIONALIDADa = req.body.ID_RL_NACIONALIDADa
    ID_COD_PAIS_O = ID_RL_NACIONALIDAD[0]
    ID_RL_DIVIPOLA = req.body.ID_RL_DIVIPOLA[0]
      console.log(req.body.ID_RL_DIVIPOLA[0])
    DIR_RES = req.body.DIR_RES
    id_rl_tip_ss = req.body.id_rl_tip_ss
    ESTRATO = req.body.ESTRATO
    gpdes = req.body.gpdes || 2
    gpmigr = req.body.gpmigr || 2
    gpcar = req.body.gpcar || 2
    gpges = req.body.gpges || 2
    SEM_GES = req.body.SEM_GES || 0
    gpindi = req.body.gpindi || 2
    gpicbfs = req.body.gpicbfs || 2
    gpmc = req.body.gpmc || 2
    gpdesmo = req.body.gpdesmo || 2
    gppsi = req.body.gppsi || 2
    gpvicvio = req.body.gpvicvio || 2
    gpotro = req.body.gpotro || 2
    CIUO88 = req.body.CIUO88
    COD_ASE = req.body.COD_ASE
    rl_per_ind = req.body.rl_per_ind
    NOM_GRUPO = req.body.NOM_GRUPO || 'No aplica'
    GENERO = req.body.GENERO
    EST_CIV = req.body.EST_CIV
    NIV_ESC_TER = req.body.NIV_ESC_TER
    ID_RL_FUENTE = req.body.ID_RL_FUENTE
    DIR_RES = req.body.DIR_RES
    FEC_CON = req.body.FEC_CON
    INI_SIN = req.body.INI_SIN
    ID_TIP_CAS = req.body.ID_TIP_CAS
    PAC_HOS = req.body.PAC_HOS
    FEC_HOS = req.body.FEC_HOS || new Date("1001-01-01").toISOString().slice(0, 10)
    ID_CON_FIN = req.body.ID_CON_FIN
    FEC_DEF = req.body.FEC_DEF || new Date("1001-01-01").toISOString().slice(0, 10)
    CER_DEF = req.body.CER_DEF || 'No aplica'
    ID_RL_CIE_10 = req.body.ID_RL_CIE_10 || 20000
    NOM_DIL_FI = req.body.NOM_DIL_FI
    TEL_DIL_FI = req.body.TEL_DIL_FI
    ID_RL_AJUSTE = req.body.ID_RL_AJUSTE
    ID_DISP_AYUDA = req.body.ID_DISP_AYUDA
    INI_EDAD = req.body.INI_EDAD
    ID_RL_LISTA_SPA = req.body.INI_SPA
    ID_RL_LISTA_SPA2 = req.body.INI_SPA_OTRA || 'No aplica'
    ID_RL_INI_PER = req.body.INI_PERSONA
    ID_RL_INI_ENTORNO = req.body.INI_ENTORNO
    ID_RL_INI_LUGAR = req.body.INI_LUGAR
    INI_LUGAR_OTRO = req.body.INI_LUGAR_OTRO || 'No aplica'
    ID_RL_INI_MOTIV = req.body.INI_MOTIVO
    ID_RL_INI_MOTIV2 = req.body.INI_MOTIVO_OTRA || 'No aplica'
    ID_CIE_10 = req.body.COD_CIE10
    ID_RL_LISTA_SPA_ac = req.body.IMP_SPA
    ID_RL_LISTA_SPA2_ac = req.body.IMP_SPA_OTRA || 'No aplica'
    ID_RL_IMP_FREC_USO = req.body.IMP_FREC_USO
    ID_RL_IMP_VIA_ADM = req.body.IMP_VIA_ADM
    IMP_FR_INYECC = req.body.IMP_FR_INYECC
    ID_RL_INI_ENTORNO_ac = req.body.IMP_ENTORNO
    ID_RL_INI_LUGAR_ac = req.body.IMP_LUGAR
    ID_RL_INI_LUGAR2_ac = req.body.IMP_LUGAR_OTRO || 'No aplica'
    ID_RL_PRO_CA = req.body.PRO_CA || 2
    FR_SOBRED = req.body.FR_SOBRED || 2
    FR_SEXUAL = req.body.FR_SEXUAL || 2
    ACT_SPA_ALC = req.body.ACT_SPA_ALC || 2
    ACT_SPA_TAB = req.body.ACT_SPA_TAB || 2
    ACT_SPA_MAR = req.body.ACT_SPA_MAR || 2
    ACT_SPA_COC = req.body.ACT_SPA_COC || 2
    ACT_SPA_BAS = req.body.ACT_SPA_BAS || 2
    ACT_SPA_EXT = req.body.ACT_SPA_EXT || 2
    ACT_SPA_LSD = req.body.ACT_SPA_LSD || 2
    ACT_SPA_HER = req.body.ACT_SPA_HER || 2
    ACT_SPA_2CB = req.body.ACT_SPA_2CB || 2
    ACT_SPA_MET = req.body.ACT_SPA_MET || 2
    ACT_SPA_GHB = req.body.ACT_SPA_GHB || 2
    ACT_SPA_KET = req.body.ACT_SPA_KET || 2
    ACT_SPA_POP = req.body.ACT_SPA_POP || 2
    ACT_SPA_DIC = req.body.ACT_SPA_DIC || 2
    ACT_SPA_SOL = req.body.ACT_SPA_SOL || 2
    ACT_SPA_ANF = req.body.ACT_SPA_ANF || 2
    ACT_SPA_TRA = req.body.ACT_SPA_TRA || 2
    ACT_SPA_OPI = req.body.ACT_SPA_OPI || 2
    ACT_SPA_CAC = req.body.ACT_SPA_CAC || 2
    ACT_SPA_HON = req.body.ACT_SPA_HON || 2
    ACT_SPA_CSI = req.body.ACT_SPA_CSI || 2
    ACT_SPA_OTR = req.body.ACT_SPA_OTR || 2
    ACT_SPA_OTR_CUA = req.body.ACT_SPA_OTR_CUA || 'No aplica'
    EDUC_PREV = req.body.EDUC_PREV
    ID_RL_EDUC_CAL = req.body.ID_RL_EDUC_CAL
    TTO_PREVIO = req.body.TTO_PREVIO
    RED_APOYO = req.body.RED_APOYO
    NOMBRES = user.NOMBRE
    APELLIDOS = user.APELLIDO
    ID_RL_TIP_IDE = user.TIP_IDEN
    NRO_DOC = user.CEDULA
    TEL_PER = user.TEL
    ID_RL_PRE_SERV_SAL = user.COD_PRE
    ID_RL_PAIS_DIAN = ID_RL_NACIONALIDAD
    update_db_aju = await q(`UPDATE db_aju SET ID_RL_AJUSTE = '${ID_RL_AJUSTE}', FEC_AJU = '${factual}' WHERE db_aju.id_reporte = '${id_reporte}' `)
    //
    update_db_ide_pac = await q(`UPDATE db_ide_pac SET ID_TIP_IDE='${ID_TIP_IDE}',
    NUM_IDE='${NUM_IDE}',
    PRI_NOM='${PRI_NOM}',
    SEG_NOM='${SEG_NOM}',
    PRI_APE='${PRI_APE}',
    SEG_APE='${SEG_APE}',
    TELEFONO='${TELEFONO}',
    FECHA_NTO='${FECHA_NTO}',
    EDAD='${EDAD}',
    ID_SEXO='${ID_SEXO}',
    ID_RL_NACIONALIDAD='${ID_RL_NACIONALIDADa}',
    ID_COD_PAIS_O='${ID_COD_PAIS_O}',
    ID_RL_DIVIPOLA='${ID_RL_DIVIPOLA}',
    DIR_RES='${DIR_RES}',
    id_rl_tip_ss='${id_rl_tip_ss}',
    ESTRATO='${ESTRATO}',
    gpdes='${gpdes}',
    gpmigr='${gpmigr}',
    gpcar='${gpcar}',
    gpges='${gpges}',
    SEM_GES='${SEM_GES}',
    gpindi='${gpindi}',
    gpicbfs='${gpicbfs}',
    gpmc='${gpmc}',
    gpdesmo='${gpdesmo}',
    gppsi='${gppsi}',
    gpvicvio='${gpvicvio}',
    gpotro='${gpotro}',
    CIUO88='${CIUO88}',
    COD_ASE='${COD_ASE}',
    rl_per_ind='${rl_per_ind}',
    NOM_GRUPO='${NOM_GRUPO}',
    GENERO='${GENERO}',
    EST_CIV='${EST_CIV}',
    NIV_ESC_TER='${NIV_ESC_TER}'
    WHERE db_ide_pac.id_reporte = '${id_reporte}'`)
    //
    update_db_notif = await q(`UPDATE db_notif SET 
    ID_RL_FUENTE='${ID_RL_FUENTE}',
    ID_RL_PAIS_DIAN='${ID_RL_PAIS_DIAN}',
    ID_RL_DIVIPOLA='${ID_RL_DIVIPOLA}',
    DIR_RES='${DIR_RES}',
    FEC_CON='${FEC_CON}',
    INI_SIN='${INI_SIN}',
    ID_TIP_CAS='${ID_TIP_CAS}',
    PAC_HOS='${PAC_HOS}',
    FEC_HOS='${FEC_HOS}',
    ID_CON_FIN='${ID_CON_FIN}',
    FEC_DEF='${FEC_DEF}',
    CER_DEF='${CER_DEF}',
    ID_RL_CIE_10='${ID_RL_CIE_10}',
    NOM_DIL_FI='${NOM_DIL_FI}',
    TEL_DIL_FI='${TEL_DIL_FI}'
    WHERE db_notif.id_reporte='${id_reporte}'`)
    //
    currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var semanaEp = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7)
    const fechaN = new Date()
    const año = fechaN.getFullYear();
    const COD_PRE = user.COD_PRE
    const COD_SUB = user.COD_SUB
    //
    update_db_info_gral=await q(`UPDATE db_info_gral SET
    ID_TIP_IDE = '${ID_TIP_IDE}',
    COD_EVE='${ID_CIE_10}',
    FEC_NOT='${factual}',
    SEMANA='${semanaEp}',
    ANO='${año}',
    COD_PRE='${COD_PRE}',
    COD_SUB='${COD_SUB}' WHERE db_info_gral.id_reporte='${id_reporte}'`)
    //
    update_db_ini_con= await q (`UPDATE db_ini_con SET 
    INI_EDAD='${INI_EDAD}',
    ID_RL_LISTA_SPA='${ID_RL_LISTA_SPA}',
    ID_RL_LISTA_SPA2='${ID_RL_LISTA_SPA2}',
    ID_RL_INI_PER='${ID_RL_INI_PER}',
    ID_RL_INI_ENTORNO='${ID_RL_INI_ENTORNO}',
    ID_RL_INI_LUGAR='${ID_RL_INI_LUGAR}',
    INI_LUGAR_OTRO='${INI_LUGAR_OTRO}',
    ID_RL_INI_MOTIV='${ID_RL_INI_MOTIV}',
    ID_RL_INI_MOTIV2='${ID_RL_INI_MOTIV2}' WHERE db_ini_con.id_reporte='${id_reporte}'`)
    //
    update_db_con_act= await q(`UPDATE db_con_act SET 
    ID_CIE_10='${ID_CIE_10}',
    ID_RL_LISTA_SPA='${ID_RL_LISTA_SPA_ac}',
    ID_RL_LISTA_SPA2='${ID_RL_LISTA_SPA2_ac}',
    ID_RL_IMP_FREC_USO='${ID_RL_IMP_FREC_USO}',
    ID_RL_IMP_VIA_ADM='${ID_RL_IMP_VIA_ADM}',
    IMP_FR_INYECC='${IMP_FR_INYECC}',
    ID_RL_INI_ENTORNO='${ID_RL_INI_ENTORNO_ac}',
    ID_RL_INI_LUGAR='${ID_RL_INI_LUGAR_ac}',
    ID_RL_INI_LUGAR2='${ID_RL_INI_LUGAR2_ac}',
    ID_RL_PRO_CA='${ID_RL_PRO_CA}',
    FR_SOBRED='${FR_SOBRED}',
    FR_SEXUAL='${FR_SEXUAL}',
    ACT_SPA_ALC='${ACT_SPA_ALC}',
    ACT_SPA_TAB='${ACT_SPA_TAB}',
    ACT_SPA_MAR='${ACT_SPA_MAR}',
    ACT_SPA_COC='${ACT_SPA_COC}',
    ACT_SPA_BAS='${ACT_SPA_BAS}',
    ACT_SPA_EXT='${ACT_SPA_EXT}',
    ACT_SPA_LSD='${ACT_SPA_LSD}',
    ACT_SPA_HER='${ACT_SPA_HER}',
    ACT_SPA_2CB='${ACT_SPA_2CB}',
    ACT_SPA_MET='${ACT_SPA_MET}',
    ACT_SPA_GHB='${ACT_SPA_GHB}',
    ACT_SPA_KET='${ACT_SPA_KET}',
    ACT_SPA_POP='${ACT_SPA_POP}',
    ACT_SPA_DIC='${ACT_SPA_DIC}',
    ACT_SPA_SOL='${ACT_SPA_SOL}',
    ACT_SPA_ANF='${ACT_SPA_ANF}',
    ACT_SPA_TRA='${ACT_SPA_TRA}',
    ACT_SPA_OPI='${ACT_SPA_OPI}',
    ACT_SPA_CAC='${ACT_SPA_CAC}',
    ACT_SPA_HON='${ACT_SPA_HON}',
    ACT_SPA_CSI='${ACT_SPA_CSI}',
    ACT_SPA_OTR='${ACT_SPA_OTR}',
    ACT_SPA_OTR_CUA='${ACT_SPA_OTR_CUA}' WHERE db_con_act.id_reporte= '${id_reporte}'`)
    //
    update_db_intven = await q(`UPDATE db_intven SET 
    ID_DISP_AYUDA='${ID_DISP_AYUDA}',
    EDUC_PREV='${EDUC_PREV}',
    ID_RL_EDUC_CAL='${ID_RL_EDUC_CAL}',
    TTO_PREVIO='${TTO_PREVIO}',
    RED_APOYO='${RED_APOYO}' WHERE db_intven.id_reporte='${id_reporte}'`)
    //
    res.redirect(`/da/verreporte/${id_reporte}`)
  } catch (error) {
    console.log(error)
  }
}

exports.deletereporte= async(req,res)=>{
  id_reporte=req.params.id
  console.log(id_reporte)
  delete_db_aju= await q(`DELETE FROM db_aju WHERE db_aju.id_reporte= "${id_reporte}"`)
  delete_db_ide_pac= await q(`DELETE FROM db_ide_pac WHERE db_ide_pac.id_reporte= "${id_reporte}"`)
  delete_db_notif= await q(`DELETE FROM db_notif WHERE db_notif.id_reporte= "${id_reporte}"`)
  delete_db_info_gral= await q(`DELETE FROM db_info_gral WHERE db_info_gral.id_reporte= "${id_reporte}"`)
  delete_db_ini_con= await q(`DELETE FROM db_ini_con WHERE db_ini_con.id_reporte= "${id_reporte}"`)
  delete_db_con_act= await q(`DELETE FROM db_con_act WHERE db_con_act.id_reporte= "${id_reporte}"`)
  delete_db_intven= await q(`DELETE FROM db_intven WHERE db_intven.id_reporte= "${id_reporte}"`)
  console.log(delete_db_aju)

  res.redirect('/da/reportes')
}

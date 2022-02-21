const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const conexion = require("../database/db");
const { promisify } = require("util");
const { userInfo } = require("os");
const { Console } = require("console");
//metodo de registro:
exports.registerent = async (req, res) => {
  try {
    factual = new Date().toISOString().slice(0, 10);
    console.log(req.body.COD_MUN);
    const FEC_CAMCAR = req.body.FEC_CAMCAR;
    const FEC_INICAR = req.body.FEC_INICAR;
    const COD_MUN = req.body.COD_MUN;
    const COD_PRE = req.body.COD_PRE;
    const COD_SUB = req.body.COD_SUB;
    const NIT_UPGD = req.body.NIT_UPGD;
    const ES_UNI_NOT = req.body.ES_UNI_NOT;
    const RAZ_SOC = req.body.RAZ_SOC;
    const NOMBRES = req.body.NOMBRES;
    const APELLIDOS = req.body.APELLIDOS;
    const TIP_IDE = req.body.TIP_IDE;

    const NRO_DOC = req.body.NRO_DOC;
    const COR_ELE = req.body.COR_ELE;
    const TEL = req.body.TEL;
    const passHash = req.body.pass;
    const ACT_SIV = req.body.ACT_SIV;
    const ESTADOUPGD = req.body.ESTADOUPGD;
    let ncompleto = NOMBRES + " " + APELLIDOS;
    conexion.query(
      "INSERT INTO st_user SET ?",
      {
        TIP_USER: 3,
        NOMBRE: NOMBRES,
        APELLIDO: APELLIDOS,
        TIP_IDEN: TIP_IDE,
        CEDULA: NRO_DOC,
        EMAIL: COR_ELE,
        TEL: TEL,
        ENTIDAD: RAZ_SOC,
        COD_PRE: COD_PRE,
        COD_MUN: COD_MUN,
        USER: COR_ELE,
        PASS: passHash,
        PASS2: passHash,
      },
      (error, results) => {
        if (error) {
          console.log(error);
        }
      }
    );
    console.log(COD_MUN);
    conexion.query(
      "INSERT INTO db_uni_not SET ?",
      {
        FEC_INICAR: factual,
        FEC_CAMCAR: factual,
        COD_PRE: COD_PRE,
        COD_SUB: COD_SUB,
        COD_MUN: COD_MUN,
        RAZ_SOC: RAZ_SOC,
        COR_ELE: COR_ELE,
        ID_RES_NOT: NRO_DOC,
        TEL: TEL,
        ACT_SIV: ACT_SIV,
        NIT_UPGD: NIT_UPGD,
        ES_UNI_NOT: ES_UNI_NOT,
        ESTADOUPGD: ESTADOUPGD,
      },
      (error, results) => {
        if (error) {
          console.log(error);
        }
        res.redirect("/da/entidades");
        console.log(factual);
        console.log(COD_MUN);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.registerentM = async (req, res) => {
  try {
    factual = new Date().toISOString().slice(0, 10);

    const NOM_MUN = req.body.NOM_MUN;
    console.log("si entra");

    const municipio = req.body.municipio;
    const NOMBRE_RESPON = req.body.NOMBRE_RESPON;
    const APELLIDO_RESPON = req.body.APELLIDO_RESPON;
    const TIP_IDE = req.body.TIP_IDE;
    const NRO_DOC = req.body.NRO_DOC;
    const EMAIL = req.body.EMAIL;
    const TEL = req.body.TEL;
    const passHash = req.body.pass;

    let ncompleto = NOMBRE_RESPON + " " + APELLIDO_RESPON;
    conexion.query(
      "INSERT INTO st_user SET ?",
      {
        TIP_USER: 2,
        NOMBRE: NOMBRE_RESPON,
        APELLIDO: APELLIDO_RESPON,
        TIP_IDEN: TIP_IDE,
        CEDULA: NRO_DOC,
        EMAIL: EMAIL,
        TEL: TEL,
        ENTIDAD: NOM_MUN,
        COD_MUN: municipio,
        COD_PRE: "NO APLICA",
        USER: EMAIL,

        PASS: passHash,
        PASS2: passHash,
      },
      (error, results) => {
        if (error) {
          console.log(error);
        }
      }
    );
    conexion.query(
      "INSERT INTO db_ent_mun SET ?",
      {
        COD_MUN: municipio,
        NOM_MUN: NOM_MUN,
        FEC_INICIAR: factual,
        FEC_CAMCAR: factual,
        NOMBRE_RESPON: NOMBRE_RESPON,
        APELLIDO_RESPON: APELLIDO_RESPON,
        ID_RL_TIP_IDE: TIP_IDE,
        NRO_DOC: NRO_DOC,
        EMAIL: EMAIL,
        TELEFONO: TEL,
      },
      (error, results) => {
        if (error) {
          console.log(error);
        }
        res.redirect("/da/entidades");
        console.log(factual);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.registerentU = async (req, res) => {
  try {
    factual = new Date().toISOString().slice(0, 10);
    const COD_MUN = req.body.COD_MUN;

    const COD_PRE = req.body.COD_PRE;
    const NIT_UPGD = req.body.NIT_UPGD;
    const ES_UNI_NOT = req.body.ES_UNI_NOT;

    const NOMBRES = req.body.NOMBRES;
    const APELLIDOS = req.body.APELLIDOS;
    const TIP_IDE = req.body.TIP_IDE;
    const NRO_DOC = req.body.NRO_DOC;
    const COR_ELE = req.body.COR_ELE;
    const TEL = req.body.TEL;
    const passHash = req.body.pass;
    const ACT_SIV = req.body.ACT_SIV;
    const ESTADOUPGD = req.body.ESTADOUPGD;
    let ncompleto = NOMBRES + " " + APELLIDOS;

    conexion.query(
      "SELECT `RAZ_SOC` FROM `db_uni_not` WHERE `COD_PRE` = ?",
      [COD_PRE],
      (error, results) => {
        const entidad = results[0].RAZ_SOC;

        conexion.query(
          "INSERT INTO st_user SET ?",
          {
            TIP_USER: 4,
            NOMBRE: NOMBRES,
            APELLIDO: APELLIDOS,
            TIP_IDEN: TIP_IDE,
            CEDULA: NRO_DOC,
            EMAIL: COR_ELE,
            TEL: TEL,
            ENTIDAD: entidad,
            COD_MUN: COD_MUN,
            COD_PRE: COD_PRE,
            USER: COR_ELE,
            PASS: passHash,
            PASS2: passHash,
          },
          (error, results) => {
            if (error) {
              console.log(error);
            }
            res.redirect("/da/entidades");
            console.log(factual);
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//metodo de logueo:
exports.login = async (req, res) => {
  try {
    const user = req.body.username;
    const pass = req.body.pass;
    if (!user || !pass) {
      res.render("da/seguridad/login", {
        tittle: "Iniciar Sesion - SIVESPA ",
        alert: true,
        alertTitle: "Advertencia",
        alertMessage: "Necesita ingresar un usuario y contraseña",
        alertIcon: "info",
        ruta: "da/login",
        timer: false,
      });
      console.log("estan vacio");
    } else {
      conexion.query(
        "SELECT * FROM st_user WHERE EMAIL =?",
        [user],
        async (error, result) => {
          if (result.length == 0 || !(pass == result[0].PASS)) {
            console.log(result.length);
            console.log("usuario incorrecto o pass");
            res.render("da/seguridad/login", {
              tittle: "Iniciar Sesion - SIVESPA ",
              alert: true,
              alertTitle: "Advertencia",
              alertMessage: "Usuario o Contraseña incorrectos",
              alertIcon: "error",
              ruta: "da/login",
              timer: false,
            });
          } else {
            const id = result[0].id_st_user;
            console.log(result[0].id_st_user);
            const token = jwt.sign({ id: id }, "dddd");
            const cookiesOptions = {
              expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
              httpOnly: true,
            };

            res.cookie("jwt", token, cookiesOptions);

            res.render("da/seguridad/login", {
              tittle: "Iniciar Sesion - SIVESPA ",
              alert: true,
              alertTitle: "Confirmado",
              alertMessage: "Usuario y sesion validos",
              alertIcon: "success",
              ruta: "da/dashboard",
              timer: 800,
            });
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

//metodo de validar si esta logueado:
exports.isAuth = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(req.cookies.jwt, "dddd");
      
      conexion.query(
        "SELECT * FROM st_user WHERE id_st_user =?",
        [decodificada.id],
        (error, result) => {
          if (!result) {
            return next();
          }
          req.user = result[0];

          return next();
        }
      );
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    res.redirect("/da/login");
  }
};

//metodo de cerrar sesion:
exports.logout = async (req, res) => {
  res.clearCookie("jwt");
  return res.redirect("/da/login");
};

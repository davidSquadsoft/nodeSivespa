var express = require('express')
var appjs= express()
var router = express.Router()
const conexion = require('./database/db')
const q = require('./database/querys')

const cookieParser = require('cookie-parser')
appjs.use(express.json())
const bodyparser2 = require('body-parser')
appjs.use(bodyparser2.urlencoded({ extended: true }))
appjs.use(cookieParser())

const authController = require('./controllers/authController')
const filtros = require('./controllers/filtros')
const reporte = require('./controllers/reportesivespa')
const estaController = require('./controllers/estaController')
const fileupload = require('express-fileupload')
const { Router } = require('express')
//router para los metodos del controller
router.post('/registerent', authController.registerent)
router.post('/registerentM', authController.registerentM)
router.post('/registerentU', authController.registerentU)
router.post('/controluser', authController.userUpdate)
router.post('/controlupgd', authController.upgdUpdate)
router.post('/controlentmun', authController.entmunUpdate)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/borraruser/:id', authController.deleteuser)
router.get('/borrarupgd/:id', authController.deleteupgd)
router.get('/borraentmun/:id', authController.deleteentmuni)
//router para los metodos del controller de filtros
router.post('/filterent', filtros.filterent)
//router para los metodos del reporte SIVESPA de administradores
router.post('/reportesivespa', reporte.dareporte)
router.post('/updatereportesivespa', reporte.updatereporte)
router.get('/deletereportesivespa/:id', reporte.deletereporte)
router.post('/savetamcrafft', reporte.tamizajecrafft)
router.post('/updatetamcrafft',reporte.updateCrafft)
router.post('/savetamassist', reporte.tamizajeassist)
router.post('/updatetamassist',reporte.updateAssist)
router.get('/deletetamcrafft/:id', reporte.deleteCrafft)
router.get('/deletetamassist/:id', reporte.deleteAssist)

//ruta principal para el login
router.get('/login', (req, res) => {
  res.render('da/seguridad/login', {
    tittle: 'Iniciar Sesion ',
    alert: false,
  })
})
//middleware de permisos de acceso segun rol del usuario (permite ocultar las rutas y links de administradores, solo visibles en caso de estar logueados)
//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------
//:::

router.get('/dashboard', authController.isAuth, async(req, res) => {
  noticiasdes = await q('SELECT * FROM contenido WHERE tipo_con=1 AND desta=1 ORDER BY fcreacion DESC')
  var alcoholAnt=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1`)
  var tabaco=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1`)
  var marihuana=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1`)
  var cocaina=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1`)
  var basuco=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1`)
  var extasis=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1`)
  var lsd=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1`)
  var heroina=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HER = 1`)
  var cb2=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1`)
  var metanfetaminas=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1`)
  var ghb=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1`)
  var ketamina=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1`)
  var popper=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1`)
  var dick=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1`)
  var solventes=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1`)
  var anfetaminas=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1`)
  var benzodiazepinas=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1`)
  var analgecicos=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1`)
  var cacaosab=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1`)
  var hongos=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1`)
var cannartifi=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1`)
  if(noticiasdes.length>=1){
    datanoticias=noticiasdes
  }else{
    
    datanoticias=0
  }


  res.render('da/dashboards/dashboard_entidad', {
    tittle: 'Tablero SIVESPA ',
    user: req.user,
    datanoticias:datanoticias,
    alcoholAnt:alcoholAnt[0].cantidad,
    tabaco: tabaco[0].cantidad,
    marihuana: marihuana[0].cantidad,
    cocaina: cocaina[0].cantidad,
    basuco: basuco[0].cantidad,
    extasis: extasis[0].cantidad,
    lsd: lsd[0].cantidad,
    heroina:heroina[0].cantidad,
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
    cannartifi:cannartifi[0].cantidad

  })
})

router.get('/configuracion', authController.isAuth, (req, res) => {
  res.render('da/configuracion/configuracion', {
    tittle: 'Configuración ',
    user: req.user,
  })
})
router.get('/contenido', authController.isAuth, async(req, res) => {
  contenidos = await q('SELECT * FROM contenido')
  tips = await q('SELECT * FROM contenido WHERE tipo_con=2')
  res.render('da/contenido/contenidos', {
    tittle: 'Contenido ',
    user: req.user,
    contenidos:contenidos
  })
})
router.get('/crear_contenido', authController.isAuth, async (req, res) => {
  var queryMuni = await q('SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola');
  var querySPa = await q('SELECT * from rl_lista_spa');
  res.render('da/contenido/crear_contenido', {
    tittle: 'Crear Contenido',
    user: req.user,
    municipios: queryMuni,
    spa: querySPa
  })
}
)





router.get('/estadisticas', authController.isAuth, async(req, res) => {

var alcoholAnt=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ALC = 1`)
var tabaco=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TAB = 1`)
var marihuana=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MAR = 1`)
var cocaina=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_COC = 1`)
var basuco=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_BAS = 1`)
var extasis=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_EXT = 1`)
var lsd=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_LSD = 1`)
var heroina=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HER = 1`)
var cb2=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_2CB = 1`)
var metanfetaminas=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_MET = 1`)
var ghb=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_GHB = 1`)
var ketamina=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_KET = 1`)

var popper=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_POP = 1`)

var dick=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_DIC = 1`)
var solventes=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_SOL = 1`)
var anfetaminas=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_ANF = 1`)
var benzodiazepinas=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_TRA = 1`)
var analgecicos=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_OPI = 1`)
var cacaosab=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CAC = 1`)
var hongos=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_HON = 1`)
var cannartifi=await q(`SELECT COUNT(id_reporte) AS cantidad FROM db_con_act WHERE ACT_SPA_CSI = 1`)

var lmuni=await q(`SELECT DISTINCT NOMMUNIPIO,CODMUNIC from rl_divipola`)
  res.render('da/estadisticas/estadisticas', {
    tittle: 'Estadisticas',
    user: req.user,
alcoholAnt:    alcoholAnt[0].cantidad,
tabaco:tabaco[0].cantidad,
marihuana:marihuana[0].cantidad,
cocaina:cocaina[0].cantidad,
basuco:basuco[0].cantidad,
extasis:extasis[0].cantidad,
lsd:lsd[0].cantidad,
heroina:heroina[0].cantidad,
cb2:cb2[0].cantidad,
metanfetaminas:metanfetaminas[0].cantidad,
ghb:ghb[0].cantidad,
ketamina:ketamina[0].cantidad,
popper:popper[0].cantidad,
dick:dick[0].cantidad,
solventes:solventes[0].cantidad,
anfetaminas:anfetaminas[0].cantidad,
benzodiazepinas:benzodiazepinas[0].cantidad,
analgecicos:analgecicos[0].cantidad,
cacaosab:cacaosab[0].cantidad,
hongos:hongos[0].cantidad,
cannartifi:cannartifi[0].cantidad,
lmuni:lmuni,
filtro:'ant'
 
  })
})


router.get('/crearestadistica', authController.isAuth, (req, res) => {
  res.render('da/estadisticas/crear_estadistica', {
    tittle: 'Crear Estadistica',
    user: req.user
  })
})

router.get('/informes', authController.isAuth, async(req, res) => {
  dateini = req.body.dateini || new Date('1900/01/01').toISOString().slice(0, 10);
  dateend = req.body.dateend || new Date().toISOString().slice(0, 10);
  muni = req.body.muni || 0;
  listamunicipios=await q('SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola')

  if(req.user.TIP_USER==1){

    listainfor=await q(`SELECT * FROM informes WHERE fecha>='${dateini}' AND fecha<='${dateend}'`)
    console.log(listainfor)
  }else if(req.user.TIP_USER==2){
    
    listainfor=await q(`SELECT * FROM informes WHERE  fecha>='${dateini}' AND fecha<='${dateend}' AND cod_muni=${req.user.COD_MUN}`)
  }else if(req.user.TIP_USER==3){
    listainfor=await q(`SELECT * FROM informes WHERE  fecha>='${dateini}' AND fecha<='${dateend}' AND id_creador=${req.user.CEDULA}`)
  }
  

  res.render('da/informes/informes', { tittle: 'Informes', user: req.user,informes:listainfor,listamunicipios:listamunicipios })
})


router.post('/informes', authController.isAuth, async(req, res) => {

  dateini = req.body.dateini || new Date('1900/01/01').toISOString().slice(0, 10);
  dateend = req.body.dateend || new Date().toISOString().slice(0, 10);
  muni = req.body.muni || 0
  listamunicipios=await q('SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola')

  if(req.user.TIP_USER==1){

    listainfor=await q(`SELECT * FROM informes WHERE fecha>='${dateini}' AND fecha<='${dateend}' AND cod_muni=${muni}`)
    console.log(listainfor)
  }else if(req.user.TIP_USER==2){
    
    listainfor=await q(`SELECT * FROM informes WHERE  fecha>='${dateini}' AND fecha<='${dateend}' AND cod_muni=${req.user.COD_MUN}`)
  }else if(req.user.TIP_USER==3){
    listainfor=await q(`SELECT * FROM informes WHERE c fecha>='${dateini}' AND fecha<='${dateend}' AND cod_muni=${req.user.CEDULA}`)
  }
  res.render('da/informes/informes', { tittle: 'Informes', user: req.user,informes:listainfor,listamunicipios:listamunicipios })
})

router.get('/informes/verinforme/:id' , authController.isAuth, async(req,res)=>{
  id=req.params.id;
  console.log(id)
  informedata=await q(`SELECT * FROM informes WHERE id=${id}`)

  res.render('da/informes/verinforme',{
    user:req.user,
    tittle:'Ver informe',
    verinforme:informedata[0]

  })


})



router.get('/informes/editarinforme/:id' , authController.isAuth, async(req,res)=>{
  id=req.params.id;
  console.log(id)
  informedata=await q(`SELECT * FROM informes WHERE id=${id}`)

  res.render('da/informes/editar_informe',{
    user:req.user,
    tittle:'Editar informe',
    verinforme:informedata[0]

  })


})


router.get('/nuevo_informe', authController.isAuth, (req, res) => {
  res.render('da/informes/crear_informe', { tittle: 'Informes', user: req.user })
})


router.get('/crearinforme', authController.isAuth, (req, res) => {
  res.render('da/informes/crear_informe', {
    tittle: 'Crear Informe',
    user: req.user,
  })
})
router.get('/politicas', authController.isAuth, (req, res) => {
  res.render('da/legales/politicas', {
    tittle: 'Politicas de privacidad y uso de datos ',
    user: req.user,
  })
})


router.get('/mislineas', authController.isAuth, async (req, res) => {
  listaspa = await q(`SELECT * FROM rl_lista_spa`)

  if(req.user.TIP_USER==1){
  todaslineas = await q(`SELECT * FROM lineas_atention`)
} else  if(req.user.TIP_USER==2){
  todaslineas = await q(`SELECT * FROM lineas_atention WHERE COD_MUN=${req.user.COD_MUN}`)
}else if(req.user.TIP_USER==3 || req.user.TIP_USER==4){
  todaslineas = await q(`SELECT * FROM lineas_atention WHERE COD_PRE=${req.user.COD_PRE}`)
}
  res.render('da/lineas/mis_lineas', {
    tittle: 'Mis lineas de atención ',
    user: req.user,
    listaspa: listaspa,
    todaslineas: todaslineas
  })
})


router.get('/editarlinea/:id', authController.isAuth, async (req, res) => {
  listaspa = await q(`SELECT * FROM rl_lista_spa`)

  id=req.params.id
  todaslineas = await q(`SELECT * FROM lineas_atention WHERE id=${id}`)

  res.render('da/lineas/editarlineas', {
    tittle: 'Editar linea de atención ',
    user: req.user,
    listaspa: listaspa,
    todaslineas: todaslineas[0]
  })
})

router.post('/updatelinea', authController.isAuth, async(req,res)=>{
  id=req.body.id
  nombre = req.body.nombre
  numero = req.body.numero
  descripcion = req.body.descripcion
  COD_PRE = req.user.COD_PRE
  NOMPRE_PRE = await q(`SELECT RAZ_SOC FROM db_uni_not WHERE COD_PRE= ${COD_PRE}`)
  NOMPRE_PRE = NOMPRE_PRE[0].RAZ_SOC
  COD_MUN = req.user.COD_MUN
  if (req.user.COD_MUN == 0) {
    NOMMUNIPIO = 'Todo Antioquia'
  } else {
    NOMMUNIPIO = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${COD_MUN}`)
  }
  id_user_creador = req.user.CEDULA
  nombrecreador = req.user.NOMBRE + " " + req.user.APELLIDO

  id_rl_lista_spa = req.body.spa
  if (id_rl_lista_spa == 0) {
    SUSTANCIA = 'General'
  } else {
    SUSTANCIA = await q(`SELECT SUSTANCIA FROM rl_lista_spa WHERE id_rl_lista_spa = ${id_rl_lista_spa}`)
    SUSTANCIA = SUSTANCIA[0].SUSTANCIA
  }


  NOMMUNIPIO=NOMMUNIPIO[0].NOMMUNIPIO
  insertar = await q(`UPDATE lineas_atention SET nombre="${nombre}", numero="${numero}", description="${descripcion}",  id_rl_lista_spa=${id_rl_lista_spa}, SUSTANCIA ="${SUSTANCIA}" WHERE id=${id}`)
  res.redirect('/da/mislineas')

})






router.get('/noticias', authController.isAuth, async (req, res) => {
  noticias = await q('SELECT * FROM contenido WHERE tipo_con=1')
  var filtro = 0
  res.render('da/noticias/noticias', {
    tittle: 'Noticias ',
    user: req.user,
    noticias: noticias,
    filtro: filtro
  })
})
router.get('/notificaciones', authController.isAuth, (req, res) => {
  res.render('da/notificaciones/notificaciones', {
    tittle: 'Notificaciones ',
    user: req.user,
  })
})
router.get('/crearofertainstitucional', authController.isAuth, async(req, res) => {

  spa=await q ('SELECT * FROM rl_lista_spa')
  res.render('da/oferta_institucional/crear_oferta_institucional', {
    tittle: 'Crear oferta institucional ',
    user: req.user,
    spa:spa
  })
})


router.post('/guardaroferta', authController.isAuth, async(req, res) => {
  titulo=req.body.titulo  
  spa=req.body.spa
  edadini=req.body.edadini
  edadfinal=req.body.edadfinal
  contenido=req.body.contenido
  cod_mun=req.user.COD_MUN
  cod_pre=req.user.COD_PRE
  id_creador=req.user.CEDULA
  
  insertar=await q(`INSERT INTO oferta_inst (titulo,
    spa,
    edadini,
    edadfin,
    contenido,
    cod_mun,
    cod_pre,
    id_creador) VALUES (
      '${titulo}',
      ${spa},
      ${edadini},
      ${edadfinal},
      '${contenido}',
      ${cod_mun},
      ${cod_pre},
      '${id_creador}'
    )`)
  res.redirect('/da/ofertainstitucional')
})

router.get('/borraroferta/:id', authController.isAuth, async(req,res)=>{
  id=req.params.id
  borrar=await q(`DELETE FROM oferta_inst WHERE id=${id}`)
  res.redirect('/da/ofertainstitucional')

})

router.get('/veroferta/:id', authController.isAuth, async(req,res)=>{
  id=req.params.id
  oferta=await q(`SELECT * FROM oferta_inst WHERE id=${id}`)
  res.render('da/oferta_institucional/veroferta', {
    tittle: 'Ver Oferta Institucional',
    user: req.user,
    
    dataoferta:oferta[0]
  })

})

router.post('/updateoferta', authController.isAuth, async(req, res) => {
  titulo=req.body.titulo  
  spa=req.body.spa
  edadini=req.body.edadini
  edadfinal=req.body.edadfinal
  contenido=req.body.contenido
  cod_mun=req.user.COD_MUN
  cod_pre=req.user.COD_PRE
  id_creador=req.user.CEDULA
  id=req.body.id
  
  insertar=await q(`UPDATE  oferta_inst SET 
    titulo='${titulo}',
    spa=${spa},
    edadini=${edadini},
    edadfin=${edadfinal},
    contenido='${contenido}',
    cod_mun=${cod_mun},
    cod_pre=${cod_pre},
    id_creador='${id_creador}' WHERE id=${id}`)
  res.redirect('/da/ofertainstitucional')
})


router.get('/editaroferta/:id', authController.isAuth, async(req, res) => {
  id=req.params.id
  oferta=await q (`SELECT * FROM oferta_inst WHERE id=${id}`)
  spa=await q ('SELECT * FROM rl_lista_spa')

  res.render('da/oferta_institucional/editaroferta',{
    tittle: 'Editar oferta institucional ',
    user: req.user,
    spa:spa,
    dataoferta:oferta[0]
  })
})
router.get('/ofertainstitucional', authController.isAuth, async(req, res) => {
  if(req.user.TIP_USER==1){


  dataofertas=await q (`SELECT * FROM oferta_inst`)
}else{
  dataofertas=await q (`SELECT * FROM oferta_inst WHERE cod_mun=${req.user.COD_MUN}`)
} 


  res.render('da/oferta_institucional/oferta_institucional', {
    tittle: 'Oferta institucional ',
    user: req.user,
    dataofertas:dataofertas
  })
})
router.get('/nuevoreporte', authController.isAuth, async (req, res) => {
  queryResnoti = 'SELECT id_reporte FROM db_res_not WHERE db_res_not.NRO_DOC = ?';
  //estas son las funcionas asincronicas que envian una variable que contiene el query sql y retorna un valor
  //la funcion se encuentra en querys.js
  factual = new Date().toISOString().slice(0, 10);
  sqlmunicipios = 'SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola'
  sqltipoide = 'SELECT * FROM rl_tip_ide'
  sqlsexo = 'SELECT * FROM `rl_sexo`'
  sqlpais = 'SELECT * FROM `rl_pais_dian` '
  sqlocurrencia = 'SELECT * FROM `rl_divipola`'
  sqlprof = 'SELECT * FROM `rl_ciu088`'
  sqlregimen = 'SELECT * FROM `rl_tip_ss`'
  sqladmsalud = 'SELECT * FROM `rl_pre_ser_sal`'
  sqletnica = 'SELECT * FROM `rl_per_ind`'
  sqlidentidadg = 'SELECT * FROM `rl_iden_sex` '
  sqlestadocivil = 'SELECT * FROM `rl_est_civ` '
  sqlescolaridad = 'SELECT * FROM `rl_niv_esc_ter` '
  sqlfuente = 'SELECT * FROM `rl_fuente` '
  sqltcaso = 'SELECT * FROM `rl_tip_cas` '
  sqldefuncion = 'SELECT * FROM `rl_cie_10`'
  sqlajuste = 'SELECT * FROM `rl_ajuste` '
  sqlentorno = 'SELECT * FROM `rl_ini_entorno` '
  sqlinilugar = 'SELECT * FROM `rl_ini_lugar` '
  sqliniperso = 'SELECT * FROM `rl_ini_per`'
  sqlinimotivo = 'SELECT * FROM `rl_ini_motiv`'
  sqlSPA = 'SELECT * FROM `rl_lista_spa`'
  sqlcei = 'SELECT * FROM `rl_cie_10`'
  sqlviaadm = 'SELECT * FROM `rl_imp_via_adm`'
  sqlpripro = 'SELECT * FROM `rl_pro_ca`'
  sqltotal = sqlmunicipios + "; "
    + sqltipoide + "; "
    + sqlsexo + "; "
    + sqlpais + "; "
    + sqlocurrencia + "; "
    + sqlprof + "; "
    + sqlregimen + "; "
    + sqladmsalud + "; "
    + sqletnica + "; "
    + sqlidentidadg + "; "
    + sqlestadocivil + "; "
    + sqlescolaridad + "; "
    + sqlfuente + "; "
    + sqltcaso + "; "
    + sqldefuncion + "; "
    + sqlajuste + "; "
    + sqlentorno + "; "
    + sqlinilugar + "; "
    + sqliniperso + "; "
    + sqlinimotivo + "; "
    + sqlSPA + "; "
    + sqlcei + "; "
    + sqlviaadm + "; "
    + sqlpripro
  conexion.query(sqltotal, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], function (
    error,
    result,
    fields,
  ) {
    if (error) {
      throw error
    } else {

      res.render('da/reportes/reportes', {
        tittle: 'Nuevo Reporte - SIVESPA ',
        user: req.user,
        regiones: result[0],
        tipo_ide: result[1],
        sexo: result[2],
        pais: result[3],
        ocurrencia: result[4],
        prof: result[5],
        regimen: result[6],
        listaADMSALUD: result[7],
        etnias: result[8],
        identidadG: result[9],
        estadoCivil: result[10],
        nivelescolaridad: result[11],
        fuente: result[12],
        tipocaso: result[13],
        causadefuncion: result[14],
        ajustecaso: result[15],
        entorno: result[16],
        inilugar: result[17],
        iniperso: result[18],
        inimotivo: result[19],
        spa: result[20],
        cie: result[21],
        viaadm: result[22],
        pripro: result[23],
        filtro: 0,
        fechaActual: factual
      })
    }
  })
})
router.get('/reportes', authController.isAuth, async (req, res) => {
  queryResnoti = 'SELECT id_reporte FROM db_res_not WHERE db_res_not.NRO_DOC = ?';
  var querynomspa = await q(`SELECT * FROM rl_lista_spa`)
  //estas son las funcionas asincronicas que envian una variable que contiene el query sql y retorna un valor
  //la funcion se encuentra en querys.js
  var municipios = await q(`SELECT * FROM rl_divipola`)
  
  if (req.user.TIP_USER == 1) {
    var queryAjuste = await q('SELECT * FROM `db_aju`');
    var queryConActual = await q('SELECT * FROM `db_con_act`');
    var queryIdePac = await q('SELECT * FROM `db_ide_pac` ');
    var queryInfoGen = await q('SELECT * FROM `db_info_gral` ');
    var queryIniCon = await q('SELECT * FROM `db_ini_con` ');
    var queryIntven = await q('SELECT * FROM `db_intven`  ');
    var queryNotif = await q('SELECT * FROM `db_notif` ');
    var queryResnot = await q('SELECT * FROM `db_res_not` ');
    var tamizajecrafft = await q(`SELECT * FROM db_tam_crafft`);
    var tamizajeassist = await q(`SELECT * FROM db_tam_assist`);

  } else if (req.user.TIP_USER == 2) {  
    var queryuserdemun = await q(`SELECT CEDULA FROM st_user WHERE COD_MUN = ${req.user.COD_MUN}`);
    misusuarios = queryuserdemun

    var concatenarMisUsuarios = misusuarios[0].CEDULA
    for (j = 1; j < misusuarios.length; j++) {
      concatenarMisUsuarios += ',' + misusuarios[j].CEDULA
    }


    var repMiMun = await q(`SELECT id_reporte FROM db_res_not WHERE NRO_DOC IN (${concatenarMisUsuarios})`);
    if (repMiMun.length > 0) {
      var concatenarMisReportes = `'` + repMiMun[0].id_reporte + `'`
      for (i = 1; i < repMiMun.length; i++) {
        concatenarMisReportes += ',' + `'` + repMiMun[i].id_reporte + `'`
      }
      var tamizajeassist = await q(`SELECT * FROM db_tam_assist WHERE id_creador IN (${concatenarMisUsuarios})`);

      var tamizajecrafft = await q(`SELECT * FROM db_tam_crafft WHERE id_creador IN (${concatenarMisUsuarios})`);
      var queryAjuste = await q(`SELECT id_reporte FROM db_aju WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryConActual = await q(`SELECT * FROM db_con_act WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIdePac = await q(`SELECT * FROM db_ide_pac WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryInfoGen = await q(`SELECT * FROM db_info_gral WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIniCon = await q(`SELECT * FROM db_ini_con WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIntven = await q(`SELECT * FROM db_intven WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryNotif = await q(`SELECT * FROM db_notif WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryResnot = await q(`SELECT * FROM db_res_not WHERE id_reporte IN (${concatenarMisReportes})`);
    } else {
      console.log('notiene reportes')
    }
  } else if (req.user.TIP_USER == 3) {
    var queryusermiupgd = await q(`SELECT CEDULA FROM st_user WHERE COD_PRE = ${req.user.COD_PRE}`);
    misusuarios = queryusermiupgd
    var concatenarMisUsuarios = misusuarios[0].CEDULA
    for (j = 1; j < misusuarios.length; j++) {
      concatenarMisUsuarios += ',' + misusuarios[j].CEDULA
    }

    var repMiUPGD = await q(`SELECT id_reporte FROM db_res_not WHERE NRO_DOC IN (${concatenarMisUsuarios})`);
    if (repMiUPGD.length > 0) {
      var concatenarMisReportes = `'` + repMiUPGD[0].id_reporte + `'`
      for (i = 1; i < repMiUPGD.length; i++) {
        concatenarMisReportes += ',' + `'` + repMiUPGD[i].id_reporte + `'`
      }
      var tamizajeassist = await q(`SELECT * FROM db_tam_assist WHERE id_creador IN (${concatenarMisUsuarios})`);

      var tamizajecrafft = await q(`SELECT * FROM db_tam_crafft WHERE id_creador IN (${concatenarMisUsuarios})`);
      var queryAjuste = await q(`SELECT id_reporte FROM db_aju WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryConActual = await q(`SELECT * FROM db_con_act WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIdePac = await q(`SELECT * FROM db_ide_pac WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryInfoGen = await q(`SELECT * FROM db_info_gral WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIniCon = await q(`SELECT * FROM db_ini_con WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIntven = await q(`SELECT * FROM db_intven WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryNotif = await q(`SELECT * FROM db_notif WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryResnot = await q(`SELECT * FROM db_res_not WHERE id_reporte IN (${concatenarMisReportes})`);

    }else{
      console.log('notiene reportes')
    }

  }else{
    var misreportesuser= await q (`SELECT * FROM db_res_not WHERE NRO_DOC= ${req.user.CEDULA}`)
    if (misreportesuser.length >0){
      var concatenarMisReportes = `'` + misreportesuser[0].id_reporte + `'`
      for (i = 1; i < misreportesuser.length; i++) {
        concatenarMisReportes += ',' + `'` + misreportesuser[i].id_reporte + `'`
      }
      var tamizajeassist = await q(`SELECT * FROM db_tam_assist WHERE id_creador IN (${concatenarMisReportes})`);

      var tamizajecrafft = await q(`SELECT * FROM db_tam_crafft WHERE id_creador IN (${concatenarMisReportes})`);
      var queryAjuste = await q(`SELECT id_reporte FROM db_aju WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryConActual = await q(`SELECT * FROM db_con_act WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIdePac = await q(`SELECT * FROM db_ide_pac WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryInfoGen = await q(`SELECT * FROM db_info_gral WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIniCon = await q(`SELECT * FROM db_ini_con WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIntven = await q(`SELECT * FROM db_intven WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryNotif = await q(`SELECT * FROM db_notif WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryResnot = await q(`SELECT * FROM db_res_not WHERE id_reporte IN (${concatenarMisReportes})`);
  
    }else{
      console.log('no tiene reporetes')
    }

  }

  iduser = req.user.CEDULA
  res.render('da/reportes/dashboard_reportes', {
    tittle: 'Reportes SIVESPA ',
    user: req.user,
    ajuste: queryAjuste,
    conactual: queryConActual,
    idepac: queryIdePac,
    infogen: queryInfoGen,
    inicon: queryIniCon,
    interven: queryIntven,
    notifi: queryNotif,
    responsable: queryResnot,
    nomspa: querynomspa,
    municipios: municipios,
    tamizajecrafft:tamizajecrafft,
    tamizajeassist:tamizajeassist
  })
})


router.get('/tassist', authController.isAuth, async(req, res) => {
  var querydivipola = await q(`SELECT * FROM rl_divipola`)
  var querytipide = await q(`SELECT * FROM rl_tip_ide`)
  var querysexo = await q('SELECT * FROM rl_sexo')
  var queryNacion = await q('SELECT * FROM rl_nacionalidad')
  var querytregimen = await q('SELECT * FROM rl_tip_ss')
  var queryprestadoras = await q('SELECT * FROM `rl_pre_ser_sal` ')
  var queryspas = await q('SELECT * FROM rl_lista_spa')
  var profesiones= await q(`SELECT * FROM rl_ciu088`)

  res.render('da/reportes/tamizaje_assist', {
    tittle: 'Tamizaje ASSIST',
    user: req.user,
    ocurrencia: querydivipola,
    tipide: querytipide,
    sexo: querysexo,
    nacion: queryNacion,
    regimens: querytregimen,
    prestadoras: queryprestadoras,
    spa: queryspas,
    profesiones:profesiones
  })
})
router.get('/descargas', authController.isAuth, (req, res) => {
  res.render('da/sivespa/descargas', {
    tittle: 'Descargas - SIVESPA ',
    user: req.user,
  })
})
router.get('/informacion', authController.isAuth, (req, res) => {
  res.render('da/sivespa/informacion', {
    tittle: 'Informacion ',
    user: req.user,
  })
})
router.get('/ayuda', authController.isAuth, (req, res) => {
  res.render('da/soporte/ayuda', { tittle: 'Ayuda ', user: req.user })
})
router.get('/canales', authController.isAuth, (req, res) => {
  res.render('da/soporte/canales', {
    tittle: 'Canales de soporte tecnico ',
    user: req.user,
  })
})
router.get('/documentacion', authController.isAuth, (req, res) => {
  res.render('da/soporte/documentacion', {
    tittle: 'Documentación y tutoriales ',
    user: req.user,
  })
})
router.get('/filterent', authController.isAuth, (req, res) => {
  res.redirect('/da/entidades')
})
router.get('/tips', authController.isAuth, async (req, res) => {
  tips = await q('SELECT * FROM contenido WHERE tipo_con=2')
  var filtro = 0
  res.render('da/tips/tips', {
    tittle: 'Tips  ',
    user: req.user,
    tips: tips,
    filtro: filtro
  })
})
router.get('/entidades', authController.isAuth, (req, res) => {
  sqlmunicipios = 'SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola'
  sqltipoide = 'SELECT `DESC`, `COD`,`ID_RL_TIP_IDE` FROM rl_tip_ide'
  sqltipoUPGD = 'SELECT `COD_PRE`,`RAZ_SOC` FROM `db_uni_not`'
  munfiltro = req.user.COD_MUN
  sqlmiMun = 'SELECT `COD_PRE`,`RAZ_SOC` FROM `db_uni_not` WHERE COD_MUN = ' + munfiltro
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
      res.render('da/usuarios/entidades', {
        tittle: 'Entidades y usuarios ',
        user: req.user,
        regiones: result[0],
        tipo_ide: result[1],
        listaUPGD: result[2],
        misUPGD: result[3],
        todasUPGD: result[4],
        listaUPGD: result[5],
        listaUSERS: result[6],
        listaMUNI: result[7],
        filtro: 0


      })
    }
  })
})
// rutas para ver reportes
router.get('/misreportes', authController.isAuth, async (req, res) => {
})

router.get('/show/:u', authController.isAuth, async (req, res) => {
  const id = req.params.u;

  let idepaciente = await q(`SELECT * FROM db_ide_pac WHERE NUM_IDE = ${id}`);
  const paciente = idepaciente[0]
  const idreporte = paciente.id_reporte

  let conactual = await q(`SELECT * FROM db_con_act WHERE id_reporte = '${idreporte}'`);

  const consumoactual = conactual[0]
  let spa = await q(`SELECT * FROM rl_lista_spa`);
  listaspa = spa[0]

  let nombrespa = spa.filter(lp => lp.id_rl_lista_spa == consumoactual.ID_RL_LISTA_SPA);
  res.send(paciente)
})

router.post('/guardarinforme', authController.isAuth, async (req, res) => {
  let sampleFile;
  let uploadPath;
  titulo=req.body.NOM_INFOR
  contenido=req.body.CONT_INFOR
  cod_muni=req.user.COD_MUN
  nommuni = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${cod_muni}`)
  nommunipio=nommuni[0].NOMMUNIPIO
  id_creador=req.user.CEDULA
  nomcreador= req.user.NOMBRE + ' ' + req.user.APELLIDO

  factual = new Date().toISOString().slice(0, 10);
  fecha=factual
  sampleFile = req.files.estadistica
  var estadistica = sampleFile.name
  uploadPath = __dirname + '/public/upload/' + sampleFile.name
  if (!req.files || Object.keys(req.files).length == 0) {
    console.log('no archivo')
  }

  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    conexion.query("INSERT INTO informes SET ?", {
      fecha: fecha,
      titulo: titulo,
      contenido:contenido,
      estadistica: estadistica,
      cod_muni: cod_muni,
      nommunipio: nommunipio,
      id_creador: id_creador,
      nomcreador: nomcreador
 
    }, function (err, result) {
      if (err) return res.status(500).send(err);
      res.redirect('/da/informes')
    })
  })

})

router.get('/borrarinforme/:id',authController.isAuth, async(req,res)=>{
id=req.params.id
borrar=await q(`DELETE FROM informes WHERE id=${id}`)
console.log(borrar)
res.redirect('/da/informes')



})
router.post('/updateinforme', authController.isAuth, async(req, res) => {
  var sampleFile;
  var uploadPath;
  id=req.body.id;
  titulo=req.body.NOM_INFOR
  contenido=req.body.CONT_INFOR
  cod_muni=req.user.COD_MUN
  nommuni = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${cod_muni}`)
  nommunipio=nommuni[0].NOMMUNIPIO
  id_creador=req.user.CEDULA
  nomcreador= req.user.NOMBRE + ' ' + req.user.APELLIDO

  factual = new Date().toISOString().slice(0, 10);
  fecha=factual



  if (!req.files || Object.keys(req.files).length == 0) {
    update=await q(`UPDATE informes SET titulo='${titulo}', contenido='${contenido}' WHERE id=${id}`)
  }else{
    sampleFile = req.files.estadistica
    var estadistica = sampleFile.name
    uploadPath = __dirname + '/public/upload/' + sampleFile.name
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    })
    update=await q(`UPDATE informes SET titulo='${titulo}', contenido='${contenido}',estadistica='${estadistica}' WHERE id=${id}`)

    }
    res.redirect('/da/informes')




})

router.post('/guardarcontenido', authController.isAuth, async (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length == 0) {
    console.log('no archivo')
  }

  sampleFile = req.files.foto
  var imagen = sampleFile.name
  uploadPath = __dirname + '/public/upload/' + sampleFile.name
  titulo = req.body.titulo
  tipo_con = req.body.tipo_con
  notifi = req.body.notifi || 2
  desta = req.body.desta || 2
  inicio = req.body.inicio || 2
  dirigidoadmin = req.body.dirigidoadmin || 2
  dirigidociu = req.body.dirigidociu || 2
  dirigidoent = req.body.dirigidoent || 2
  spa = req.body.spa
  dirimuni = req.body.dirimuni || 0
  texto = req.body.texto
  idcreador = req.user.CEDULA
  fcreacion = new Date().toISOString().slice(0, 10);

  nommuni = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${dirimuni}`)
 if (spa == 0) {
    nomspa = 'General'
  } else {
    nomspa = await q(`SELECT SUSTANCIA FROM rl_lista_spa WHERE id_rl_lista_spa=${spa}`)
    nomspa = nomspa[0].SUSTANCIA
  }

  nommuni = nommuni[0].NOMMUNIPIO

  values = [
    fcreacion,
    titulo,
    dirimuni,
    nommuni,
    tipo_con,
    notifi,
    desta,
    inicio,
    dirigidoadmin,
    dirigidoent,
    dirigidociu,
    texto,
    spa,
    imagen,
    idcreador
  ]
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    conexion.query("INSERT INTO contenido SET ?", {
      fcreacion: fcreacion,
      titulo: titulo,
      dirimuni: dirimuni,
      NOMMUNI: nommuni,
      tipo_con: tipo_con,
      notifi: notifi,
      desta: desta,
      inicio: inicio,
      dirigidoadmin: dirigidoadmin,
      dirigidoent: dirigidoent,
      dirigidociu: dirigidociu,
      texto: texto,
      spa: spa,
      NOMSPA: nomspa,
      imagen: imagen,
      idcreador: idcreador
    }, function (err, result) {
      if (err) return res.status(500).send(err);
      res.redirect('/da/contenido')
    })
  })
  // res.render('da/oferta_institucional/oferta_institucional', {
  //   tittle: 'Oferta institucional ',
  //   user: req.user,
  // })
})


// paso siguiente que muestre las noticias, tips luego de cada reporte segun la spa, lineas de atencion segun la SPA y ubicacion
// paso siguiente que transpole la informacion del reporte en los textos de la db
// permita guardar reportes en pdf
// permita guardar lista de usuarios en pdf
router.get('/vernoticia/:id', authController.isAuth, async (req, res) => {
  const id = req.params.id
  var datanoticia = await q(`SELECT * FROM contenido WHERE id = ${id}`)
  res.render('da/contenido/vernoticia', {
    tittle: datanoticia.titulo,
    user: req.user,
    datanoticias: datanoticia[0]
  })
})


router.get('/editarcontenido/:id', authController.isAuth, async (req, res) => {
  const id = req.params.id
  var datanoticia = await q(`SELECT * FROM contenido WHERE id = ${id}`)
  var queryMuni = await q('SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola');
  var querySPa = await q('SELECT * from rl_lista_spa');
  res.render('da/contenido/editar_contenido', {
    tittle: 'Editar: ' + datanoticia[0].titulo,
    user: req.user,
    datanoticias: datanoticia[0],
    municipios:queryMuni,
    spa:querySPa  
  })
})

router.post('/updatecontenido',authController.isAuth, async(req,res)=>{
  let sampleFile;
  let uploadPath;

  id=req.body.id
  titulo = req.body.titulo
  tipo_con = req.body.tipo_con
  notifi = req.body.notifi || 2
  desta = req.body.desta || 2
  inicio = req.body.inicio || 2
  dirigidoadmin = req.body.dirigidoadmin || 2
  dirigidociu = req.body.dirigidociu || 2
  dirigidoent = req.body.dirigidoent || 2
  spa = req.body.spa
  dirimuni = req.body.dirimuni || 0
  texto = req.body.texto
  idcreador = req.user.CEDULA
  fcreacion = new Date().toISOString().slice(0, 10);
  nommuni = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${dirimuni}`)
  if (spa == 0) {
    nomspa = 'General'
  } else {
    nomspa = await q(`SELECT SUSTANCIA FROM rl_lista_spa WHERE id_rl_lista_spa=${spa}`)
    nomspa = nomspa[0].SUSTANCIA
  }
  nommuni = nommuni[0].NOMMUNIPIO

  if (!req.files || Object.keys(req.files).length == 0) {
    console.log('no archivo')
    update=await q(`UPDATE contenido SET titulo='${titulo}',dirimuni=${dirimuni},NOMMUNI='${nommuni}',tipo_con=${tipo_con},
      desta=${desta},
      dirigidoadmin=${dirigidoadmin},
      dirigidociu=${dirigidociu},
      dirigidoent=${dirigidoent},
      spa=${spa},
      dirimuni=${dirimuni},
      texto='${texto}', NOMSPA='${nomspa}' WHERE id=${id}
    `)
  }else{
    sampleFile = req.files.foto
    var imagen = sampleFile.name
    uploadPath = __dirname + '/public/upload/' + sampleFile.name
          
        sampleFile.mv(uploadPath, function (err) {
          if (err) return res.status(500).send(err);

        })
        update=await q(`UPDATE contenido SET titulo='${titulo}',dirimuni=${dirimuni},NOMMUNI='${nommuni}',tipo_con=${tipo_con},
        desta=${desta},
        dirigidoadmin=${dirigidoadmin},
        dirigidociu=${dirigidociu},
        dirigidoent=${dirigidoent},
        spa=${spa},
        dirimuni=${dirimuni},
        texto='${texto}', NOMSPA='${nomspa}',imagen ='${imagen}' WHERE id=${id}
      `)
  }
  res.redirect('/da/contenido')

  
  
})


router.get('/borrarcontenido/:id', authController.isAuth, async(req, res)=>{
id=req.params.id
borrar=await q(`DELETE FROM contenido WHERE id=${id}`)
res.redirect('/da/contenido')
})

router.get('/vertip/:id', authController.isAuth, async (req, res) => {
  const id = req.params.id
  var datatip = await q(`SELECT * FROM contenido WHERE id = ${id}`)
  res.render('da/contenido/vertip', {
    tittle: datatip.titulo,
    user: req.user,
    datatip: datatip[0]
  })
})
router.post('/filtronoticias', authController.isAuth, async (req, res) => {
  const quebuscar = req.body.kbuscar
  var filtro = 1
  resfiltro = await q(`SELECT * from contenido WHERE CONCAT(NOMSPA,titulo,NOMMUNI) LIKE "%${quebuscar}%" AND tipo_con=1`)

  res.render('da/noticias/noticias', {
    tittle: 'Noticias ',
    user: req.user,
    datafiltro: resfiltro,
    filtro: filtro
  })
})

router.post('/filtrotips', authController.isAuth, async (req, res) => {
  const quebuscar = req.body.kbuscar
  var filtro = 1
  resfiltro = await q(`SELECT * from contenido WHERE CONCAT(NOMSPA,titulo,NOMMUNI) LIKE "%${quebuscar}%" AND tipo_con=2`)

  res.render('da/tips/tips', {
    tittle: 'Tips ',
    user: req.user,
    datafiltro: resfiltro,
    filtro: filtro
  })
})


router.get('/filtronoticias', authController.isAuth, async (req, res) => {

  res.redirect('/da/noticias')
})

router.get('/filtrotips', authController.isAuth, async (req, res) => {

  res.redirect('/da/tips')
})

router.get('/tcrafft', authController.isAuth, async (req, res) => {
  var querydivipola = await q(`SELECT * FROM rl_divipola`)
  var querytipide = await q(`SELECT * FROM rl_tip_ide`)
  var querysexo = await q('SELECT * FROM rl_sexo')
  var queryNacion = await q('SELECT * FROM rl_nacionalidad')
  var querytregimen = await q('SELECT * FROM rl_tip_ss')
  var queryprestadoras = await q('SELECT * FROM `rl_pre_ser_sal` ')
  var queryspas = await q('SELECT * FROM rl_lista_spa')
  res.render('da/reportes/tamizaje_crafft', {
    tittle: 'Tamizaje CRAFFT',
    user: req.user,
    ocurrencia: querydivipola,
    tipide: querytipide,
    sexo: querysexo,
    nacion: queryNacion,
    regimens: querytregimen,
    prestadoras: queryprestadoras,
    spa: queryspas
  })
})


router.post('/crearlinea', authController.isAuth, async (req, res) => {
  nombre = req.body.nombre
  numero = req.body.numero
  descripcion = req.body.descripcion
  COD_PRE = req.user.COD_PRE
  NOMPRE_PRE = await q(`SELECT RAZ_SOC FROM db_uni_not WHERE COD_PRE= ${COD_PRE}`)
  NOMPRE_PRE = NOMPRE_PRE[0].RAZ_SOC
  COD_MUN = req.user.COD_MUN
  if (req.user.COD_MUN == 0) {
    NOMMUNIPIO = 'Todo Antioquia'
  } else {
    NOMMUNIPIO = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${COD_MUN}`)
  }
  id_user_creador = req.user.CEDULA
  nombrecreador = req.user.NOMBRE + " " + req.user.APELLIDO

  id_rl_lista_spa = req.body.spa
  if (id_rl_lista_spa == 0) {
    SUSTANCIA = 'General'
  } else {
    SUSTANCIA = await q(`SELECT SUSTANCIA FROM rl_lista_spa WHERE id_rl_lista_spa = ${id_rl_lista_spa}`)
    SUSTANCIA = SUSTANCIA[0].SUSTANCIA
  }


  NOMMUNIPIO=NOMMUNIPIO[0].NOMMUNIPIO
  insertar = await q(`INSERT INTO lineas_atention (nombre, numero, description, COD_PRE, NOMBRE_PRE, COD_MUN, NOMMUNIPIO, id_user_creador, nombrecreador, id_rl_lista_spa, SUSTANCIA)VALUES ("${nombre}","${numero}","${descripcion}",${COD_PRE},"${NOMPRE_PRE}",${COD_MUN},"${NOMMUNIPIO}",${id_user_creador},"${nombrecreador}",${id_rl_lista_spa},"${SUSTANCIA}")`)
  res.redirect('/da/mislineas')
})


router.get('/datausuario/:id', authController.isAuth, async (req, res) => {
  iduser = req.params.id
  var userver = await q(`SELECT * FROM st_user WHERE id_st_user= ${iduser}`)
  nombrecompleto = userver[0].NOMBRE + " " + userver[0].APELLIDO

  nombreide = await q(`SELECT rl_tip_ide.DESC FROM rl_tip_ide WHERE ID_RL_TIP_IDE  = ${userver[0].TIP_IDEN}`)
  listatipoide = await q(`SELECT * FROM rl_tip_ide`)
  miupgd = await q(`SELECT * FROM db_uni_not WHERE COD_PRE= ${userver[0].COD_PRE} AND COD_SUB=${userver[0].COD_SUB}`)
  mimuni = await q(`SELECT DISTINCT * FROM rl_divipola WHERE CODMUNIC=${userver[0].COD_MUN}`)

  res.render('da/usuarios/datausuario', {
    tittle: 'Editar Usuario',
    user: req.user,
    userver: userver[0],
    nombrecompleto: nombrecompleto,
    tip_ide: nombreide[0].DESC,
    listatipide: listatipoide,
    miupgd: miupgd[0],
    mimuni: mimuni[0]
  })
})


router.get('/dataupgd/:id', authController.isAuth, async (req, res) => {
  uidupgd = req.params.id
  var upgdver = await q(`SELECT * FROM db_uni_not WHERE PK_UNI_NOTIF= ${uidupgd}`)


  responsable = await q(`SELECT * FROM st_user WHERE CEDULA  = ${upgdver[0].ID_RES_NOT}`)
  listatipoide = await q(`SELECT * FROM rl_tip_ide`)

  mimuni = await q(`SELECT DISTINCT * FROM rl_divipola WHERE CODMUNIC=${upgdver[0].COD_MUN}`)

  res.render('da/usuarios/dataupgd', {
    tittle: 'Editar UPGD',
    user: req.user,
    upgdver: upgdver[0],
    nombrecompleto: '0',
    responuser: responsable[0],
    tip_ide: responsable[0].TIP_IDEN,
    listatipide: listatipoide,
    mimuni: mimuni[0]
  })
})

router.get('/dataentmun/:id', authController.isAuth, async (req, res) => {
  identmun = req.params.id
  var entmunver = await q(`SELECT * FROM db_ent_mun WHERE id= ${identmun}`)


  responsable = await q(`SELECT * FROM st_user WHERE CEDULA  = ${entmunver[0].NRO_DOC}`)
  
  listatipoide = await q(`SELECT * FROM rl_tip_ide`)
  mimuni = await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${entmunver[0].COD_MUN}`)

  res.render('da/usuarios/dataentmun', {
    tittle: 'Editar Entidad Municipal',
    user: req.user,
    entmunver: entmunver[0],
    nombrecompleto: '0',
    responuser: responsable[0],
    tip_ide: responsable[0].TIP_IDEN,
    listatipide: listatipoide,
    mimuni: mimuni[0].NOMMUNIPIO
  })
})


router.get('/verreporte/:id', authController.isAuth, async (req, res) => {
  factual = new Date().toISOString().slice(0, 10);

  id_reporte = req.params.id
  // la informacion del reporte :
  db_aju = await q(`SELECT * FROM db_aju WHERE id_reporte="${id_reporte}"`)
  db_con_act = await q(`SELECT * FROM db_con_act WHERE id_reporte="${id_reporte}"`)
  db_ide_pac = await q(`SELECT * FROM db_ide_pac WHERE id_reporte="${id_reporte}"`)
  db_info_gral = await q(`SELECT * FROM db_info_gral WHERE id_reporte="${id_reporte}"`)
  db_ini_con = await q(`SELECT * FROM db_ini_con WHERE id_reporte="${id_reporte}"`)
  db_intven = await q(`SELECT * FROM db_intven WHERE id_reporte="${id_reporte}"`)
  db_notif = await q(`SELECT * FROM db_notif WHERE id_reporte="${id_reporte}"`)
  db_res_not = await q(`SELECT * FROM db_res_not WHERE id_reporte="${id_reporte}"`)
  //***************************** */


  // la informacion para la relacion de datos en el reporte :

  sqlmunicipios = await q(`SELECT DISTINCT NOMMUNIPIO,CODMUNIC from rl_divipola`)
  sqltodomun = await q(`SELECT * from rl_divipola`)
  sqltipoide = await q(`SELECT * FROM rl_tip_ide`)
  sqlsexo = await q(`SELECT * FROM rl_sexo`)
  sqlpais = await q(`SELECT * FROM rl_pais_dian `)
  sqlocurrencia = await q(`SELECT * FROM rl_divipola`)
  sqlprof = await q(`SELECT * FROM rl_ciu088`)
  sqlregimen = await q(`SELECT * FROM rl_tip_ss`)
  sqladmsalud = await q(`SELECT * FROM rl_pre_ser_sal`)
  sqletnica = await q(`SELECT * FROM rl_per_ind`)
  sqlidentidadg = await q(`SELECT * FROM rl_iden_sex `)
  sqlestadocivil = await q(`SELECT * FROM rl_est_civ`)
  sqlescolaridad = await q(`SELECT * FROM rl_niv_esc_ter`)
  sqlfuente = await q(`SELECT * FROM rl_fuente `)
  sqltcaso = await q(`SELECT * FROM rl_tip_cas `)
  sqldefuncion = await q(`SELECT * FROM rl_cie_10`)
  sqlajuste = await q(`SELECT * FROM rl_ajuste `)
  sqlentorno = await q(`SELECT * FROM rl_ini_entorno `)
  sqlinilugar = await q(`SELECT * FROM rl_ini_lugar `)
  sqliniperso = await q(`SELECT * FROM rl_ini_per`)
  sqlinimotivo = await q(`SELECT * FROM rl_ini_motiv`)
  sqlSPA = await q(`SELECT * FROM rl_lista_spa`)
  sqlcei = await q(`SELECT * FROM rl_cie_10`)
  sqlviaadm = await q(`SELECT * FROM rl_imp_via_adm`)
  sqlpripro = await q(`SELECT * FROM rl_pro_ca`)

  muniocu = await q(`SELECT NOMCENTRPOBLADO FROM rl_divipola WHERE CODCENTROPOBLADO=${db_ide_pac[0].ID_RL_DIVIPOLA}`)

  nombrepaciente = db_ide_pac[0].PRI_NOM + " " + db_ide_pac[0].SEG_NOM + " " + db_ide_pac[0].PRI_APE + " " + db_ide_pac[0].SEG_APE
  res.render('da/reportes/verreporte', {
    tittle: 'Reporte de: ' + nombrepaciente,
    user: req.user,
    tipo_ide: sqltipoide,
    sexo: sqlsexo,
    pais: sqlpais,
    ocurrencia: sqlocurrencia,
    prof: sqlprof,
    regimen: sqlregimen,
    listaADMSALUD: sqladmsalud,
    etnias: sqletnica,
    identidadG: sqlidentidadg,
    estadoCivil: sqlestadocivil,
    nivelescolaridad: sqlescolaridad,
    fuente: sqlfuente,
    tipocaso: sqltcaso,
    causadefuncion: sqldefuncion,
    ajustecaso: sqlajuste,
    entorno: sqlentorno,
    inilugar: sqlinilugar,
    iniperso: sqliniperso,
    inimotivo: sqlinimotivo,
    spa: sqlSPA,
    cie: sqlcei,
    viaadm: sqlviaadm,
    pripro: sqlpripro,
    fechaActual: factual,
    db_aju: db_aju[0],
    db_con_act: db_con_act[0],
    db_ide_pac: db_ide_pac[0],
    db_info_gral: db_info_gral[0],
    db_ini_con: db_ini_con[0],
    db_intven: db_intven[0],
    db_notif: db_notif[0],
    db_res_not: db_res_not[0],
    todomun: muniocu

  })


})

router.get('/vertamizaje_crafft/:id', authController.isAuth, async(req,res)=>{

  id_tamizaje=req.params.id

  var vercrafft= await q(`SELECT * FROM db_tam_crafft WHERE id_tamizaje="${id_tamizaje}"`)

  var querydivipola = await q(`SELECT * FROM rl_divipola`)
  var querytipide = await q(`SELECT * FROM rl_tip_ide`)
  var querysexo = await q('SELECT * FROM rl_sexo')
  var queryNacion = await q('SELECT * FROM rl_nacionalidad')
  var querytregimen = await q('SELECT * FROM rl_tip_ss')
  var queryprestadoras = await q('SELECT * FROM `rl_pre_ser_sal` ')
  var queryspas = await q('SELECT * FROM rl_lista_spa')
  
  var nombre_completo= vercrafft[0].PRI_NOM + ' '+ vercrafft[0].SEG_NOM + ' ' + vercrafft[0].PRI_APE + ' ' + vercrafft[0].SEG_APE
  
  res.render('da/reportes/vertamizajecrafft', {
    tittle: 'Tamizaje CRAFFT de ' + nombre_completo ,
    user: req.user,
    ocurrencia: querydivipola,
    tipide: querytipide,
    sexo: querysexo,
    nacion: queryNacion,
    regimens: querytregimen,
    prestadoras: queryprestadoras,
    spa: queryspas,
    vercrafft:vercrafft[0]
  })


})


router.get('/vertamizaje_assist/:id', authController.isAuth, async(req,res)=>{

  id_tamizaje=req.params.id

  var verassist= await q(`SELECT * FROM db_tam_assist WHERE id_tamizaje="${id_tamizaje}"`)

  var querydivipola = await q(`SELECT * FROM rl_divipola`)
  var querytipide = await q(`SELECT * FROM rl_tip_ide`)
  var querysexo = await q('SELECT * FROM rl_sexo')
  var queryNacion = await q('SELECT * FROM rl_nacionalidad')
  var querytregimen = await q('SELECT * FROM rl_tip_ss')
  var queryprestadoras = await q('SELECT * FROM `rl_pre_ser_sal` ')
  var queryspas = await q('SELECT * FROM rl_lista_spa')
  var profesiones= await q("SELECT * FROM rl_ciu088")
  
  var nombre_completo= verassist[0].PRI_NOM + ' '+verassist[0].SEG_NOM + ' ' + verassist[0].PRI_APE + ' '+ verassist[0].SEG_APE
  
  res.render('da/reportes/vertamizajeassist', {
    tittle: 'Tamizaje ASSIST de ' + nombre_completo ,
    user: req.user,
    ocurrencia: querydivipola,
    tipide: querytipide,
    sexo: querysexo,
    nacion: queryNacion,
    regimens: querytregimen,
    prestadoras: queryprestadoras,
    spa: queryspas,
    verassist:verassist[0],
    profesiones:profesiones
  })


})

// filtro estadisticas muni:
router.post('/estamun',estaController.estamuni)

router.post('/estasem', estaController.estasemana)

router.post('/estaedad', estaController.estaedad)


router.get('/estamun', authController.isAuth , (req , res)=>{
  res.redirect('/da/estadisticas')
})
router.get('/estasem', authController.isAuth , (req , res)=>{
  res.redirect('/da/estadisticas')
})
router.get('/estaedad', authController.isAuth , (req , res)=>{
  res.redirect('/da/estadisticas')
})





module.exports = router





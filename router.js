var express = require('express')
var router = express.Router()
const conexion = require('./database/db')
const q = require('./database/querys')
const authController = require('./controllers/authController')
const filtros = require('./controllers/filtros')
const reporte = require('./controllers/reportesivespa')
const fileupload= require('express-fileupload')
//router para los metodos del controller
router.post('/registerent', authController.registerent)
router.post('/registerentM', authController.registerentM)
router.post('/registerentU', authController.registerentU)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
//router para los metodos del controller de filtros
router.post('/filterent', filtros.filterent )
//router para los metodos del reporte SIVESPA de administradores
router.post('/reportesivespa', reporte.dareporte)
router.post('/savetamcrafft', reporte.tamizajecrafft)
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
router.get('/dashboard', authController.isAuth, (req, res) => {
  res.render('da/dashboards/dashboard_entidad', {
    tittle: 'Tablero SIVESPA ',
    user: req.user,
  })
})
router.get('/configuracion', authController.isAuth, (req, res) => {
  res.render('da/configuracion/configuracion', {
    tittle: 'Configuración ',
    user: req.user,
  })
})
router.get('/contenido', authController.isAuth, (req, res) => {
  res.render('da/contenido/contenidos', {
    tittle: 'Contenido ',
    user: req.user,
  })
})
router.get('/crear_contenido', authController.isAuth, async(req, res) => {
  var queryMuni = await q('SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola');
  var querySPa = await q('SELECT * from rl_lista_spa');
  res.render('da/contenido/crear_contenido', {
    tittle: 'Crear Contenido',
    user: req.user,
    municipios:queryMuni,
    spa:querySPa
  })
})
router.get('/estadisticas', authController.isAuth, (req, res) => {
  res.render('da/estadisticas/estadisticas', {
    tittle: 'Estadisticas',
    user: req.user,
  })
})
router.get('/crearestadistica', authController.isAuth, (req, res) => {
  res.render('da/estadisticas/crear_estadistica', {
    tittle: 'Crear Estadistica',
    user: req.user,
  })
})
router.get('/informes', authController.isAuth, (req, res) => {
  res.render('da/informes/informes', { tittle: 'Informes', user: req.user })
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
router.get('/mislineas', authController.isAuth, async(req, res) => {
  listaspa= await q(`SELECT * FROM rl_lista_spa`)
  todaslineas=await q (`SELECT * FROM lineas_atencion`)
  id_creador= req.user.CEDULA
  mislineas=await q(`SELECT * FROM lineas_atencion WHERE id_user_creador=${id_creador}`)
  res.render('da/lineas/mis_lineas', {
    tittle: 'Mis lineas de atención ',
    user: req.user,
    listaspa:listaspa,
    todaslineas:todaslineas,
    mislineas:mislineas
  })
})
router.get('/noticias', authController.isAuth, async(req, res) => {
  noticias= await q('SELECT * FROM contenido WHERE tipo_con=1')
  var filtro=0
  res.render('da/noticias/noticias', { 
  tittle: 'Noticias ', 
  user: req.user,
  noticias:noticias,
  filtro:filtro
})
})
router.get('/notificaciones', authController.isAuth, (req, res) => {
  res.render('da/notificaciones/notificaciones', {
    tittle: 'Notificaciones ',
    user: req.user,
  })
})
router.get('/crearofertainstitucional', authController.isAuth, (req, res) => {
  res.render('da/oferta_institucional/crear_oferta_institucional', {
    tittle: 'Crear oferta institucional ',
    user: req.user,
  })
})
router.get('/ofertainstitucional', authController.isAuth, (req, res) => {
  res.render('da/oferta_institucional/oferta_institucional', {
    tittle: 'Oferta institucional ',
    user: req.user,
  })
})
router.get('/nuevoreporte', authController.isAuth, async (req, res) => {
  queryResnoti= 'SELECT id_reporte FROM db_res_not WHERE db_res_not.NRO_DOC = ?';
  //estas son las funcionas asincronicas que envian una variable que contiene el query sql y retorna un valor
  //la funcion se encuentra en querys.js
  factual = new Date().toISOString().slice(0, 10);
  sqlmunicipios = 'SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola'
  sqltipoide = 'SELECT * FROM rl_tip_ide'  
  sqlsexo ='SELECT * FROM `rl_sexo`'
  sqlpais = 'SELECT * FROM `rl_pais_dian` '
  sqlocurrencia='SELECT * FROM `rl_divipola`'
  sqlprof='SELECT * FROM `rl_ciu088`'
  sqlregimen ='SELECT * FROM `rl_tip_ss`'
  sqladmsalud='SELECT * FROM `rl_pre_ser_sal`'
  sqletnica='SELECT * FROM `rl_per_ind`'
  sqlidentidadg='SELECT * FROM `rl_iden_sex` '
  sqlestadocivil='SELECT * FROM `rl_est_civ` '
  sqlescolaridad ='SELECT * FROM `rl_niv_esc_ter` '
  sqlfuente='SELECT * FROM `rl_fuente` '
  sqltcaso ='SELECT * FROM `rl_tip_cas` '
  sqldefuncion='SELECT * FROM `rl_cie_10`'
  sqlajuste='SELECT * FROM `rl_ajuste` '
  sqlentorno='SELECT * FROM `rl_ini_entorno` '
  sqlinilugar='SELECT * FROM `rl_ini_lugar` '
  sqliniperso='SELECT * FROM `rl_ini_per`'
  sqlinimotivo ='SELECT * FROM `rl_ini_motiv`'
  sqlSPA='SELECT * FROM `rl_lista_spa`'
  sqlcei='SELECT * FROM `rl_cie_10`'
  sqlviaadm='SELECT * FROM `rl_imp_via_adm`'
  sqlpripro='SELECT * FROM `rl_pro_ca`'
  sqltotal = sqlmunicipios + "; "   
  + sqltipoide + "; " 
  + sqlsexo +"; " 
  + sqlpais  +"; " 
  + sqlocurrencia +"; " 
  + sqlprof +"; " 
  + sqlregimen + "; " 
  + sqladmsalud + "; " 
  + sqletnica + "; " 
  + sqlidentidadg + "; " 
  + sqlestadocivil  + "; " 
  + sqlescolaridad  + "; " 
  + sqlfuente + "; " 
  + sqltcaso + "; " 
  + sqldefuncion + "; " 
  + sqlajuste + "; " 
  + sqlentorno + "; " 
  + sqlinilugar  + "; " 
  + sqliniperso  + "; " 
  + sqlinimotivo  + "; " 
  + sqlSPA + "; " 
  + sqlcei + "; " 
  + sqlviaadm + "; " 
  + sqlpripro 
  conexion.query(sqltotal, [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], function (
    error,
    result,
    fields,
  ) {
    if (error) {
      throw error
    } else {
      //console.log(result[1])
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
        identidadG:result[9],
        estadoCivil:result[10],
        nivelescolaridad:result[11],
        fuente:result[12],
        tipocaso:result[13],
        causadefuncion:result[14],
        ajustecaso:result[15],
        entorno:result[16],
        inilugar:result[17],
        iniperso:result[18],
        inimotivo:result[19],
        spa:result[20],
        cie:result[21],
        viaadm:result[22],
        pripro:result[23],
        filtro:0,
        fechaActual:factual
      })
    }
  })
})
router.get('/reportes', authController.isAuth, async(req, res) => {
  queryResnoti= 'SELECT id_reporte FROM db_res_not WHERE db_res_not.NRO_DOC = ?';
  var querynomspa= await q(`SELECT * FROM rl_lista_spa`)
  //estas son las funcionas asincronicas que envian una variable que contiene el query sql y retorna un valor
  //la funcion se encuentra en querys.js
  if (req.user.TIP_USER == 1){
      var queryAjuste = await q('SELECT * FROM `db_aju`');
      var queryConActual =await q('SELECT * FROM `db_con_act` ');
      var queryIdePac =await q('SELECT * FROM `db_ide_pac` ');
      var queryInfoGen =await q('SELECT * FROM `db_info_gral` ');
      var queryIniCon=await q('SELECT * FROM `db_ini_con` ');
      var queryIntven=await q('SELECT * FROM `db_intven`  ');
      var queryNotif  =await q('SELECT * FROM `db_notif` ');
      var queryResnot  =await q('SELECT * FROM `db_res_not` ');
    } else if(req.user.TIP_USER==2){
      var queryuserdemun=  await q(`SELECT CEDULA FROM st_user WHERE COD_MUN = ${req.user.COD_MUN}`);
      misusuarios=queryuserdemun
      console.log(misusuarios)
      var concatenarMisUsuarios = misusuarios[0].CEDULA 
      for(j=1; j<misusuarios.length; j++){
        concatenarMisUsuarios +=  ',' + misusuarios[j].CEDULA 
      }
      var repMiMun  =await q(`SELECT id_reporte FROM db_res_not WHERE NRO_DOC IN (${concatenarMisUsuarios})`);
      if (repMiMun.length>0){
      var concatenarMisReportes = `'` + repMiMun[0].id_reporte + `'`
      for(i=1; i<repMiMun.length; i++){
         concatenarMisReportes +=  ',' + `'` + repMiMun[i].id_reporte + `'`
      }
      var queryAjuste = await q(`SELECT id_reporte FROM db_aju WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryConActual =await q(`SELECT * FROM db_con_act WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIdePac =await q(`SELECT * FROM db_ide_pac WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryInfoGen =await q(`SELECT * FROM db_info_gral WHERE id_reporte IN (${concatenarMisReportes})`);
      var queryIniCon=await q(`SELECT * FROM db_ini_con WHERE id_reporte IN (${concatenarMisReportes})` );
      var queryIntven=await q(`SELECT * FROM db_intven WHERE id_reporte IN (${concatenarMisReportes})` );
      var queryNotif  =await q(`SELECT * FROM db_notif WHERE id_reporte IN (${concatenarMisReportes})`);
    }else {
      console.log('notiene reportes')
    }
    }
    iduser=req.user.CEDULA
 res.render('da/reportes/dashboard_reportes', {
  tittle: 'Reportes SIVESPA ',
  user: req.user,
  ajuste:queryAjuste,
  conactual:queryConActual,
  idepac :queryIdePac,
  infogen:queryInfoGen,
  inicon:queryIniCon,
  interven:queryIntven,
  notifi:queryNotif,
  responsable:queryResnot,
  nomspa:querynomspa
})
})


router.get('/tassist', authController.isAuth, (req, res) => {
  res.render('da/reportes/tamizaje_assist', {
    tittle: 'Tamizaje ASSIST - SIVESPA ',
    user: req.user,
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
router.get('/tips', authController.isAuth, async(req, res) => {
  tips= await q('SELECT * FROM contenido WHERE tipo_con=2')
  var filtro=0
  res.render('da/tips/tips', { 
  tittle: 'Tips  ', 
  user: req.user,
  tips:tips,
  filtro:filtro
})
})
router.get('/entidades', authController.isAuth, (req, res) => {
  sqlmunicipios = 'SELECT DISTINCT `NOMMUNIPIO`,`CODMUNIC` from rl_divipola'
  sqltipoide = 'SELECT `DESC`, `COD` FROM rl_tip_ide'
  sqltipoUPGD = 'SELECT `COD_PRE`,`RAZ_SOC` FROM `db_uni_not`'
  munfiltro = req.user.COD_MUN
  sqlmiMun ='SELECT `COD_PRE`,`RAZ_SOC` FROM `db_uni_not` WHERE COD_MUN = ' + munfiltro
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
        filtro:0
      })
    }
  })
})
// rutas para ver reportes
router.get('/misreportes', authController.isAuth, async (req, res) => {
})
router.get('/show/:u', authController.isAuth, async(req,res)=>{
  const id=req.params.u;

  let idepaciente = await q(`SELECT * FROM db_ide_pac WHERE NUM_IDE = ${id}`);
  const paciente =idepaciente[0]
  const idreporte=paciente.id_reporte
  console.log(idreporte)
  let conactual = await q(`SELECT * FROM db_con_act WHERE id_reporte = '${idreporte}'`);
  console.log(conactual[0])
  const consumoactual=conactual[0]
  let spa = await q(`SELECT * FROM rl_lista_spa`);
  listaspa=spa[0]
  console.log(listaspa)
  let nombrespa = spa.filter(lp => lp.id_rl_lista_spa == consumoactual.ID_RL_LISTA_SPA);
  res.send(paciente)
})
router.post('/guardarcontenido', authController.isAuth,async(req, res) => {
  let sampleFile;
  let uploadPath
  if(!req.files || Object.keys(req.files).length==0)  {
    console.log('no archivo')
  }

  sampleFile=req.files.foto
  var imagen=sampleFile.name
  uploadPath=__dirname + '/public/upload/' + sampleFile.name
  titulo=req.body.titulo
  tipo_con=req.body.tipo_con 
  notifi=req.body.notifi || 2
  desta=req.body.desta || 2
  inicio=req.body.inicio || 2
  dirigidoadmin=req.body.dirigidoadmin || 2
  dirigidociu=req.body.dirigidociu || 2
  dirigidoent=req.body.dirigidoent || 2
  spa=req.body.spa
  dirimuni=req.body.dirimuni || 0
  texto=req.body.texto
  idcreador=req.user.CEDULA
  fcreacion = new Date().toISOString().slice(0, 10);
  nommuni= await q (`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${dirimuni}`)
  

  if (spa==0){
    nomspa=='General'
  }else{
    nomspa= await q (`SELECT SUSTANCIA FROM rl_lista_spa WHERE id_rl_lista_spa=${spa}`)
    nomspa=nomspa[0].SUSTANCIA
  }
  
 nommuni=nommuni[0].NOMMUNIPIO
 console.log(nommuni)
  values=[
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
 sampleFile.mv(uploadPath, function(err){
    if (err) return res.status(500).send(err);
    conexion.query("INSERT INTO contenido SET ?",{
      fcreacion:fcreacion,
      titulo:titulo,
      dirimuni:dirimuni,
      NOMMUNI:nommuni,
      tipo_con:tipo_con,
      notifi:notifi,
      desta:desta,
      inicio:inicio,
      dirigidoadmin:dirigidoadmin,
      dirigidoent:dirigidoent,
      dirigidociu:dirigidociu,
      texto:texto,
      spa:spa,
      NOMSPA:nomspa,
      imagen:imagen,
      idcreador:idcreador
     }, function(err,result){
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
router.get('/vernoticia/:id', authController.isAuth, async( req, res)=>{
  const id= req.params.id
  var datanoticia= await q (`SELECT * FROM contenido WHERE id = ${id}`)
  res.render('da/contenido/vernoticia',{
    tittle: datanoticia.titulo,
    user: req.user,
    datanoticias:datanoticia[0]
  })
})
router.get('/vertip/:id', authController.isAuth, async( req, res)=>{
  const id= req.params.id
  var datatip= await q (`SELECT * FROM contenido WHERE id = ${id}`)
  res.render('da/contenido/vertip',{
    tittle: datatip.titulo,
    user: req.user,
    datatip:datatip[0]
  })
})
router.post('/filtronoticias', authController.isAuth,async(req,res)=>{
  const quebuscar=req.body.kbuscar
  var filtro=1
  resfiltro= await q(`SELECT * from contenido WHERE CONCAT(NOMSPA,titulo,NOMMUNI) LIKE "%${quebuscar}%" AND tipo_con=1`)
  console.log(resfiltro)
  res.render('da/noticias/noticias', { 
    tittle: 'Noticias ', 
    user: req.user,
    datafiltro:resfiltro,
    filtro:filtro
  })
})

router.post('/filtrotips', authController.isAuth,async(req,res)=>{
  const quebuscar=req.body.kbuscar
  var filtro=1
  resfiltro= await q(`SELECT * from contenido WHERE CONCAT(NOMSPA,titulo,NOMMUNI) LIKE "%${quebuscar}%" AND tipo_con=2`)
  
  res.render('da/tips/tips', { 
    tittle: 'Tips ', 
    user: req.user,
    datafiltro:resfiltro,
    filtro:filtro
  })
})


router.get('/filtronoticias', authController.isAuth,async(req,res)=>{

  res.redirect('/da/noticias')
})

router.get('/filtrotips', authController.isAuth,async(req,res)=>{

  res.redirect('/da/tips')
})

router.get('/tcrafft',authController.isAuth, async(req,res)=>{
  var querydivipola =await q(`SELECT * FROM rl_divipola`)
  var querytipide= await q(`SELECT * FROM rl_tip_ide`)
  var querysexo= await q('SELECT * FROM rl_sexo')
  var queryNacion= await q('SELECT * FROM rl_nacionalidad')
  var querytregimen= await q('SELECT * FROM rl_tip_ss')
  var queryprestadoras= await q('SELECT * FROM `rl_pre_ser_sal` ')
  var queryspas = await q('SELECT * FROM rl_lista_spa')
  res.render('da/reportes/tamizaje_crafft',{
    tittle:'Tamizaje CRAFFT',
    user:req.user,
    ocurrencia:querydivipola,
    tipide:querytipide,
    sexo:querysexo,
    nacion:queryNacion,
    regimens:querytregimen,
    prestadoras:queryprestadoras,
    spa:queryspas
  })
})


router.post('/crearlinea', authController.isAuth, async(req,res)=>{
  nombre=req.body.nombre
  numero=req.body.numero
  descripcion =req.body.descripcion
  COD_PRE= req.user.COD_PRE
  NOMPRE_PRE= await q(`SELECT RAZ_SOC FROM db_uni_not WHERE COD_PRE= ${COD_PRE}`)
  NOMPRE_PRE=NOMPRE_PRE[0].RAZ_SOC
  COD_MUN=req.user.COD_MUN 
  if(req.user.COD_MUN ==0){
    NOMMUNIPIO = 'Todo Antioquia'
  }else{
    NOMMUNIPIO= await q(`SELECT DISTINCT NOMMUNIPIO FROM rl_divipola WHERE CODMUNIC=${COD_MUN}`)
  }
  id_user_creador= req.user.CEDULA
  nombrecreador= req.user.NOMBRE + " " + req.user.APELLIDO

  id_rl_lista_spa=req.body.spa
  if(id_rl_lista_spa==0){
    SUSTANCIA ='General'
  }else{
    SUSTANCIA = await q(`SELECT SUSTANCIA FROM rl_lista_spa WHERE id_rl_lista_spa = ${id_rl_lista_spa}`)
    SUSTANCIA= SUSTANCIA[0].SUSTANCIA
  }
  

  
  insertar= await q ( `INSERT INTO lineas_atention (nombre, numero, description, COD_PRE, NOMBRE_PRE, COD_MUN, NOMMUNIPIO, id_user_creador, nombrecreador, id_rl_lista_spa, SUSTANCIA)VALUES ("${nombre}","${numero}","${descripcion}",${COD_PRE},"${NOMPRE_PRE}",${COD_MUN},"${NOMMUNIPIO}",${id_user_creador},"${nombrecreador}",${id_rl_lista_spa},"${SUSTANCIA}")`)
  res.redirect('/da/mislineas')
})

module.exports = router

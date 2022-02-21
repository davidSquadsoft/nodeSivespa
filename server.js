//inicializamos las librerias
//------------------------------------
//------------------------------------
//:::
const bcryptjs = require('bcryptjs')
const express = require('express')
const bodyparser = require('body-parser')
const session = require('express-session')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const router = require('./router')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const fileupload= require('express-fileupload')


dotenv.config({ path: './env/.env' })

//inicializamos todas las funciones de express/bodyparser/control de session
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//:::

const app = express()
app.use(bodyparser.json())
app.use(fileupload());
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cookieParser())

//static para definir rutas de los archivos de publicos
//--------------------------------------------------- -
//----------------------------------------------------
//:::
app.use(express.static(__dirname + '/public'))

app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  }),
)

//Definicion del motor de backend con express y archivos EJS para cada una de las pantallas, "renderizadas" desde el servidor
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//:::
app.set('view engine', 'ejs')
//Definicion del puerto para las pruebas
//-----------------------------
//-----------------------------
//:::
const PORT = process.env.PORT || 3000

//ruta de landing page
//--------------------
//--------------------
//:::
app.get('/', (req, res) => {
  res.render('index', { tittle: 'Sivespa' })
})
// inicio de rutas de ciudadano
//-----------------------------
//-----------------------------
//:::
app.get('/lc/acerca', (req, res) => {
  res.render('lc/acerca', { tittle: 'Acerca' })
})
app.get('/lc/contacto', (req, res) => {
  res.render('lc/contacto', { tittle: 'Contacto' })
})
app.get('/lc/descargas', (req, res) => {
  res.render('lc/descargas', { tittle: 'Descargas' })
})
app.get('/lc/faq', (req, res) => {
  res.render('lc/faq', { tittle: 'Faq' })
})
app.get('/lc/guia', (req, res) => {
  res.render('lc/guia', { tittle: 'Guia' })
})
app.get('/lc/mitos', (req, res) => {
  res.render('lc/mitos', { tittle: 'Mitos y Realidades' })
})
app.get('/lc/noticias', (req, res) => {
  res.render('lc/noticias', { tittle: 'Noticias' })
})
app.get('/lc/politica_privacidad', (req, res) => {
  res.render('lc/politica_privacidad', {
    tittle: 'Politica de Privacidad y Datos',
  })
})
app.get('/lc/reporte_mayor', (req, res) => {
  res.render('lc/reporte_mayor', { tittle: 'Auto reporte de tamizaje ASSIST' })
})
app.get('/lc/reporte_menor', (req, res) => {
  res.render('lc/reporte_menor', {
    tittle: 'Planes de acción y líneas de atención',
  })
})
app.get('/lc/tips', (req, res) => {
  res.render('lc/tips', { tittle: 'Tips' })
})
app.get('/lc/tutoriales', (req, res) => {
  res.render('lc/tutoriales', { tittle: 'Tutoriales' })
})

// inicio de rutas de admin/entidades/Uentidad
//--------------------------------------------
//--------------------------------------------
//::: estan en router.js
app.use('/da', router)

// Redirigimos a pagina de error 404 en caso de que la ruta no exista
//--------------------------------------------
//--------------------------------------------
//:::
app.get('*', (req, res) => {
   res.status(404).render('error.ejs', { tittle: 'Pagina no existente' })
 })

// Arrancamos el servidor de nodejs SIVESPA
//--------------------------------------------
//--------------------------------------------
//:::
app.listen(PORT, () => {
  console.log('server starter on HTTP://LOCALHOST:3000')
})


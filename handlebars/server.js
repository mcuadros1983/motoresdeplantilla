const express = require("express")
const app = express()
const { engine } = require('express-handlebars')


app.engine("handlebars", engine())
app.set("views", "./views") //declarar extension y ubicacion
app.set("view engine", "handlebars") //declarar el motor y extension
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render('formProductos')//se renderiza el archivo base de estructura mas los datos de la constante
})

let productos = []

app.post("/productos", (req,res)=>{
    productos.push(req.body)
    res.redirect("/")
})  

app.get('/productos', (req, res) => {
    console.log(productos)
    res.render('tablaProductos', {productos})//se renderiza el archivo base de estructura mas los datos de la constante
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`)
})
server.on("error", error => `Error en el puerto ${error}`)
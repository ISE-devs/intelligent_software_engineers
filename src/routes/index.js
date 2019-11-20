//import funcionalidad de router express
const express = require("express");
const router = express.Router();

//elementos a utilizar (varibles, constantes, funciones, etc)
const company = "Intelligent Software Engineers",
 Author = "Eric Martinez Acelas", title_index = "ISE - HOME", title_contact = "ISE - Contact";


//rutas
router.get('/',(req,res) => {
    res.render('index.html',{company,title_index,Author});
});
router.get('/contact',(req,res) => {
    res.render('contact.html',{company,title_contact,Author});
});

//exportar rutas
module.exports = router;
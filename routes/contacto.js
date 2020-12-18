var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contacto page. */
router.get('/', function(req, res, next) {
    res.render('contacto',{
      isContacto:true
    });
  });

  router.post('/', async (req, res, next) => {
    //console.log(req.body);
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var mensaje = req.body.mensaje;
  
    var obj = {
      from: email,
      to:'barrioborderoficial@gmail.com',
      subject: 'Barrio Border web',
      html: nombre + " " + apellido + " escribió el siguiente mensaje: " + mensaje 
    }
  
    var transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
  
    var info = await transporter.sendMail(obj);
    res.render('contacto', {
      message: 'Mensaje enviado correctamente',
      isContacto: true
    });
  });
  
  module.exports = router;
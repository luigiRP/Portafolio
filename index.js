const express=require('express')
const bodyParser=require('body-parser')
const nodemailer =require('nodemailer')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req, res) => {

    const htmlEmail= `
    <h1>Mensaje de tu pagina web!</h1>
    <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Correo: ${req.body.email}</li>
        <li>Mensaje: ${req.body.message}</li>
        
    </ul>`

  let transporter = nodemailer.createTransport ({
      service: 'gmail',
      auth: {
          user:'luigix8485@gmail.com',
          pass:'rockfnroll84'
      }
  })
let mailOptions = {
    from: 'test@testaccount.com',
    to: 'luigix8485@gmail.com',
    subject: 'Test',
    text: req.body.message,
    html: htmlEmail
}

transporter.sendMail(mailOptions, function(err,data){
    if (err) {
       return console.log('ERROR');
    }
    else {
        console.log('Mensaje Enviado: %s' , info.message);
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
    }
});

});



const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})
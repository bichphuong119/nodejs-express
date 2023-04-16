const express = require('express')
const handlebars=require('express-handlebars')
const path=require('path')
var morgan = require('morgan')
const app = express()
const port = 3000
app.use(morgan('combined'))
//Template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resouce\\views'));
app.get('/', (req, res) => {
  res.render('home');
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening http://localhost: ${port}`)
  })

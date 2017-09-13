const express = require('express');
const hbs = require('hbs');

 var app = express();

 // Express Middleware
 app.use(express.static(__dirname + '/public'));
 app.set('view engine','hbs');

 app.get('/', (req,res)=> {
    res.send("Hello Express!!!!");
 });


 app.get('/about',(req,res)=> {
     res.render('about.hbs');
 });

 app.get('/bad',(req,res)=> {
     res.send({
         errormessage: 'Unable to handle the request'
     });
 });

 app.listen(8000 , () => {
     console.log('Server is up on port 8000');
 }); 
  
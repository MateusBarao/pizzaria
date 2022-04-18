const express = require('express');
const path = require('path');

const app = express();

// exportando roteadores

const pizzasRouter = require('./routes/pizzasRouter');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', pizzasRouter);

app.listen(3000, ()=>{
    console.log("escutando na porta 3000")
});
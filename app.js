const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

port = 80;


app.use('/static', express.static('static'));
app.use(express.urlencoded({extended : true}));

app.set('viewengine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.status(200).render('index.pug' );
})


app.listen(port, ()=>{
    console.log(`web is hosting on ${port}`);
})
const express = require('express');
const hbs = require('hbs');
let app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render('index.hbs');
})

app.get('/about-us', (req,res)=>{
    res.render('about-us.hbs');
});

app.get('/multiply/:left/:right', (req,res)=>{
    let left=parseInt(req.params.left);
    let right=parseInt(req.params.right);
    let result=left*right;
    res.render('results.hbs',{
        'left':left,
        'right':right,
        'result':result
    })
})

app.get('/gallery', (req,res)=>{
    res.render('dog.hbs');
})

app.listen(3021, ()=>{
    console.log('server run');
})

// this is so that we can test
module.exports = app;
const express = require('express');
const render = require('./render.js');

const app = express();





app.get('/ssr', (req, res)=>{
    render.getRenderedDomTree('http://localhost:8080').then((domTree)=>{
        res.format({
            'text/html':function(){
                res.send(domTree);
            }
        })
    })
    
})

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});


app.listen(8082, err => (err ? console.log('Error happened', err) : console.log('Server is up on 8082')));
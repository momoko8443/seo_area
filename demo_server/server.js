const express = require('express');

const app = express();


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
});


app.get('/', (req, res)=>{
    res.sendStatus(200);
})

app.get('/api/profile', (req, res) => {
    res.send({
        data: {
            name:'this data is from backend API',
            description:'this data is from backend API'
        }
    });
});

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


app.listen(8081, err => (err ? console.log('Error happened', err) : console.log('Server is up on 8081')));
const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config({path : '.env.dev'});
const {user,product,account} = require('./src/routes');
const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.use('/api/user',user);
app.use('/api/products',product);
app.use('/api/',account);

app.get('/',(req,res)=>{
    res.send('Hello world');
    
})

app.listen(process.env.PORT || 3000,()=>{
    console.log(`the app listeen to loacal host ${process.env.PORT}`);
})

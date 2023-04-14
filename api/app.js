var mongoose = require ('mongoose')
const express = require('express')
const cors = require('cors')
mongoose.connect('mongodb+srv://admin:admin@cluster0.hyqhh2l.mongodb.net/test?retryWrites=true&w=majority')
const app = express()

app.use(cors())
var userRoute = require ('./routes/userRoute')

app.use('/', userRoute);

app.listen(3000,function(){
    console.log('app is runninginginging');
});
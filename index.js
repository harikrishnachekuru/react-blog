const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hari:rr143@@react-blog-angns.mongodb.net/test?retryWrites=true&w=majority',
 {useNewUrlParser: true}).then(() => console.log('DB CONNECTED'))
                         .catch(err => console.error(err));


app.get('/',(req,res)=>{
    res.send('hello world')
});

app.listen(5000);
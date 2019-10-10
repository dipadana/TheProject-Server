if(process.env.NODE_ENV=='development'){
    require('dotenv').config()
}

const {sendMail} = require('./sendMail');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.post('/',(req,res)=>{
    // console.log(req.body)
    const email = req.body.email;
    sendMail(req.body.email,{ msg : 'masuk ya' });
})

app.listen(3000,()=> console.log(`listening on PORT 3000`))
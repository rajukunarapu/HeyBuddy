const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// express instance 
const app = express();

app.use(cookieParser())   // reading cookies
app.use(express.json())   // converting json to js

const allowedOrigins = [`${process.env.FRONTEND_URL}`, 'https://your_frontend_url']

// cross-origin resource sharing middleware for strict origin
app.use(cors({
    origin : function(origin,callback){
        if(!origin) return callback(null,true)     // postman doesn't have origin
        if(allowedOrigins.includes(origin)){
            return callback(null,true)
        }else{
            return callback(null,false)  // or callback(new Error("this origin has no access")) Throwing new-error
        }
    }
}))

// for routes


module.exports = app;
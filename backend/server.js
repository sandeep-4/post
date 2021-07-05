const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');

const mongoose=require('mongoose');

const postRoute=require('./route/post')

const port=5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors());
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
  
app.get('/',async(req,res)=>{
    res.json({
        success:true,
        message:`Hello on port ${port}` 
    })
})

app.use('/api/post',postRoute);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

mongoose.connect('mongodb://localhost:27017/post',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to mongoDB');
}).catch((err)=>{
    console.log('Error connecting to mongoDB')
})
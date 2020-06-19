const express= require('express');
const app= express();
const path=require('path');
const bodyParser=require('body-parser');
app.use('/public',express.static(path.join(__dirname,'/')));// for root directory use "/" instead of static
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/','form.html'));//used to display the staic html file
});
app.post('/',(req,res)=>{
    console.log(req.body);
    //Database work
    res.json({sucess:true});
});

app.listen(3000);
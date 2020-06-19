const express= require('express'); // Returns an express function
const { resolveSoa } = require('dns');
const app = express();

app.get('/',(req,res)=>{
    res.send('In root');
});

app.get('/example',(req,res)=>{
    res.send('in Example');
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query); // here we can get the desired query of user i.e ../arsh/14?tut=paramtut
                            //Here the tut is the propert and param tut its value
                            // Multiple query is passed using & sign 
   res.send(req.params.name +" :" + req.params.age);
});

app.listen(3000);
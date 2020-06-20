const express= require('express');
const bodyparser= require('body-parser');
const app = express();

app.use(bodyparser.json());
//app.use('/example',(req,res,next)) -> use this when we want the middleware to invoked only when a specific route is chosen
app.use((req,res,next)=>{ //next is imp to know when we are done processing the request. otherwise server timeout, used when using custom middelware
  console.log(req.url,req.method)  
  req.banana= ' banana';  
  next();
});
app.get('/', (req,res)=>{
    console.log(req.banana);
    res.send('MiddleWare');
});

app.listen(3000);
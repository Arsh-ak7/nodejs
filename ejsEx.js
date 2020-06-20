const express= require('express');
const app= express();
const path=require('path');
// here /public is an alias which is shown to user instead of the real folder name
//__dirname static is the actual folder containing the file
app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine', 'ejs');
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data:{userQuery : req.params.userQuery ,
                              searchResults : ['book1','book2','book3'],
                              loggedIn : true,
                              username: 'sadsaf'}});//Here the index.ejs should be stored in views folder cause thats the default
});

app.listen(3000);
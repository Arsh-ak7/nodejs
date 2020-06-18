const fs= require('fs');
//create file
fs.writeFile('name.txt','What you want to write in File',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File successfully created');
        fs.readFile('name.txt','utf8',(err,file)=>{//Here Encoding is imp because without it the buffer stream gets printed
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        });
    }
});

//Rename file
fs.rename('name.txt','rename.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Renamed');
    }
});

//to append data

fs.appendFile('rename.txt','Some data appended',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Append Done');
    }
});

// to delete a file
fs.unlink('rename.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('Deleted');
});

//TO Make a folder

fs.mkdir('FolderMade',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Folder Made');
    }
});

//to remove a folder(Works only for empty folder)
fs.rmdir('FolderMade',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Deleted');
    }
});
//Make file inside folder
fs.mkdir('FolderMade',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile('./FolderMade/Ex.txt','Made File',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('File Made');
            }
        });
    }
});

//To delete file and folder, First Delete the file and then folder

fs.unlink('./Foldermade/Ex.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('File Deleted');
        fs.rmdir('FolderMade',(err)=>{
            if(err){
                console.log(err);
            }
            else {
                console.log('Folder Deleted');
            }
        });
    }
});

//To Delete Folder With multiple files

fs.readdir('FolderMade',(err,files)=>{ // readdir reads directory for files, They are stored in files array
    if(err)
    console.log(err)
    else{
        for(let file of files){
            fs.unlink('./FolderMade/'+file,(err)=>{
                if(err)
                console.log(err);
                else
                console.log('Deleted Files');
            })
        }
    }
})





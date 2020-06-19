 const fs= require('fs');
 const zlib=require('zlib');//used to compress data
 const gzip= zlib.createGzip();
 const readStream=fs.createReadStream('./example.txt','utf8');
 const writeStream=fs.createWriteStream('example2.txt.gz');//.gz is the compression type 
 readStream.pipe(gzip).pipe(writeStream);//Reads data from readStream , gzip compresses it and is written in the writeStream 

 // To uncompress file and read 

 const gunzip = zlib.createGunzip();
 const readStream1= fs.createReadStream('./example2.txt.gz');
 const writeStream1=fs.createWriteStream('example4.txt');
 readStream1.pipe(gunzip).pipe(writeStream1);
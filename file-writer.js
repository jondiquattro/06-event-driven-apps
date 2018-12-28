'use strict';
//this file writes and reads
const fs = require("fs");
const util = require("util");

const {savedLog,errorLog,saved,error}=require('./event-logger');

const readFile = util.promisify(fs.readFile);

let file = process.argv.slice(2).shift();


function writeToFile(file, txt){
  fs.writeFile( file, Buffer.from(txt), (err, data) => {
    // savedLog();
    saved.emit('saved', file);
    
    if(err) { throw err; }
    errorLog();
  });
}




function alterFile(file){
readFile(file)
  .then( (data)=>{
    let text = data.toString().toUpperCase();
    Buffer.from(text)

    writeToFile(file, text)
  })
  // .catch(errorLog());
};


alterFile(file);
console.log(file)
module.exports=file;

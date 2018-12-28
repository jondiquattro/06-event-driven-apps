'use strict';
const{saved,error}=require('./events');

function savedLog(){
    saved.on('saved', (file)=>{
      console.log(`${file} saved`);
    //   console.log('called');
    })
  }
  function errorLog(){
  
    error.on('error', (err) => {
      console.error('whoops! there was an error');
    })
  }

  module.exports={savedLog,errorLog,saved,error};
  
'use strict'

function search(input, target) {
  if(typeof(target) != "undefinded"){
    for(let i = 0; i < input.length; i++ ) {
      if (input[i] == target) {
        return i;
        break;
      }
      else i = -1;
    }
  }  
  return i;   
}


module.exports = search

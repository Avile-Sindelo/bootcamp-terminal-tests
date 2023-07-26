export default function countAllPaarl(listOfRegs){
    var regsArray = listOfRegs.trim().split(',');
    var paarlCounter = 0;
    for(var i = 0; i < regsArray.length; i++){
      if(regsArray[i].trim().startsWith('CJ')){
        paarlCounter++;
      }
    }
    return paarlCounter;
  }
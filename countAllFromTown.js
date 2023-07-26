export default function countAllFromTown(listOfRegs, startString){
    var regsArray = listOfRegs.trim().split(',');
    var fromTown = 0;
    
    for(var i = 0; i < regsArray.length; i++){
      if(regsArray[i].trim().startsWith(startString)){
        fromTown++;
      }
    }
    return fromTown;
}
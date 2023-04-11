function allFromTown(RegNumbers, startString) {
    var townRegNumbers = RegNumbers.split(',');
    var sameTown = [];
   
   for (let i = 0; i < townRegNumbers.length; i++ ){
    townRegNumbers[i] = townRegNumbers[i].trim();
       if (townRegNumbers[i].startsWith(startString)){
      sameTown.push(townRegNumbers[i]);
     }
   }
   return sameTown;
 }
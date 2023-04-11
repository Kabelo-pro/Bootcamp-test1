function findItemsOver20(objects){
    var results = [];
  for (var i = 0; i < objects.length; i++){
      if(objects[i].qty > 20){
        results.push(objects[i]);
        
      }
  }

return results;

}
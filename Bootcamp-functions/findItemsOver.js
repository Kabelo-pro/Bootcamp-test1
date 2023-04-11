function findItemsOver(objects, threshold){
    var results = [];
  for (var i = 0; i < objects.length; i++){
      if(objects[i].qty > threshold){
        results.push(objects[i]);
        
      }
  }

return results;

}
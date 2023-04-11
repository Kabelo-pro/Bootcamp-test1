function totalPhoneBill(callsSms){
    var newArrayCalls = callsSms.split(', ')
    
    var calls = 2.75
    var smses = 0.65 
    
    var count = 0;
    
    for (let i = 0; i < newArrayCalls.length; i++){
        if (newArrayCalls[i].trim() === 'call'){
          count += calls;	
      }else if (newArrayCalls[i].trim() === 'sms'){
            count += smses
      }
        
    }
    return 'R' + count.toFixed(2);
  } 
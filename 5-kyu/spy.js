function spyOn (func) {
 let call  = [], 
     returntVal = [], 
     count = 0;
      
  let spy = function() {
    call = [].concat.call(call, ...arguments);
    let result = func.apply(this, arguments);
    returntVal.push(result);
    count++;
    return result;
  }
  
  spy.callCount = () => count;
  spy.wasCalledWith = n => call.indexOf(n) > -1;
  spy.returned = n => returntVal.indexOf(n) > -1;
  
  return spy;
}
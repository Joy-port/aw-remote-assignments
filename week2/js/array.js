//1.

export function max(num){
    const result = num.reduce(function(a, b) {
      //  console.log('pre', a, 'const', b);
        if(a > b){
            return a
        } else {
            return b
        }
      })
    console.log("assignment 1", result);
    return result
} 
// max([1, 2]) //test result to 2
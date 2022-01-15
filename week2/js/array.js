//1.
export function max(num){
    const result = num.reduce((a, b) => a > b ? a : b);
    console.log("assignment 1", result);
    return result
} 
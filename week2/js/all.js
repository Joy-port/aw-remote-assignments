import { max } from './array.js';
import { calculate } from './object.js';
import { opPlus, opMinus, opErr } from './objectData.js'; 
import classObj from './object.js';
import { productData, avg } from './avg.js'; 

//assignment 1 Array

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

//assignment 2 Obj

//First way => JSON
calculate(opPlus);
calculate(opMinus);
calculate(opErr);

//Second way => Class

calculate(classObj.opMulti);
calculate(classObj.opDiv);
calculate(classObj.opErr2);

//assignment 3
avg(productData);

//assignment 4
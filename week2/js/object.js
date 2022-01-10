//calc function
export function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else if(args.op==="x"){
        result=args.n1 * args.n2;
    }else if(args.op==="/"){
        result=args.n1 / args.n2;
    }else{
        result=`Operator "${args.op}" is not supported`;
    }
    console.log("assignment 2",result);
    return result;
}

//class constructor
//use class to create a serice of object content
class calcObj {
    constructor(op, n1, n2){
        this.op = op ;
        this.n1 = n1 ;
        this.n2 = n2 ;
    } 
}

const opMulti = new calcObj('x' , 2, 4);
const opDiv = new calcObj('/', 100, 5);
const opErr2 = new calcObj('%', 23, 21);

export default { opMulti, opDiv, opErr2 }
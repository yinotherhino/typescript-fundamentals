const getSum= (input:number[]):number=>{
let result: number= input.reduce((a,b)=> a+b,0)

return result;

}


const getAverage= (input:number[]):number=>{
    let result: number= input.reduce((a,b)=> a+b,0)
    
    return result/input.length;
    
}

const getEven= (input:number[]):number[]=>{
    input=input.filter((x)=> x%2==0)
    
    return input;
    
}

let arr:number[] = [100,40,20,60,123,50,900,700,5,34,131,353,135,40,44,22]

console.log(getSum(arr))
console.log(getAverage(arr))
console.log(getEven(arr))
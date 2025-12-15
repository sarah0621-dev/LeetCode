type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let temp : number[] = []; 
    for(let j=0; j < arr.length; j++){
        if (fn(arr[j],j)){
            temp.push(arr[j]) ;
        }
    }
    return temp;
};
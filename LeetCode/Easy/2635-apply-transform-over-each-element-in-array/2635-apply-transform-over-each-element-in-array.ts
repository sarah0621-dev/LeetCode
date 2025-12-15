function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let temp : number[] = [];
    for(let j=0; j < arr.length; j++){
        temp.push(fn(arr[j],j));
    }
    return temp;

};
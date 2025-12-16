type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let temp: number = init;
    for(let j=0; j < nums.length; j++) {
        temp = fn(temp, nums[j]);
    }
    return temp;
};
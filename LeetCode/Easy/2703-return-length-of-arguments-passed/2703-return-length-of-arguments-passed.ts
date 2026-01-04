type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let i : number = 0;
    for(let j =0; j < args.length; j++) {
        i++;
    }
    return i;
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
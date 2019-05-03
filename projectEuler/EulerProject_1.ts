
function getMultiples3And5(start: number): number[] {
    if (start === 0) {
        return [];
    }
    if (start % 3 === 0 || start % 5 === 0) {
        return [start].concat(getMultiples3And5(start - 1)); 
    } 
     else {
        return [].concat(getMultiples3And5(start - 1));
    }
}


console.log(getMultiples3And5(999).reduce((a, b) => a + b));
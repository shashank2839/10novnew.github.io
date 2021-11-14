function generateArray(a, b) {
    let arr = new Array();
    for (let n = a; n<= b; n++){
        arr.push(n);
    }
    return arr;
}

let arr = generateArray(1, 5);
console.log(arr);
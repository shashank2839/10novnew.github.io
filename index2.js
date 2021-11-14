function mostFrequentItem(arr) {
    arr.sort();
    if (arr.length == 0)
        return -1;
    if (arr.length == 1)
        return arr[0];
    let flag = 1, mostFrequentItem , max = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== arr[i - 1]) {
            flag = 1;
        }
        else {
            flag++;
        }
        if (flag > max) {
            max = flag;
            mostFrequentItem = arr[i];
        }
    }
    return mostFrequentItem;
}

let arr = [1,4,4,8,4,3,8,4,9,10,4,3,4,];
console.log(mostFrequentItem(arr));
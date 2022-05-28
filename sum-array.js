function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for(const i of ar){
        sum = sum + i;
    }
    return sum;
}
const elems = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const sum = aVeryBigSum(elems);
console.log(sum);
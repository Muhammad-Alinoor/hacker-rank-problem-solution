function plusMinus(arr) {
    // Write your code here
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for(const i of arr){
        if(i > 0){
            pos = pos + 1;
        }
        else if(i==0){
            zero = zero + 1;
        }
        else{
            neg = neg + 1;
        }
    }
    const n =arr.length;
    const portionPos = pos/n;
    const fixedToPos = portionPos.toFixed(6);
    console.log(fixedToPos);
    const portionNeg = neg/n;
    const fixedToNeg = portionNeg.toFixed(6);
    console.log(fixedToNeg);
    const portiongZero = zero/n;
    const fixedToZeor = portiongZero.toFixed(6);
    console.log(fixedToZeor);

}
const arr = [ -4, 3, -9, 0, 4, 1];
const hold = plusMinus(arr);
console.log(hold);
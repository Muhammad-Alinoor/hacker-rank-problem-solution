function birthdayCakeCandles(candles) {
    // Write your code here
    // :::::::::: One way ::::::::::::::::
    let n = candles.length;
//     let count = 0;
//     for(let i = 0; i <n; i++ ){
//        for(let j = i+1; j < n; j++){
//            if(candles[i] > candles[j]){
//               let a = candles[i];
//                candles[i] = candles[j];
//                candles[j] = a;
//             }
//         }
//     }
//    for(let i = 0; i < n ; i++ ){
//        if(candles[n-1] == candles[n-i-1]){
//             count += 1;
//         }
//    }
//    return count;
// ::::::::::::::another way:::::::::::::::::
    let largest = candles[0];
    for(const candle of candles){
        if(largest < candle){
            largest = candle;
        }
    }
    let count = 0;
    for(const candle of candles){
        if(largest == candle){
            count += 1;
        }
    }
    return count;
}
const arr = [9,4,453,3,4,5,6,3,454,53,34,4,3,54,543,5252,6,6546,54,63,3,56,56,36,536,6,546,356,3,63,5654,36,546,435,6546];
const hold = birthdayCakeCandles(arr);
console.log(hold);
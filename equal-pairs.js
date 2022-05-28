function pairs(k, arr){
    // console.log(k,arr);
    
    // if((n >= 2 && n <= 10^5) && (k > 0 && k < 10^9)){
    //     let satisfiedNumberOfPairs = 0;
    //     for( i = 0; i < n; i++){
    //         if((arr[i]> 0 && arr[i] < (2^31)-1)&&(arr[i]!=arr[i+1])){
    //             for(j= 0; j <n ; j++){
    //                 let diff = arr[i] - arr[j];
    //                 if(diff == k){
    //                     satisfiedNumberOfPairs += 1;
    //                 }
    //             }
    //         }
    //     }
    //     return satisfiedNumberOfPairs;
    // }  
    let pairs = 0;
    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j <arr.length; j++){
            if((arr[i]-arr[j])==k){
                pairs = pairs + 1;
            }
        }
    }
    return pairs;

}
const k = 3;
const arr = [ 1,3,5,7,9,6,8,11];
const arrpar = pairs(k,arr);
console.log(arrpar);
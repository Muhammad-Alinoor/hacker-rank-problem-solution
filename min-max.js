
function miniMaxSum(arr) {
    
    // Write your code here
    let a;
    for(let i = 0; i< arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                a = arr[i];
                arr[i] =arr[j];
                arr[j] = a;
            }
        }
    }
    // ::::::::::min max start::::::::
    let minMax = [];
    let minSum = 0;
    // let n = arr.length -1;
    for(let i = 1; i <= arr.length-1; i++){
        minSum = minSum + arr[arr.length-1-i];
        
    }minMax.push(minSum);
    let maxSum = 0;
    for(let i = 2; i < arr.length+1; i++){
        maxSum = maxSum + arr[arr.length+1-i];
       
    } minMax.push(maxSum);
    let s = '';
    
    for( let i = 0; i < minMax.length; i += 1) {
      s = s+ minMax[i] + " ";
    }
    console.log(s);
}
miniMaxSum([7 ,69, 2 ,221 ,8974]);
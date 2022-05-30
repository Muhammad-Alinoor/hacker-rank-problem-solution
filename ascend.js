function ascending(arr){
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
    
}
ascending([1, 2, 3, 4, 5]);
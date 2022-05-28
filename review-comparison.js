/*
a[3] = a[0] is clarity, a[1] is originality, a[2] is difficulty
b[3] = b[0],b[1],b[2]
if a[i] > b[i] alice got 1
if a[i] < b[i] bob got 1
if a[i] = b[i] no one got points
*/

function compareTriplets(a, b) {
    // Write your code here
    let al= 0;
    let bo = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            al += 1;
        }
        else if(a[i] < b[i]){
            bo += 1;
        }
        else{
    
        }
    }
    return [al, bo];

}
const a = [5, 6, 7];
const b = [3, 6, 10];
const triplets = compareTriplets(a,b);
console.log(triplets);
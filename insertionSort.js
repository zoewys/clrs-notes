/**
 * Created by zoe on 2/24/16.
 */

var insertionSort = function(array){
    var i, j,temp;
    // loop array;
    for(i=0;i<array.length;i++){
        // loop sorted part of array and insert array[i]
        for(j=i+1;j>0;j--){
            if(array[j]<array[j-1]){
                // swap array[j] array[j-1]
                temp = array[j];
                array[j]=array[j-1];
                array[j-1] = temp;
            }else{
                break;
            }
        }
    }
    return array;
};

var array = [2,1,5,6,7,9,2,3,56,23],
    array2 = [0],
    array3 = [1,0],
    array4 = [9,8,7,6,4,3,2,1];

console.log(insertionSort(array));
console.log(insertionSort(array2));
console.log(insertionSort(array3));
console.log(insertionSort(array4));






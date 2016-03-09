/**
 * Created by zoe on 3/9/16.
 */

var mergeSort = function(array){

    var middleIndex,
        left,right;

    var merge = function(left,right){
        var result=[];
        while(left.length>0 && right.length>0){
            if(left[0]<right[0]){
                result.push(left.shift());
            }else{
                result.push(right.shift());
            }
        }

        return result.concat(left,right);
    };

    if(array.length >1){
        middleIndex = parseInt(array.length/2);
        left = mergeSort(array.slice(0,middleIndex));
        right = mergeSort(array.slice(middleIndex,array.length));
        return merge(left,right);
    }else{
         return array;
    }

};


var array = [2,1,5,6,7,9,2,3,56,23],
    array2 = [0],
    array3 = [1,0],
    array4 = [9,8,7,6,4,3,2,1];

console.log(mergeSort(array));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
console.log(mergeSort(array4));

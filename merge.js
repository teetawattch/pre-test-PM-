"use strict";
// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2) : int []
exports.__esModule = true;
exports.merge = void 0;
// given
//      collection_1, collection_2 already sorted from min(0) to max
function merge(collection_1, collection_2) {
    var arr = [];
    var arr_sort = [];
    for (var i = 0; i < collection_1.length; i++) {
        arr.push(collection_1[i]);
    }
    for (var i = 0; i < collection_2.length; i++) {
        arr.push(collection_2[i]);
    }
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            var old = 0;
            if (arr[i] < arr[j]) {
                console.log('arr[i] : ' + arr[i] + ',arr[j] : ' + arr[j]);
                old = arr[i];
                arr[i] = arr[j];
                arr[j] = old;
            }
        }
    }
    console.log(arr);
    return arr;
}
exports.merge = merge;
// merge([1, 3, 5], [4, 2, 6])

// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2) : int []

// given
//      collection_1, collection_2 already sorted from min(0) to max
export function merge(collection_1: number[], collection_2: number[]){
    let arr: number[] = []
    let arr_sort: number[] = []
    for(let i = 0; i < collection_1.length; i++){
        arr.push(collection_1[i])
    }
    for(let i = 0; i < collection_2.length; i++){
        arr.push(collection_2[i])
    }
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let old = 0
            if(arr[i] < arr[j]){
                console.log('arr[i] : '+ arr[i] + ',arr[j] : ' + arr[j])
                old = arr[i]
                arr[i] = arr[j]
                arr[j] = old
            }
        }
    }
    console.log(arr)
    return arr
}

// merge([1, 3, 5], [4, 2, 6])
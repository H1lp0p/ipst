function chooseSort(arr: Array<number>){
    for (let iter = 0; iter < arr.length; iter++){
        let mxInd = 0
        for (let i = 0; i<arr.length - iter; i++){
            if (arr[i] > arr[mxInd]){
                mxInd = i
            }
        }
        [arr[arr.length - iter - 1], arr[mxInd]] = [arr[mxInd], arr[arr.length - iter - 1]]
    }
}

function binSearch(arr : Array<number>, target : number){
    let left = 0
    let right = arr.length - 1
    while (left < right){
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] == target){
            return mid
        }
        else if (arr[mid] > target){
            right = mid - 1
        }
        else{
            left = mid + 1
        }
    }
    return -1
}

function solution1(arr : Array<number>, target : number = 0){
    chooseSort(arr)
    console.log(arr)
    console.log(binSearch(arr, target))
}

function bubbleSort(arr : Array<number>){
    for (let _ = 0; _<arr.length; _++){
        let swap_flag = false
        for (let i = 0; i<arr.length - 1; i++){
            if (arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swap_flag = true
            }
        }
        if (!swap_flag){
            break
        }
    }
}

function solution2(firstArray, secondArray){
    bubbleSort(firstArray)
    let res = [...firstArray, ...secondArray]

    return res
}

function solution3(arr : Array<Array<number>>){
    let res = []
    arr.forEach((iter) => {
        res.push(...iter)
    })
    bubbleSort(res)
    return res
}

let test_arr = [1,2,3,6,8,1,6,3,2,1,0,4]
let stringArr = ["One", "Two", "Three"]

let test_arr_second = [[1,4,5],[1,3,4],[2,6]]

solution1(test_arr, 0)

console.log(solution2(test_arr, stringArr))

console.log(solution3(test_arr_second))
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function chooseSort(arr) {
    var _a;
    for (var iter = 0; iter < arr.length; iter++) {
        var mxInd = 0;
        for (var i = 0; i < arr.length - iter; i++) {
            if (arr[i] > arr[mxInd]) {
                mxInd = i;
            }
        }
        _a = [arr[mxInd], arr[arr.length - iter - 1]], arr[arr.length - iter - 1] = _a[0], arr[mxInd] = _a[1];
    }
}
function binSearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var mid = Math.floor((right + left) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
function solution1(arr, target) {
    if (target === void 0) { target = 0; }
    chooseSort(arr);
    console.log(arr);
    console.log(binSearch(arr, target));
}
function bubbleSort(arr) {
    for (var _ = 0; _ < arr.length; _++) {
        var swap_flag = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap_flag = true;
            }
        }
        if (!swap_flag) {
            break;
        }
    }
}
function solution2(firstArray, secondArray) {
    bubbleSort(firstArray);
    var res = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
    return res;
}
function solution3(arr) {
    var res = [];
    arr.forEach(function (iter) {
        res.push.apply(res, iter);
    });
    bubbleSort(res);
    return res;
}
var test_arr = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
var stringArr = ["One", "Two", "Three"];
var test_arr_second = [[1, 4, 5], [1, 3, 4], [2, 6]];
solution1(test_arr, 0);
console.log(solution2(test_arr, stringArr));
console.log(solution3(test_arr_second));

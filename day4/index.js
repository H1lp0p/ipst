function mapToList(mp) {
    var res = [];
    for (var key in mp) {
        res.push([key, mp[key]]);
    }
    return res;
}
var test_map = { a: 1, b: 2 };
console.log(test_map);
console.log(mapToList(test_map));

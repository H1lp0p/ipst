function mapToList(mp : {}){
    let res = []
    for (let key in mp){
        res.push([key, mp[key]])
    }
    return res
}

let test_map = { a: 1, b: 2 }

console.log(test_map)

console.log(mapToList(test_map))
function solution1(input) {
    return Array.from(new Set(input.split(''))).join('');
}
function solution2(input) {
    let words = input.split(" ");
    words = words.map((x) => x[0].toString().repeat(x.length));
    return words.join(' ');
}
function solution3(input) {
    let secondPart = input.slice(0, input.length - 1).split('').reverse();
    return input + secondPart.join('');
}
function solution4(url) {
    let fetchRes = fetch(url).then(res => res.json()).then(resJson => {
        let resAddress = `Город: ${resJson.address.city} \nУлица: ${resJson.address.street}\nДом: ${resJson.address.house}`;
        let resBuyHistory = `Фамилия: ${resJson.person.lastName}\nИмя: ${resJson.person.firstName}\nКупил ${resJson.productsOrder.count} штук товара ${resJson.productsOrder.product.name}`;
        console.log(resAddress);
        console.log(resBuyHistory);
    });
}
let input1 = "DDADSADASDAAADS";
console.log(solution1(input1));
let input2 = "hello alexandr!";
console.log(solution2(input2));
let input3 = "дим";
console.log(solution3(input3));
let url = "https://raw.githubusercontent.com/jakiichu/data/main/data.json";
solution4(url);

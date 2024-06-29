function plurals(calcborder) {
    for (var num = 2; num <= calcborder; num++) {
        var plural = true;
        for (var div = 2; div < num; div++) {
            if (num % div == 0) {
                plural = false;
                break;
            }
        }
        if (plural) {
            console.log(num);
        }
    }
}
function fib(calcBorder, prewNumOne, prewNumTwo, nowIter) {
    if (calcBorder === void 0) { calcBorder = 200; }
    if (prewNumOne === void 0) { prewNumOne = 1; }
    if (prewNumTwo === void 0) { prewNumTwo = 1; }
    if (nowIter === void 0) { nowIter = 1; }
    if (nowIter <= calcBorder) {
        if (nowIter <= 2) {
            console.log("".concat(nowIter, " : 1"));
            fib(calcBorder, prewNumTwo, prewNumOne, nowIter + 1);
        }
        else {
            console.log("".concat(nowIter, " : ").concat(prewNumOne + prewNumTwo));
            fib(calcBorder, prewNumTwo, prewNumOne + prewNumTwo, nowIter + 1);
        }
    }
}
function season(month) {
    var seasons = ["Зима", "Весна", "Лето", "Осень"];
    console.log("".concat(month, " \u044D\u0442\u043E ").concat(seasons[Math.floor(((month) / 3)) % 4]));
}
function leapYear(year) {
    return (year % 400 == 0) || (year % 100 != 0 && year % 4 == 0);
}
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
plurals(100);
for (var i = 1; i <= 12; i++) {
    season(i);
}
var rndYear = randInt(1000, 2100);
console.log("".concat(rndYear, " is").concat(leapYear(rndYear) ? " " : " not ", "a leap year"));

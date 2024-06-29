function plurals(calcborder : number){
    for (let num = 2; num <= calcborder; num++){
        let plural = true
        for (let div = 2; div < num; div ++){
            if (num % div == 0){
                plural = false
                break
            }
        }
        if (plural){
            console.log(num)
        }
    }
}

function fib(calcBorder = 200, prewNumOne = 1, prewNumTwo = 1, nowIter = 1){
    if (nowIter <= calcBorder){
        if (nowIter <= 2){
            console.log(`${nowIter} : 1`)
            fib(calcBorder, prewNumTwo, prewNumOne, nowIter + 1)
        }
        else{
            console.log(`${nowIter} : ${prewNumOne + prewNumTwo}`)
            fib(calcBorder, prewNumTwo, prewNumOne + prewNumTwo, nowIter + 1)
        }
    }
}

function season(month : number){
    let seasons = ["Зима", "Весна", "Лето", "Осень"]
    console.log(`${month} это ${seasons[Math.floor(((month) / 3))%4]}`)
}

function leapYear(year: number){
    return (year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)
}

function randInt(min : number, max : number){
    return Math.floor(Math.random() * (max - min) + min)
}

plurals(100)

for (let i = 1; i<=12; i++){
    season(i)
}

let rndYear = randInt(1000, 2100)
console.log(`${rndYear} is${leapYear(rndYear) ? " " : " not "}a leap year`)
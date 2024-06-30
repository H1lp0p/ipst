class calculation{
    private _calculationLine : string

    set calculationLine(value : string) {
        this._calculationLine = value
    }

    get calculationLine() {
        return this._calculationLine
    }

    setlastSymbolCalculationLine(symbol: string) {
        this.calculationLine += symbol
    }

    lastSymbol() {
        if (this.calculationLine.length > 0){
            return this.calculationLine[this.calculationLine.length - 1]
        }
        else{
            return undefined
        }
    }
}

let c = new calculation()

c.calculationLine = "abs"
c.setlastSymbolCalculationLine("c")
console.log(c.calculationLine)
console.log(c.lastSymbol())
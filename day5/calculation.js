var calculation = /** @class */ (function () {
    function calculation() {
    }
    Object.defineProperty(calculation.prototype, "calculationLine", {
        get: function () {
            return this._calculationLine;
        },
        set: function (value) {
            this._calculationLine = value;
        },
        enumerable: false,
        configurable: true
    });
    calculation.prototype.setlastSymbolCalculationLine = function (symbol) {
        this.calculationLine += symbol;
    };
    calculation.prototype.lastSymbol = function () {
        if (this.calculationLine.length > 0) {
            return this.calculationLine[this.calculationLine.length - 1];
        }
        else {
            return undefined;
        }
    };
    return calculation;
}());
var c = new calculation();
c.calculationLine = "abs";
c.setlastSymbolCalculationLine("c");
console.log(c.calculationLine);
console.log(c.lastSymbol());

var worker = /** @class */ (function () {
    function worker(_name, _surname, _rate, _days) {
        if (_days === void 0) { _days = 0; }
        this._name = _name;
        this._surname = _surname;
        this._rate = _rate;
        this._days = _days;
    }
    Object.defineProperty(worker.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(worker.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(worker.prototype, "rate", {
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(worker.prototype, "days", {
        get: function () {
            return this._days;
        },
        enumerable: false,
        configurable: true
    });
    worker.prototype.getSalary = function () {
        return this._days * this._rate;
    };
    return worker;
}());
var petya = new worker("Petya", "Petrov", 200, 3);
console.log(petya.getSalary());
console.log(petya.rate);

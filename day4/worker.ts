class worker{
    private _name : string
    private _surname : string
    private _rate : number
    private _days : number

    constructor(_name: string, _surname: string, _rate : number, _days = 0){
        this._name = _name
        this._surname = _surname
        this._rate = _rate
        this._days = _days
    }

    get name(){
        return this._name
    }

    get surname() {
        return this._surname
    }

    get rate(){
        return this._rate
    }

    get days(){
        return this._days
    }

    getSalary(){
        return this._days * this._rate
    }
}

let petya = new worker("Petya", "Petrov", 200, 3)
console.log(petya.getSalary())
console.log(petya.rate)
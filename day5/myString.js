var MyString = /** @class */ (function () {
    function MyString() {
    }
    MyString.reverse = function (input) {
        return input.split('').reverse().join('');
    };
    MyString.ucFirst = function (input) {
        return input[0].toUpperCase() + input.slice(1, input.length);
    };
    MyString.ucWords = function (input) {
        var words = input.split(' ');
        return words.map(this.ucFirst).join(' ');
    };
    return MyString;
}());
console.log(MyString.reverse("abd"));
console.log(MyString.ucFirst("hello"));
console.log(MyString.ucWords("sup dude, how r u?"));

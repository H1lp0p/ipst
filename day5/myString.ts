class MyString{
    static reverse(input : string) {
        return input.split('').reverse().join('')
    }

    static ucFirst(input : string){
        return input[0].toUpperCase() + input.slice(1, input.length)
    }

    static ucWords(input : string){
        let words = input.split(' ')
        return words.map(this.ucFirst).join(' ')
    }
}


console.log(MyString.reverse("abd"))
console.log(MyString.ucFirst("hello"))
console.log(MyString.ucWords("sup dude, how r u?"))
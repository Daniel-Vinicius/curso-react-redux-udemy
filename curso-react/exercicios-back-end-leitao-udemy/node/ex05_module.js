console.log(global === this) // false
console.log(module === this) // false
console.log(module.exports === this) // true

this.DigaOi = function () {
    console.log('OI!!!')
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myFunction = function () {
    var add = function (a, b) {
        return a + b;
    };
    console.log(add(4, 1));
    // optional parameters
    var fullName = function (firstName, lastName) {
        return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
    };
    console.log(fullName('John', 'Doe'));
    //default parameters
    var getSalary = function (basic, bonus) {
        if (bonus === void 0) { bonus = 0; }
        return basic + bonus;
    };
    console.log(getSalary(38000));
    var greet = function () {
        console.log("Hello you!");
    };
    greet();
    //rest parameters
    var addNumbers = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (sum, num) { return sum + num; }, 0);
    };
    console.log(addNumbers(1, 2, 3, 4, 5, 15));
};
exports.default = myFunction;

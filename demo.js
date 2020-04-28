//destructuring
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const hello=({first,last})=>`Hello${first} ${last}`;
// const person={first:'vivek',last:'upadhyay'};
// console.log(hello(person));
//decorator
function f() {
    console.log("f():evaluated");
    return function (target, propertyKey, descriptior) {
        console.log("f():called");
    };
}
function g() {
    console.log("g():evaluated");
    return function (target, propertyKey, descriptior) {
        console.log("g():called");
    };
}
var c = /** @class */ (function () {
    function c() {
    }
    c.prototype.method = function () { };
    __decorate([
        f(),
        g()
    ], c.prototype, "method");
    return c;
}());

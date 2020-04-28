"use strict";
var _this = this;
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of(1, 2, 3, 4).pipe(operators_1.map(function (n) { return n * 3; })).subscribe(function (n) {
    if (n % 2 === 0) {
        console.log(n);
    }
});
rxjs_1.of(1, 2, 3, 4).pipe(operators_1.map(function (n) { return n * 3; }), operators_1.filter(function (n) { return n % 2 === 0; }))
    .subscribe(console.log);
rxjs_1.of(1, 2, 3, 4).pipe(operators_1.map(function (n) { return n * 3; })).subscribe(function (n) {
    if (n % 2 === 0) {
        console.log("Even Number:", n);
    }
    else {
        console.log("Odd number:", n);
    }
});
var _a = rxjs_1.partition(rxjs_1.of(1, 2, 3, 4).pipe(operators_1.map(function (n) { return n * 3; })), function (n) { return n % 2 === 0; }), evens = _a[0], odd = _a[1];
evens.subscribe(function (n) { return console.log('Even Number:', n); });
odd.subscribe(function (n) { return console.log('Odd Number:', n); });
rxjs_1.of({ items: [1, 2, 3, 4] })
    .pipe(operators_1.map(function (response) { return response.items; }))
    .subscribe(function (items) {
    _this.items = items.map(function (item) { return item * 2; }, console.log(item));
});

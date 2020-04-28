var numbers=[10,20,30,40];
numbers.push(50);
console.log(numbers);

var abc=[10,20,30,40,50];
console.log(abc.pop());

var num=[10,20,30,40,50];
num.unshift(50);
//num.shift();
console.log(num);

var num=[10,20,30,40,50];
var i=0;
while(i<num.length){
    console.log(num[i]);
    i++;
}
var colors=["red","black","white"];
function printElement(element){
    console.log("********************");
    console.log(element);
    console.log("********************");
}
colors.forEach(printElement);
for(color of colors){
console.log("********************");   
console.log(color);   
console.log("********************");   
}

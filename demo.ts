//destructuring

// const hello=({first,last})=>`Hello${first} ${last}`;
// const person={first:'vivek',last:'upadhyay'};
// console.log(hello(person));

//decorator

function f() {
  console.log("f():evaluated");
  return function (target,propertyKey:string,descriptior:PropertyDescriptor) {
      console.log("f():called");
  }  
}
function g() {
  console.log("g():evaluated");
  return function (target,propertyKey:string,descriptior:PropertyDescriptor) {
      console.log("g():called");
  }  
}
class c {
    @f()
    @g()
    method(){}
}
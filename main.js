// let x=10;
// function Foo(){
//     x=12;
//     console.log(x);
// }
// console.log(x);
// Foo();

function generator(input){
    var index=0;
    return{
        next:function(){
            if(index<input.length){
                index +=1;
                return input[index-1];
            }
            //return "";
        }
    }
}
var mygen=generator("vivek");
mygen.next();
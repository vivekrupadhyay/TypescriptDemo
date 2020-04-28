import { of,from ,forkJoin,partition} from 'rxjs';
import { tap,map,filter } from 'rxjs/operators';

of(1,2,3,4).pipe(map(n=>n*3)).subscribe(n=>{
    if(n%2===0){
        console.log(n);
    }
});
of(1,2,3,4).pipe(
    map(n=> n * 3),
    filter(n=> n % 2===0))
    .subscribe(
        console.log );

of(1,2,3,4).pipe(map(n=>n*3)).subscribe(n=>{
    if(n%2===0){
        console.log("Even Number:",n);
    }
    else{
        console.log("Odd number:",n)
    }
});

const[evens,odd]=partition(
    of(1,2,3,4).pipe(
        map(n=> n * 3),
    ),
    n=> n % 2 ===0,
);
evens.subscribe(n=>console.log('Even Number:',n));
odd.subscribe(n=>console.log('Odd Number:',n));

// of({items:[1,2,3,4]})
// .pipe(map(response=>response.items))
// .subscribe(items=>{
//     this.items=items.map(item=>item*2);
    
// });
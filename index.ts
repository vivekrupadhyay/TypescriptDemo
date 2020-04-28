import { of,from ,forkJoin} from 'rxjs';
import { tap,map,filter } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { ajax } from 'rxjs/ajax';



const source=of(1,2,3,4);
const example=source.pipe(
    tap(val=>console.log(`Before+ ${val}`))
    map(val=>val + 10);
    tap(val=>console.log(`After${val}`))
);
const subscribe=example.subscribe(val=>console.log(val));

const source1=from([1,2,3,4,5]);
const abcd=source1.pipe(filter(num=>num%2=!0));
const subs=abcd.subscribe(x=>console.log(`Odd Number: ${x}`));

const employee=from([{name:'vivek',age:31},
                     {name:'shubham',age:35}]);

const exam=employee.pipe(filter(x=>x.age>31));
const subsc=exam.subscribe(v=>console.log(`Over 30: ${v.name} `));

const subject=new Rx.BehaviourSubject();
subject.subscribe((data)=>{
    console.log('Subscriber A:',data);
});
subject.next(Math.random());






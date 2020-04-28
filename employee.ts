function enumerable(value:boolean) {
    return function(target,propertyKey:string,descriptior:PropertyDescriptor) {
        console.log('decorator - sets the enumerationn part');
        //descriptior.enumerable= value;
    }
}

class Employee {
    private _salary:number;
    private _name:string;

    @enumerable(false)
    get salary(){return `Rs. ${this._salary}`;}
    set salary(salary:any){
        this._salary=+salary;
    }
    @enumerable(true)
    get name(){
        return `Sir/Madam, ${this._name}`;
    }
    set name(name:string){
    this._name=name;
    }
}
const emp=new Employee();
emp.salary=100;
for (let prop in emp) {
    console.log(`enumerable property=${prop}`);
}
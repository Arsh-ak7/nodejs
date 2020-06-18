const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tut', ()=>{
    console.log('tut occured');
});
// Basicalli emits the event;
eventEmitter.emit('tut');

eventEmitter.on('sum', (num1,num2)=>{
    console.log(num1+num2);
});
// Basicalli emits the event;
eventEmitter.emit('sum',3,4);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name= name;
    }
    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
// We can use pedro as listener instance here for emitter because person extends EventEmitter
pedro.on('name',()=>{
    console.log('My name is '+ pedro.name);
});
// Each enit happens sequentially
pedro.emit('name');
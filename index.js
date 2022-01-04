
function myFunction(a,b){
    return a*b;
}
const values = myFunction(5,10)
document.getElementById("demo1").innerHTML = values;
//


function myFunctions(a,b){
    return b/a;
}
const xvalue = myFunctions(5,100);
document.getElementById("demo2").innerHTML = xvalue;


//

function newFunction(p,q){
    return q-p;
}
const yvalue = newFunction(1500,3500);
document.getElementById("demo3").innerHTML = yvalue;

//
//Function Expressions
const xx = function(c,d){
    return c+d;
}
document.getElementById("demo4").innerHTML = xx;// its showed total function
document.getElementById("demo5").innerHTML = xx(25,20);

//
const yy = function(e,f){
return e*f;
};
const cc = yy(20,20);
document.getElementById("demo6").innerHTML = cc;

//
function fFunctions(a,b){
    return a*b;
}
const xxc = fFunctions(5,25)/5*3;
document.getElementById("demo7").innerHTML = xxc;


// JavaScript Arrow Functions

const zz = (m,n) => m * n;
console.log(zz(5,4)*15);

//

// another way to declare function

const xy = (p,q) => { return p+q};
const xq = xy(30,10)*10+25;
document.getElementById("demo8").innerHTML= xq;


//javascript parameters

const myfFunction = function(g,h){
if (h === undefined) {
    h = 5; 
}
return g*h;
}
const ppFunction = myfFunction(6);
console.log(ppFunction)

//


/**
 
//wrong code 
const secFunction = function(a,b,c){
    if (a === undefined) {
        a = 4;
    }
    if (c === undefined) {
        c = 15;
    }
    return a*c/b;

}
const bFunction = secFunction(3);
console.log(bFunction);
 */



//

function findMax(){
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
const totalValue = findMax(4,5,8,6,9,17,20,25,15);
console.log(totalValue);

// total sum 
function sumAll(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++ ){
        sum += arguments[i];
    }
    return sum;
};
const totalSumValue = sumAll(10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90);
console.log(totalSumValue);


//The JavaScript call() Method

const person = {
    fullname:function(){
        return this.firstname+" "+ this.lastname;
    }
}
const person1 = {
    firstname:"saiful",
    lastname:"islam",
}
const person2 = {
    firstname:"shirin",
    lastname:"akter",
}
document.getElementById("demo9").innerHTML = person.fullname.call(person2);
document.getElementById("demo10").innerHTML = person.fullname.call(person1);

//

const persons = {
    fullname:function(city,country){
        return this.firstName+" "+ this.lastName+" ,"+city+" ,"+country;
    }
}
const persons1 = {
    firstName:"Allama mamunul",
    lastName:"Haque",
}
document.getElementById("demo11").innerHTML = persons.fullname.call(persons1,"Dhaka","Bangladesh")

//

console.log(Math.max(10,50,56,0,56,0,56,2,48))

//

myFunctionss();
function myFunctionss(){
    let a = 5;
    let c = 8;
    const l = a*c;
    document.getElementById("demo12").innerHTML= l;
}

function valueFunction(){
    const ll = 10;
    const pp= 154;
    const cc = ll*pp;
    document.getElementById("demo13").innerHTML = cc;
}
valueFunction()

//



let  counter = 0;
function add(){
     counter += 1;
}
add();
add();
add();
add();
add();
add();
document.getElementById("demo14").innerHTML= "This counter is : " + counter;


//


/**
let  counter = 0;
function add(){
    let  counter = 0;
     counter += 1;
}
add();
add();
add();
add();
add();
add();
document.getElementById("demo14").innerHTML= "This counter is : " + counter;
return 1
 */

const adds = (function (){
    let counters = 0;
    return function(){
        counters += 1;
        return counters;
    }
})();
function myIncreaseFunction(){
    document.getElementById("demo15").innerHTML ="This increase counters is "+ adds();   
}










// Javascript class start here

class Car{
    constructor(fName,lName,year){
        this.fName = fName;
        this.lName = lName;
        this.year = year;
    }
}
const myCar = new Car("saiful","islam","2018")
console.log(myCar.lName+" "+myCar.fName+" "+ myCar.year)


//
class country{
    constructor(bcountry,ccountry,dcountry,ecountry){
        this.bcountry = bcountry;
        this.ccountry = ccountry;
        this.dcountry=  dcountry;
        this.ecountry = ecountry;
    }
}
const myCountry = new country("Bangladesh","Pakistan","Afghanistan","Turkey");
document.getElementById("demo16").innerHTML = myCountry.bcountry+" "+myCountry.ccountry+" "+myCountry.dcountry+" "+ myCountry.dcountry+" "+ myCountry.ecountry;


// class method
class Cars{
    constructor(name,year){
        this.name =  name;
        this.year =  year;
    }
    age(){
        let date = new Date();
        return date.getFullYear()-this.year;
    }

    lambg(){
        return this.name
    }
}

const myCurrentCv = new Cars("lamborghini",2010);
document.getElementById("demo17").innerHTML = "My "+ myCurrentCv.lambg() + " is"+ myCurrentCv.age()+ " years old";


//
class Care{
    constructor(brand){
        this.carName = brand;
    }
    present(){
        return "I have a "+ this.carName;
    }
}

class Model extends Care{
    constructor(brand,mod){
        super (brand);
        this.model = mod;
    }
    show(){
        return this.present()+" "+this.model;
    }
}
const myExtends = new Model("lamborghini","Mithshubisi");
document.getElementById("demo18").innerHTML = myExtends.show();
//

class Chare{
    constructor(brands){
        this.brandName = brands;
    }
    presents(){
        return "I  have a "+this.brandName;
    }
}
class Models extends Chare{
    constructor(brands,models){
        super(brands);
        this.models = models;

    }
    show(){
        return this.presents()+" "+ this.models;
    }
}
const myExtendss = new Models("Lexus","Macrhidise");
document.getElementById("demo19").innerHTML = myExtendss.show();





//Getters and Setters
class curs{
    constructor(curs){
        this.curbrand = curs;
    }

   get  cnamse(){
        return this.curbrand
    }
    set cnamse(xcur){
        this.curbrand = xcur
    }
}
let mycurs = new curs("Prado");
document.getElementById("demo20").innerHTML = "This is my dream car "+mycurs.cnamse;
//
class ccur{
    constructor(ccur){
        this._ccur = ccur;
    }

    get ccnam(){
        return this._ccur;
    
    }
    set ccnam(xccur){
        return this._xccur = xccur;
    }
    
}
let myCcur = new ccur("BMW");
document.getElementById("demo21").innerHTML = "this is my dream car "+myCcur.ccnam;



//Hoisting 
// JavaScript Class Static Methods
class hellos{
    constructor(name){
        this.name = name;
    }
   static hello(){
        return " hey hello!!!!"
    }
}
const helloDeclare =  new hellos("saiful islam")
document.getElementById("demo22").innerHTML = hellos.hello();
















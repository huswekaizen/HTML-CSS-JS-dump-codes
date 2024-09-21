//const checkboxBtn = document.getElementById("checkboxBtn");
//const h2Text = document.getElementById("h2Text");
//const accBtn = document.getElementById("accBtn");
//const passInput = document.getElementById("passInput");

// Hide or unHide Password and Confirmed Password

function myFunction() {
   // var x = document.getElementById("myInput");
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
}
function myFunction1() {
   // var x = document.getElementById("myInput");
  if (conpassInput.type === "password") {
    conpassInput.type = "text";
  } else {
    conpassInput.type = "password";
  }
}

// Conditions to Enter Home Page

function myFunction2() {

  //const passInput = document.getElementById("passInput");
  //const conpassInput = document.getElementById("conpassInput");

  if(passInput.value === "" && conpassInput.value === ""){
    window.location.href = '';

  }else if(passInput.value !== conpassInput.value ){
    h2Text.textContent = "Password don't match!";

  }else if(passInput.value === conpassInput.value){
    window.location.href = 'home.html';
  }
}
// CREATE MORE CONDITIONS FOR EMAIL AND USERNAME THEY NEED TO HAVE VALUE!!!






/*let fruits = ["apple", "banana", "orange", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element)
}*/

/*let myname = "jacob buu";

let firstName = myname.slice(0, 5);
let firstNameChar = myname.slice(0, 2);

let UpperCase1 = firstNameChar.slice(0, 1);
let CharUppercase = UpperCase1.charAt(0).toUpperCase();

console.log(firstName);

console.log(firstNameChar);

console.log(CharUppercase);*/

/*const students = ["joshua", "justine", "sean", "jacob"]
let UPPER;


const STUDENTS = students.map(function (element){
  return element.charAt(0).toUpperCase() + element.slice(1, 6);
});

console.log(STUDENTS);*/

//function nigger(element){
    //return element.toUpperCase();
//}

/*const student1 = {
    firstName: "Joshua",
    lastName: "Calma",
    Lrn: 136559110089,
    isEnrolled: true,
    Line1: function(){console.log(`Hey whats up ${this.firstName} fucking nigger`)}
}

console.log(student1.Lrn);
student1.Line1();
console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.isEnrolled);
*/

/*class MathGago{
    static niggas = 0;

    constructor(niggasName, niggasLevel){
        this.nigga = niggasName;
        this.level = niggasLevel;
    }
}

  const nigga1 = new MathGago("Gun Park103");
  console.log(nigga1.nigga);*/


/*class Niggas{
    areUanigga = true;

    toGreet(){
      console.log(`Whats up are you a true nigga ${this.nigga}? `)
    }
}

class Nigga1 extends Niggas{
    nigga = "lamar";
}

const nigga1 = new Nigga1();
console.log(nigga1.areUanigga);
console.log(nigga1.toGreet());

function eat(...foods){
    console.log(foods)
}

const food1 = "Steak";
const food2 = "Pizza";
const food3 = "Chicken";
const food4 = "PorkChops";
const food5 = "CheesSteak";

const food = eat(food1, food2, food3, food4, food5);

console.log(food);*/



///////////////////////////
///CLASS AND CONSTRUCTOR///
//////////////////////////
/*class Shirt{
  constructor(color, size, price){
      this.Size = size;
      this.Color = color;
      this.Price = price;
  }
  tax(){
    return this.Price * 0.05 / 1.2;
  }

  Tax = this.tax();

  displayShirt(){
    console.log(`The size of this shirt is ${this.Size}`);
    console.log(`The color of this shirt is ${this.Color}`);
    console.log(`The price of this shirt is ${this.Price}`);
  }

}



const shirt1 = new Shirt("Red","Large","9.99$")
shirt1.displayShirt();*/

/*class Mathgague{

  static playerCount = 0;

  constructor(player){
    this.Player = player;
    Mathgague.playerCount++;
  }

  trashTalk(){
    console.log(`shoot yo fookin mouth ${this.Player} ya little foolye`)
  }
}

const player1 = new Mathgague("michal chandlar");
const player2 = new Mathgague("conormcgregurl1");

player1.trashTalk();  
player2.trashTalk();

console.log(player1.Player);
console.log(player2.Player);
console.log(Mathgague.playerCount);*/

/*class Parent{

  constructor(child1, child2, child3, price){
      this.Child1 = child1;
      this.Child2 = child2;
      this.Child3 = child3;
      this.Price = price;
  }

  eat1(){
    console.log(`${this.Child1} is eating cereal`)
  }
  eat2(){
    console.log(`${this.Child2} is eating cereal`)
  }
  eat3(){
    console.log(`${this.Child3} is eating cereal`)
  }

  tax(salesTax){
    return this.Price +  (this.Price  * salesTax);
  } 
}

const salesTax = 0.05;
const Children = new Parent( "Gun","Goo", "Dg", 20);
const Children2 = new Parent( "DanielPark","EliJang", "JakeKim", 20);

const Tax = Children.tax(salesTax);
console.log(`tax is ${Tax.toFixed(2)}`)


Children.eat1();
Children2.eat2();*/

/*class User{

  static userCount = 0;

  constructor(username){
      this.username = username;
      User.userCount++;
  }
}

class Nigga{

  static userCount1 = 0;

  constructor(nigga, mynigga, retard){
      this.nigga = nigga;
      this.mynigga = mynigga;
      this.retard = retard;
      Nigga.userCount1++;
  }
  static usercount(){
    console.log(`the user count is ${Nigga.userCount1}`);
  }
  sayhello(){
    console.log(`hello ${this.nigga}, ${this.retard} and ${this.mynigga}`);
  }
  

}
const user1 = new Nigga("gun Park", "goo Kim", "lee Jihoon");
const user2 = new Nigga("Jichang", "Daniel");

user1.sayhello();
Nigga.usercount();

console.log(user1.mynigga);
console.log(user2.mynigga);
console.log(Nigga.userCount1);

function mcgregor(fooliye){
    console.log(`hello ${fooliye}`);
}

mcgregor("tae");*/

class Parent{

  constructor(height, weight, age){
      this.Height = height;
      this.Weight = weight;
      this.Age = age;
  }
  info(level){
    console.log(`the height is ${this.Height} and the Grade level is ${level} the weight is ${this.Weight} `)
  }
}

class firstChild extends Parent{
   
  constructor(height, weight, age, college){
    super(height, weight, age)
    this.College = college;
  }

  isCollege(){
      console.log(`the grade level is ${this.College}`);
      super.info(this.College);
  }
}
class secondChild extends Parent{
   
  constructor(height, weight, age, highSchool){
    super(height, weight, age)
    this.Highschool = highSchool;

  }
  isHighschool(){
      console.log(`the grade level is ${this.Highschool}`);
      super.info(this.Highschool);
  }
}
class thirdChild extends Parent{
   
  constructor(height, weight, age, elementary){
    super(height, weight, age)
    this.Elementary = elementary;

  }
  isElementary(){
    console.log(`the grade level is ${this.Highschool}`);
    super.info(this.Elementary);
}
}

const firstchild = new firstChild(180, 75, 20, "2ndYear");
const secondchild = new secondChild(175, 64, 17, "SeniorHigh");
const thirdchild = new thirdChild(180, 75, 20, "GradeFifth");

firstchild.isCollege();
secondchild.isHighschool();
thirdchild.isElementary();

/*class Triangle{

    constructor(height, base){
        this.Height = height;
        this.Base = base; 
    }

    set Height(theHeight){
          if(theHeight > 0){
              this.heighT = theHeight;
          }else{
              console.error("not a valid nigga");
          }
    }
    set Base(theBase){
          if(theBase > 0){
              this.basE = theBase;
          }else{
              console.error("not a valid nigga");
          }
    }

    get Height(){
        return this.heighT;
    }
    get Base(){
      return this.basE;
  }


   
}

const triangle = new Triangle(100000000000, 2);

console.log(triangle.Height);
console.log(triangle.Base);*/

/*function displayTao({fullName, champ, weightDiv, country})  {
    console.log(`Name: ${fullName}`);
    console.log(`champ: ${champ}`);
    console.log(`weight division: ${country}`);
    console.log(`country: ${weightDiv}`);
}

const tao1 = {
    fullName: "Conor McGregor",
    country: "Ireland",
    weightDiv: "FeatherWeight/LightWeight/WelterWeight",
    champ: 2,
}

const tao2 = {
  fullName: "Alex Pereira ",
  country: "Brazil",
  weightDiv: "MiddleWeight/LightHeavyWeight",

}

const {fullName, country, weightDiv, champ = 3} = tao1;

console.log(fullName);
console.log(country);
console.log(weightDiv);
console.log(champ);

displayTao(tao1);*/

/*const Mcgregor = {
    fullName: "Conor McGregor",
    height: "5'9",
    weight: 155.5,
    champion: ["FeatherWeight", "LightWeight"],
    address: {
        city: "Dublin",
        country: "Ireland",
    }
}

console.log(Mcgregor.champion[0]);
console.log(Mcgregor.champion[1]);
console.log(Mcgregor.address.country);*/


/*const champs = [{name: "Conor Mcgregor", division: "Featherweight / Lightweight", nn: "TheNotorious", height: 175},
                {name: "Alex Pereira", division: "Middleweight / Lightheavyweight", nn: "POATAN", height: 191},
                {name: "Jon Jones", division: "Lighheavyweight / Heavyweight", nn: "Bones", height: 193},
                {name: "Islam Makhachev", division: "Lightweight", height: 180}]

const newChamps = champs.sort((a, b) => a.height - b.height);

console.log(newChamps);

let numbers = [1, 10 ,2, 3 ,6, 5, 4, 8, 7, 9];

numbers.sort((a, b) => a - b);
console.log(numbers)*/

/*class champi {

  constructor (name, age, shit){
    this.name = name;
    this.age = age;
    this.shit = shit;
  }

  Hello(){
    console.log(`hello ${this.name}`);
    console.log(`hello ${this.age}`);
    console.log(`hello ${this.shit}`);
  }


}
 


const hello = new champi("conor", 35, "fooliye");

hello.Hello();
console.log(hello.name);*/



/*function thisFool(...champs){

    return champs;
}

const champ1 = "mcgregor";
const champ2 = "pereira";
const champ3 = "oliveira";
const champ4 = "makhachev";


const champions = thisFool(champ1, champ2, champ3, champ4);
console.log(champions);*/


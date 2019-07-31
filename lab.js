// # Class Exercises

// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)

// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
console.log("Question 1:");
class Person {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    fullname() {
        console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
    }
}
let person1 = new Person("sharrar", "zaman", "khan");
let person2 = new Person("Abdula", "Ahmed", "Rodriguez");
console.log(person1);
// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
person1.fullname();
console.log("--------------------------------------------");
// ## Question 2

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
console.log("Quetion 2:")
class Book {
    constructor(title, author, rating) {
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
    isGood() {
        if(this.rating >= 7) {
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    }
}
let book1 = new Book("book1", "author1", 7);
let book2 = new Book("book2", "author2", 5);
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
book1.isGood();
book2.isGood();
console.log("--------------------------------------------");
// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
console.log("Question 3:")
class Dog {
    constructor(name, breed, mood, hungry) {
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry;
    }
    playfetch() {
        this.hungry = true;
        this.mood = "playful";
        console.log("Ruff!");
    }
    feed() {
        if(this.hungry = true) {
            this.hungry = false;
            console.log("Woof!")
        } else {
            console.log("The dog doesn't look hungry")
        }
    }
    toString() {
        console.log(`The dog description is: It's name is ${this.name}, it's beed is ${this.breed}, it's mood is ${this.mood}`);
    }

}
let dog1 = new Dog("dog1", "German Shepard", "happy", false);
let dog2 = new Dog("dog2", "Chow chow","mad", true )
// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
dog1.playfetch();
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a method called `toString` that returns a description of the dog:
dog1.toString();
console.log("--------------------------------------------");
// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
console.log("Question 4:")
class FreezingPoint {
    constructor() {
        this.celsius = 0;
        this.farenheit = 32;
        this.kelvis = 273;
    }
}
// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
class Celsius {
    constructor(celsius) {
        this.celsius = celsius;
    }
    getFahrenheitTemp() {
        let temperature = 1.8 * this.celsius + 32;
        console.log(this.celsius);
        return temperature;
    }
    getKelvinTemp() {
        let temperature = this.celsius + 273;
        console.log(this.celsius);
        return temperature;
    }
    isBelowFreezing() {
        if( this.celsius <= 0 && getKelvinTemp() <= 32 && getKelvinTemp() <= 273) {
            console.log("True");
            return true;
        } else {
            console.log("False")
        }
    }
}
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
outsideTempt.isBelowFreezing();
console.log("--------------------------------------------");
// ## Question 5

// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
console.log("Question 5:")
class Movie {
    constructor(name, year, genre, cast, description) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.cast = cast;
        this.description = description;
    }
    blurb() {
        return console.log(`The movie name is: ${this.name}, they year it came out was: ${this.year}, the genre is: ${this.genre}, the cast is: ${this.cast}, the description is: ${this.description}`)
    }
}
let movie1 = new Movie("movie1", 2000, "comedy", "cast1", "hilarious");
console.log(movie1);
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
movie1.blurb();
console.log("--------------------------------------------");
// ## Question 6
console.log("Question 6:")
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus() {
        console.log(this.x + this.y);
        return (this.x + this.y)
    }
    minus() {
        console.log(this.x - this.y);
        return (this.x - this.y);
    }
    getLength() {
        let result = ((Math.pow(this.x, 2)) + Math.pow(this.x, 2));
        let finalResult = Math.sqrt(result);
        return console.log(finalResult);
    }
}
let v1 = new Vector(5, 7);
let v2 = new Vector(2, 5);
v1.plus();
v2.minus();
v1.getLength();
console.log("--------------------------------------------");
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

// ## Question 7
console.log("Question 7:")
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
class Vehicle {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    makeSound() {
        console.log("WHHOOSSSH");
    }
}
class Car extends Vehicle {
    constructor(make, model, name, color) {
        super(name, color);
        this.make = make;
        this.model = model;
    }
    static numberOfWheels(wheelsAmount) {
        console.log("The car has four wheels") //returning console.log gives you undefined, so don't need a return
    }
}
let car1 = new Car("make1", "model1");
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
class Bike extends Vehicle {
    constructor(gears, hasBell, name, color) {
        super(name, color);
        this.gears = gears;
        this.hasBell = hasBell;
    }
    static numberOfWheels(wheelsAmount) {
            console.log("The bike has two wheels") //returning console.log gives you undefined, so don't need a return
    }
}
let bike1 = new Bike("gear1", true);
console.log(Bike.numberOfWheels())
console.log(Car.numberOfWheels());
console.log("--------------------------------------------");
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?

// ## Question 8
console.log("Question 8:")
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
let newBike = new Bike("newGear","newModel","green", "Bikey McBikeface");
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
let newCar = new Car("newGeat", "newModel", "red", "Carry McCarface");
console.log(newBike);
console.log(newCar);
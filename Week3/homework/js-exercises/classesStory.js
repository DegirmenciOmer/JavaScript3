/**
 *  STORY

Abdulkareem is a 35 year old man, that lives in Riyadh. 
He has a wife and 3 children. As a day job he's a construction worker, 
that makes houses. He likes to eat dates and smoke water pipe.

Abdulkareem has a horse, named Adel. The horse 
is 15 years old and has the color brown. Usually the horse eats g
rass or helps transport materials for Abdulkareem.
And they lived happily ever after!

*After reading this story, you have to:

Create a class for Adbulkareem and Adel
Instantiate those classes to create an Abdulkareem object and Adel object
 */

class Organism {
    constructor(name, age, gender, city, favFood, duty) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._city = city;
        this._favFood = favFood;
        this._duty = duty;
    }
}

class Person extends Organism {
    constructor(name, age, gender, job, city, isMarried, numKids, favFood, favEntertainment, duty) {
        super(name, age, gender, city, favFood, duty);
        this._job = job;
        this._isMarried = isMarried;
        this._numKids = numKids;
        this._favEntertainment = favEntertainment;

    }
}

class Horse extends Organism {
    constructor(name, age, gender, city, color, favFood, duty) {
        super(name, age, gender, city, favFood, duty);
        this._color = color;

    }
}

const abdulkareem = new Person('Abdukareem', 35, 'male', 'construction worker', 'Riyadh', true, 3, 'dates', 'smoke water pipe', 'makes houses')

const adel = new Horse('Adel', 15, undefined, 'Riyadh', 'brown', 'grass', 'transport materials')
console.log(abdulkareem, adel);

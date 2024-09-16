require('modules-alias/register');

// 1. 

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    makeNoise() {
        console.log('Im an animal')
    }
}

class Tiger extends Animal {
    constructor(name, age, color, legs, type) {
        super(name,age,color,legs)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.type = type
    }

    makeNoise(){
        console.log('Grrrrrrrrr');
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, type) {
        super(name,age,color,legs)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.type = type
    }

    makeNoise(){
        console.log('Miau');
    }
}


class Dog extends Animal {
    constructor(name, age, color, legs, type) {
        super(name,age,color,legs)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.type = type
    }

    makeNoise(){
        console.log('Guau');
    }
}
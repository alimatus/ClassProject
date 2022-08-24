class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
        this.hull = hull || Math.floor(Math.random() * 3) + 3, // function getRandomArbitrary(min, max) { Math.random() * (max - min) + min;
        this.firepower = firepower || Math.floor(Math.random() * 2) + 2,
        this.accuracy = accuracy || Math.floor(Math.random()* .2) + .6,
    }
    attack() {
        
    }
}

class MainShip extends Ship {
    constructor(name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy);
      // add additional properties for the "Main Ship"
    }
  }

  class AlienShip extends Ship {
    constructor(name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy);
      // add additional properties for the "Main Ship"
    }
  }


// class Example {
// 	constructor(name){
// 		this.name = name
// 		this.method = this.method.bind(this)
// 	}

// 	methodFromExample(){
// 	 return this.name
// 	}
// }

// const btnEl = document.querySelector('button')

// btnEl.addEventListener('click', methodFromExample)

const alienShip1 = newShip("Alien_ship_one");
const alienShip2
const alienShip3 = newShip("Alien_ship_three")
const alienShip4
const alienShip5
const alienShip6
const USS
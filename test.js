// 



class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
        this.hull = hull,
        this.firepower = firepower, 
        this.accuracy = accuracy
    }
    attack() {
        
    }
}

class MainShip extends Ship  {
constructor(name, hull, firepower, accuracy)
{super(name, hull, firepower, accuracy)
{
    this.name = "USS Assembly",
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = .7
  }
}
}

  class AlienShip extends Ship 
    { constructor(name, hull, firepower, accuracy){
        this.name = name,
        this.hull = hull || Math.floor(Math.random() * 3) + 3, // function getRandomArbitrary(min, max) { Math.random() * (max - min) + min;
        this.firepower = firepower || Math.floor(Math.random() * 2) + 2,
        this.accuracy = accuracy || Math.floor(Math.random()* .2) + .6
    }
}
      // add additional properties for the "Main Ship"'
    const Test = new MainShip 


      console.log(Test)
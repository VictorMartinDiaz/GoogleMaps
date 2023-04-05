class Vehicle {

  constructor(public color: string) {}

  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep beep!');
  }
};

class Car extends Vehicle {

  constructor(public horsepower: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('vroom vroom');
  }
}

const myCar = new Car(480, 'orange');

console.log(`My car is ${myCar.color}!`);
myCar.honk();
console.log(`My car has ${myCar.horsepower} horsepower!`);
myCar.drive();
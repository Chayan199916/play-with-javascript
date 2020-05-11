function Car(name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
}

let newCar = new Car("Aulto", "black", 200);

function MotorCycle(name, color, price){
    Car.call(this, name, color);
    this.price = price;
}

let newMotorCar = new MotorCycle("honda", "black", 100);
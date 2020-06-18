//1

function HourlyWage (name1, hSalary){
  this.name1 = 'Vasyl';
  this.hSalary = 50;
}

function MonthlySalary (name2, mSalary){
  this.name2 = 'Petro';
  this.mSalary = 900;
}

MonthlySalary.prototype = new HourlyWage();


HourlyWage.prototype.getInfo = function(){
  return this.name1 + '`s salary is ' + this.hSalary * 8 * 30 * 12 + ' dollars a year';
};

MonthlySalary.prototype.getInfo = function(){
  return this.name2 + '`s salary is ' + this.mSalary * 12 + ' dollars a year';
};

let name1 = new HourlyWage();
let name2 = new MonthlySalary();

console.log(name1.getInfo());
console.log(name2.getInfo());


//2


function Body(type, color){
  this.type = type;
  this.color = color;

  this.setType = function (type){
    type = type;
  }
  this.getType = function(){
    return type;
  }
  this.setColor = function(color){
    color = color;
  }
  this.getColor = function(){
    return color;
  }
}

function Helm(diameter){
  this.diameter = diameter;

  this.setDiameter = function(diameter){
    diameter = diameter;
  }
  this.getDiameter = function(){
    return diameter;
  }
}

function Wheels(size){
  this.size = size;

  this.setSize = function(size){
    size = size;
  }
  this.getSize = function(){
    return size;
  }
}

function Car(manufacturer, model){
  this.body = new Body();
  this.helm = new Helm();
  this.wheels = new Wheels();
  this.manufacturer = manufacturer;
  this.model = model;
}


Car.prototype.setBodyType = function(type){
  this.bodyType = type;
}
Car.prototype.getBodyType = function(){
  return this.bodyType;
}
Car.prototype.setBodyColor = function(color){
  this.bodyColor = color;
}
Car.prototype.getBodyColor = function(){
  return this.bodyColor;
}
Car.prototype.setHelmDiameter = function(diameter){
  this.helmDiameter = diameter;
}
Car.prototype.getHelmDiameter = function(){
  return this.helmDiameter;
}
Car.prototype.setWheelsSize = function(size){
  this.wheelsSize = size;
}
Car.prototype.getWheelsSize = function(){
  return this.wheelsSize;
}

let car = new Car;
car.manufacturer = 'Audi';
car.model = 'Q8';
car.setBodyType('SUV');
car.setBodyColor('Black');
car.setHelmDiameter(15);
car.setWheelsSize(21);

let readyCar = [car.manufacturer, car.model, car.setBodyType(), car.setBodyColor(), car.setHelmDiameter(), car.setWheelsSize()];
console.log(readyCar);






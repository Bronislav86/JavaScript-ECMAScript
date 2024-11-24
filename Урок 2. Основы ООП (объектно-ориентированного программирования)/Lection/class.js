// Класс робот-пылесос.
// class RobotVacuumCleaner {
//   //Св-ва класса
//   model = "Romba-1";
//   power = 200;
//   batterySize = 2100;
//   boxSize = 0.5;
//   workTime = 45;
//   counterOfStarts = 0;
//   isFull = false;
//   isObstacle = false;
//   isUVLampOn = false;

//   //Конструктор класса
//   constructor (){

//   }

//   //Методы класса

//   startCleaning (){
//     this.counterOfStarts++;
//     console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
//   }

//   goCharge() {
//     console.log('I am going to charge...');
//   }

//   switchUVLamp() {
//     this.isUVLampOn = !this.isUVLampOn;
//     console.log(`UV lamp is ${this.isUVLampOn ? 'working' :  'not working'}.`);
//   }
// }


// //Создаем экземпляр класса

// const Roomba = new RobotVacuumCleaner();

// ///////////////////////////

// console.log(Roomba.model);
// console.log(Roomba.isFull);

// setTimeout(Roomba.startCleaning, 1000);

// Roomba.isUVLampOn = true;

// setTimeout(Roomba.switchUVLamp, 2000);

// setTimeout(Roomba.goCharge, 3000);

//////////////////////////////////////////////

// class RobotVacuumCleaner {
//   //Св-ва класса
//   model = "Romba-1";
//   power = 200;
//   batterySize = 2100;
//   boxSize = 0.5;
//   workTime = 45;
//   counterOfStarts = 0;
//   isFull = false;
//   isObstacle = false;
//   isUVLampOn = false;

//   //Конструктор класса
//   constructor (){
//     this.startCleaning = this.startCleaning.bind(this);
//     this.goCharge = this.goCharge.bind(this);
//     this.switchUVLamp = this.switchUVLamp.bind(this);

//   }

//   //Методы класса

//   startCleaning (){
//     this.counterOfStarts++;
//     console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
//   }

//   goCharge() {
//     console.log('I am going to charge...');
//   }

//   switchUVLamp() {
//     this.isUVLampOn = !this.isUVLampOn;
//     console.log(`UV lamp is ${this.isUVLampOn ? 'working' :  'not working'}.`);
//   }
// }

// //Создаем экземпляр класса

// const Roomba = new RobotVacuumCleaner();

// ///////////////////////////

// console.log(Roomba.model);
// console.log(Roomba.isFull);

// setTimeout(Roomba.startCleaning, 1000);

// Roomba.isUVLampOn = true;

// setTimeout(Roomba.switchUVLamp, 2000);

// setTimeout(Roomba.goCharge, 3000);

//////////////////////////////////////////////////////

class RobotVacuumCleaner {
  //Св-ва класса
  model = "Romba-1";
  power = 200;
  batterySize = 2100;
  boxSize = 0.5;
  workTime = 45;
  counterOfStarts = 0;
  isFull = false;
  isObstacle = false;
  isUVLampOn = false;

  //Конструктор класса
  constructor (){

  }

  //Методы класса

  startCleaning = () => {
    this.counterOfStarts++;
    console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
  }

  goCharge = () =>  {
    console.log('I am going to charge...');
  }

  switchUVLamp = () =>  {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' :  'not working'}.`);
  }
}

//Создаем экземпляр класса

const Roomba = new RobotVacuumCleaner();

///////////////////////////

console.log(Roomba.model);
console.log(Roomba.isFull);

setTimeout(Roomba.startCleaning, 1000);

Roomba.isUVLampOn = true;

setTimeout(Roomba.switchUVLamp, 2000);

setTimeout(Roomba.goCharge, 3000);
// class Person {
//   name = 'Ivan';
//   age = 30;
//   gender = 'male';

//   constructor() {

//   }

//   introduce = () => {
//     console.log(`Объект Person которого зовут - ${this.name}, возраст - ${this.age}, пол - ${this.gender}`);
//   }

//   changeName = (newName) => {
//     this.name = newName;
//   }
// }

// const Person1 = new Person;

const Person = {
  name: 'Ivan',
  age: 30,
  gender: 'male',
  introduce: function (){
    console.log(`Объект Person которого зовут - ${this.name}, возраст - ${this.age}, пол - ${this.gender}`);
  },
  changeName: function (newName) {
    this.name = newName;
  }
}


Person.introduce();

Person.changeName('Федор');

Person.introduce();

Person.changeName('Кукумбер');

Person.introduce();

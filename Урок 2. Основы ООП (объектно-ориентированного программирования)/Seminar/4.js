class Person {
  name = 'Ivan';
  age = 30;
  gender = 'male';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce = () => {
    console.log(`Объект Person которого зовут - ${this.name}, возраст - ${this.age}, пол - ${this.gender}`);
  }

  changeName = (newName) => {
    this.name = newName;
  }
}

const Person1 = new Person('John', 25);

Person1.introduce();
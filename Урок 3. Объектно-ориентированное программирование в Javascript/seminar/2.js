class Animal {
  speak = () => {
      console.log('Sounds of Animal');
  };

  constructor(name){
      this.name = name;
  };
};

class Dog extends Animal{
  breed = 'Овчарка';
  fetch = () => {
      console.log(`Собака ${this.name} принесла мяч.`);
  };
  speak = () => {
      console.log(`${this.name} издает звук.`);
  };
};
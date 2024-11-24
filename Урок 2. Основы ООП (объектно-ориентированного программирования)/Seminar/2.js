const Animal = {
  name: "L'enka",
  eat: function (){
    console.log(`${this.name} is eating now`);
  }
}

const Dog = {
  name: 'Rex',
  bark: function () {
    console.log(`${this.name} is barking now! Haw-Haw-Haw!`);
  },
  // eat: Animal.eat
}

Dog.eat = Animal.eat;

Dog.eat();
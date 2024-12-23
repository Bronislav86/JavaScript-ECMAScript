// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13.

// Создадим робот пылесосSamba.
const Samba1 = new Samba(101);
// Попробуем обратиться к стандартному методу toString, хоть мыего и не объявляли ни в одном из объектов.
console.log(Samba1.toString()); // [object Object]

// Создадим пустой объект без прототипа.
const Samba2 = Object.create(null);
// Попробуем обратиться к стандартному методу toString и посмотреть на свойство __proto__
console.log(Samba2.toString); // undefined
console.log(Samba2.__proto__); // undefined


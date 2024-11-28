function getPrototypeChain(obj) {
  const prototypesArr = [];

  let currentObj = obj;

  while (currentObj !== null) {
      prototypesArr.push(currentObj);
      currentObj = Object.getPrototypeOf(currentObj);
  }
  return prototypesArr;
};

const obj2 = {};
const prototypeChain = getPrototypeChain(obj2);
console.log(prototypeChain);

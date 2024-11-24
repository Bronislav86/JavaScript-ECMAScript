// Работа с this
const checkThis = function () {
  console.log(this);
}

checkThis(); //Window {0: global...}

const checkThisInObject = {
  testProperty: true,
  checkThis: function(){
    console.log(this);
  }
}

checkThisInObject.checkThis();
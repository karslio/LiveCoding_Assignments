//  module wrappers function

(function (experts,require, module, __filename, __dirname) {
    
})



// const person = {
//   name: "oguzhan",
//   age: 30
// };

// module.exports = person;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting(){
      
      console.log(`my name is ${this.name} and i am ${this.age}`)
  }
}

module.exports = Person;


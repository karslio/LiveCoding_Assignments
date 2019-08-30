// function ageResult(age) {
//     age = prompt('how old are you')
//   if (age < 0) {
//     alert("please higher than zero");
//   } else if (age <= 1) {
//     alert("he or she is an infant.");
//   } else if (age < 13) {
//     alert("he or she is a child");
//   } else if (age < 20) {
//     alert("he or she is a teenager");
//   } else {
//     alert("he or she is a adult");
//   }
// }

// console.log(ageResult(0));

var arr = [];
arr.push('val1','val2','val3','val4','val5')
console.log(arr)
arr.unshift('val6','val7')
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)
arr.shift()
arr.shift()
console.log(arr)

const people = {
  person1: {
    name: "John",
    age: 30
  },
  person2: {
    name: "Mike",
    age: 23
  },
  person3: {
    name: "Nancy",
    age: 40
  }
};

for (let key in people) {
    let obj = people[key];  
    console.log(obj.name);
}

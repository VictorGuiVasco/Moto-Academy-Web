let array = [
  {
    id: 1,
    name: "John",
    age: 23,
  },
  {
    id: 2,
    name: "Samuel",
    age: 21,
  },
  {
    id: 3,
    name: "marvin",
    age: 26,
  },
  {
    id: 4,
    name: "james",
    age: 28,
  },
];

const test = array.map((item) => (item.age === 28 ? item.age : 0));
console.log(test);

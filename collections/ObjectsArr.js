let car = {
    name: "ford",
    color: "black",
    price: "2lacks"
}
for (let keys in car) {
    console.log(keys, car[keys])
}

///////////////////////////////////////////////////////////////////////
const users = [
    { name: "John", age: 25 },
    { name: "Mike", age: 30 },
    { name: "Sam", age: 22 }
];

const result = users.filter(user => user.age > 25)
console.log(result)
//////////////////////////////////////oldest user////////////////////////////////////
const oldestUser = users.reduce()


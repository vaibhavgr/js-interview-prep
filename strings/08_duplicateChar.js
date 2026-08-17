const str = "mummyy";
let obj1 = {}
for (i = 0; i < str.length; i++) {
    let char = str[i]
    if (obj1[char]) {
        obj1[char]++
    }
    else {
        obj1[char] = 1
    }
}
console.log(obj1)
let duplicate = Object.keys(obj1)
for (i = 0; i < duplicate.length; i++) {
    if (obj1[duplicate[i]] > 1) {
       console.log(duplicate[i], obj1[duplicate[i]]);
    }
}
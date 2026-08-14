const str = "hello my name is vaibhav";
const cleanStr = str.toLowerCase().replaceAll(" ", "");
let charobj = {}
for (i = 0; i < cleanStr.length; i++) {
    let char = cleanStr[i];
    if (charobj[char]) {
        charobj[char]++
    } else {
        charobj[char] = 1
    }
} console.log(charobj)

const str = "helloo";
let charobj = {}
for (i = 0; i < str.length; i++) {
    let char = str[i];
    if (charobj[char]) {
        charobj[char]++
    } else {
        charobj[char] = 1
    }
} console.log(charobj)

for (let i = 0; i < str.length; i++) {
    if (charobj[str[i]] === 1) {
        console.log(str[i])
    }
}


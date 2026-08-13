const str = "my name is vaibhav"
let count = 0
for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        count++;
    }
}
console.log(count)

///////////////////////////////second WAY FOR COUNT VOWEL///////////////
const vowelStr = "my name is vaibhav"
let countthree = 0;
for (let i = 0; i < vowelStr.length; i++) {
    switch (vowelStr[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            countthree++;
            break;
    }
}
console.log(countthree);
///////////////////////////////third way using set///////////////
const strin = "my name is vaibhav";
const vowelSet = new Set(["a", "e", "i", "o", "u"]);
let countset = 0;
for (let i = 0; i < strin.length; i++) {
    if (vowelSet.has(strin[i])) {
        countset++;
    }
}
console.log(countset);



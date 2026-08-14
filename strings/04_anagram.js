//Notes
//convert string into array - using split
//convert array into string - using array 
const str3 = "listen"
const str4 = "silent"

const sortedstr1 = str3.split("").sort().join("")
const sortedstr2 = str4.split("").sort().join("")

if (sortedstr1 === sortedstr2) {
    console.log("han bhai anagram hu");
} else {
    log("ni bhai not anagram ");
}
// second way for anagram using {} object 
const str1 = "listen";
const str2 = "helloo";
let obj1 = {};
let obj2 = {};

for (i = 0; i < str1.length; i++) {
    let char = str1[i]
    if (obj1[char]) {
        obj1[char]++
    }
    else {
        obj1[char] = 1;
    }
}

for (i = 0; i < str2.length; i++) {
    if (obj2[str2[i]]) {
        obj2[str2[i]]++
    }
    else {
        obj2[str2[i]] = 1;

    }
}

let isAnagram = true;
for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (obj1[char] !== obj2[char]) {
        isAnagram = false;
        isAnagram = false;
        break;
    }
}
if (isAnagram) {
    console.log("yes anagram");
} else {
    console.log("no anagram");
}
console.log(obj1)
console.log(obj2)


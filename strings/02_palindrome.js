const str = "madam";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
}
if (reverse === str) {
    console.log("yes")
}
else {
    console.log("no")
}

//palindrome second solution 


const string = "madam"

let left = 0
let right = string.length - 1;

let palindrome = true;
while (left < right) {
    if (string[left] != string[right]) {
        palindrome = false
        break;
    }
    left++
    right--
}

console.log(palindrome)

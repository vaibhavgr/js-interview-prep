const palindrome = "madam";
let reverse = "";

for (let i = palindrome.length - 1; i >= 0; i--) {
    reverse = reverse + palindrome[i];
}
if (reverse === palindrome) {
    console.log("yes")
}
else {
    console.log("no")
}

//palindrome second solution 



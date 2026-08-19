const str = "I am learning Javascript";
const words = str.split(" ");
let reverse = "";


for (let i = words.length - 1; i >=0; i--) {
    reverse = reverse + words[i] + " ";
        
}
console.log(reverse)
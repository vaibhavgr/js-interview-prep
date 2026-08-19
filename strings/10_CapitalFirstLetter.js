const str = "hello everyone lets study";
const words = str.split(" ");
let capital = "";


for (i = 0; i < words.length; i++) {
    capital = capital + words[i][0].toUpperCase() + words[i].slice(1) + " ";
    
}
console.log(capital)



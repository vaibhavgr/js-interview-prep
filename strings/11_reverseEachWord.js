const str = "I am learning Javascript";
//const words = str.split(" ");
let reverse = "";


for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i] ;

}
console.log(reverse)
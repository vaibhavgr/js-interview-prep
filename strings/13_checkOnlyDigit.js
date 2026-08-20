const str = "my name is vaibhav";
const convert = str.split("")
const digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
isdigit = false
for (i = 0; i < convert.length; i++) {
    if (digits.has(convert[i])) {
        isdigit = true;
        break
    } 
}

console.log(isdigit)
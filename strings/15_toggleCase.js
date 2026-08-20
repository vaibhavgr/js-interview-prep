const str = "Hello World";
let convertText = ""

for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
        convertText = convertText + str[i].toLowerCase();
    } else {
        convertText = convertText + str[i].toUpperCase();
    }
}

console.log(convertText)
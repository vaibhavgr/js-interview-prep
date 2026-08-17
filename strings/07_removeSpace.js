const str = "I am learning JavaScript";
let empty = ""
for (i = 0; i < str.length; i++) {
    if (str[i] != " ") {
        empty = empty + str[i]
    }
}
console.log(empty)

/////////////////otherway////////////
const str2 = "I am learning JavaScript";

const result = str2.replaceAll(" ", "");

console.log(result);
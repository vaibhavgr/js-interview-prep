const UppLowerStr = "My Name iS VaBhav";
let uppercaseCount = 0
let lowercaseCount = 0
for (i = 0; i < UppLowerStr.length; i++) {
    if (UppLowerStr[i] === " ") {
        continue;
    }
    if (UppLowerStr[i] === UppLowerStr[i].toUpperCase()) {
        uppercaseCount++
    }
    else {
        lowercaseCount++
    }
}
console.log(uppercaseCount)
console.log(lowercaseCount)


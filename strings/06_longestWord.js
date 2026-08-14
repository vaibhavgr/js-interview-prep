const str = "I am learning JavaScript";
const splitStr = str.split(" ")

let longest = ""
for(i=0;i<splitStr.length;i++)
{
 if(splitStr[i]>longest.length){
    longest = splitStr[i]
 }   
}
console.log(splitStr)


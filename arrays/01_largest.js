
const arr = [110, 50, 20, 180, 100];

let largest = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest); 

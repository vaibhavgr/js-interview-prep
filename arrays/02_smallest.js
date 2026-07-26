const arr = [110, 50, 20, 180, 100];

let smallest = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(smallest); 

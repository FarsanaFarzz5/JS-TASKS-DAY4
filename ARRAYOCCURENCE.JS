function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

const myArray = [1, 2, 3, 4, 5, 6, 4, 4, 7, 8, 9, 4];
const elementToCount = 4;
console.log("Number of occurrences of", elementToCount, ":", countOccurrences(myArray, elementToCount));

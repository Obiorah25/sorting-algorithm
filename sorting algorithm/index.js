function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        
        // Shift elements of the sorted segment to the right to make space for current
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage
let arr = [5, 2, 9, 1, 5, 6];
console.log("Original array:", arr);
let sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);

// Output:
// Original array: [5, 2, 9, 1, 5, 6]
// Sorted array: [1, 2, 5, 5, 6, 9]
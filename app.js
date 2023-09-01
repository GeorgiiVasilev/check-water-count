function trap(ground) {
    // Explanation of the solution:

    // In comparing variables, we increase the one that is smaller; if they are equal, we increase either one.
    // The algorithm works until it reaches the center of the list.
    // You need to subtract the current cell value from the minimum height available. If the result is less than 0, then add 0.

    let maxLeft = ground[0];
    let maxRight = ground.at(-1);

    let leftIndex = 0;
    let rightIndex = ground.length - 1;

    let sum = 0;

    while (leftIndex < rightIndex) {
        if (maxLeft <= maxRight) {
            leftIndex++;

            const nextLeftValue = ground[leftIndex];
            const diff = maxLeft - nextLeftValue;

            if (maxLeft < nextLeftValue) {
                maxLeft = nextLeftValue
            }

            if (diff <= 0) continue;

            sum += diff;
        } else {
            rightIndex--;

            const nextRightValue = ground[rightIndex];
            const diff = maxRight - nextRightValue;

            if (maxRight < nextRightValue) {
                maxRight = nextRightValue
            }

            if (diff <= 0) continue;

            sum += diff;
        }
    }

    return sum;
}

const arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
const arr2 = [4, 2, 0, 3, 2, 5]; // 9

console.log(`result 1`, trap(arr1));
console.log(`result 2`, trap(arr2));

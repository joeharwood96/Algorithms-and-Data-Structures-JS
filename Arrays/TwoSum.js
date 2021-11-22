// Input = [1, 3, 2, 5, 9] Target = 11
// Return index of two numbers that add up to the target 
// If non exist return empty array e.g. []

// time = O(n) space = O(n)
function TwoSum(arr, target) {
    const arrMap = {}

    for (let i = 0; i < arr.length; i++) {
        if(target - arr[i] in arrMap) {
            return [i, arrMap[target - arr[i]]];
        } else {
            arrMap[arr[i]] = i
        }
    }

    return []
}

console.log(TwoSum([1, 3, 2, 5, 9], 5))
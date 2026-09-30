/* Given an array nums containing n distinct numbers taken from the range [0, n], return the only number in the range that is missing from the array.

Examples
missingNumber([3, 0, 1]);
// => 2
missingNumber([0, 1]);
// => 2
Example 1
Input: nums = [3,0,1]

Output: 2

Explanation: n = 3 since there are 3 numbers. The range is [0, 3]. 2 is missing.

Example 2
Input: nums = [0,1]

Output: 2

Explanation: n = 2 since there are 2 numbers. The range is [0, 2]. 2 is missing.

Constraints
n === nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All the numbers of nums are unique.

Hints
Hint 1. The sum of integers from 0 to n can be computed using the formula n * (n + 1) / 2.
Hint 2. Compare the expected sum of all numbers from 0 to n with the actual sum of elements in the array. */


function missingNumber(nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}
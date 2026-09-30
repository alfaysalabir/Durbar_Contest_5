/* Given an array of daily rainfall measurements, find all the "peak" days.

A day is considered a peak if its rainfall is strictly higher than both its immediate left (previous day) and right (next day) neighbors.

Because the first and last days do not have both neighbors, they can never be peaks.

Return an array of the 1-based day numbers (i.e., the first day is day 1, the second is day 2, etc.) that are peaks, in chronological order.

Examples
findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]) should return [2, 5] because:

Day 2 (value 5) is strictly greater than Day 1 (2) and Day 3 (3).
Day 5 (value 7) is strictly greater than Day 4 (3) and Day 6 (4).
Day 8 (value 6) only has a left neighbor, so it cannot be a peak.
findRainfallPeaks([1, 2, 3, 2, 1]) should return [3] because Day 3 (value 3) is strictly greater than Day 2 (2) and Day 4 (2).

Example 1
Input: rainfall = [2,5,3,3,7,4,4,6]

Output: [2,5]

Example 2
Input: rainfall = [1,2,3,2,1]

Output: [3]

Constraints
rainfall will be an array of numbers representing daily rainfall.
The length of rainfall will be between 0 and 1000.

Hints
Hint 1. Remember that the array indices in JavaScript are 0-based, but the problem asks for 1-based day numbers. You can convert an index `i` to a day number by adding 1.
Hint 2. Since the first and last elements cannot be peaks, your loop can start at index `1` and end at `rainfall.length - 2`.
Hint 3. Use a strict inequality (`>`) to compare the current day's rainfall with both neighbors. */


function findRainfallPeaks(rainfall) {
    const peaks = [];

    for (let i = 1; i < rainfall.length - 1; i++) {
        const previous = rainfall[i - 1];
        const current = rainfall[i];
        const next = rainfall[i + 1];

        if (current > previous && current > next) {
            peaks.push(i + 1);
        }
    }

    return peaks;
}
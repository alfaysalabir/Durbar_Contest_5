/* Write a function that takes a year, month, and day as numbers and returns the name of the weekday for that date.

Note that the month parameter is 1-indexed (1 for January, 2 for February, ..., 12 for December).

Examples
getDayOfWeek(2024, 5, 11); // "Saturday"
getDayOfWeek(2023, 1, 1);   // "Sunday"
Example 1
Input: year = 2024, month = 5, day = 11

Output: "Saturday"

Explanation: May 11, 2024 was a Saturday.

Example 2
Input: year = 2023, month = 1, day = 1

Output: "Sunday"

Explanation: January 1, 2023 was a Sunday.

Constraints
year will be an integer between 1900 and 2100.
month will be an integer between 1 and 12.
day will be a valid day for the given month and year.

Hints
Hint 1. JavaScript's Date constructor takes a 0-indexed month (0 for January, 11 for December).
Hint 2. You can use the `.getDay()` method of a Date object, which returns 0 for Sunday, 1 for Monday, etc.
Hint 3. Store the names of the weekdays in an array and use the result of `.getDay()` as the index. */


function getDayOfWeek(year, month, day) {
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const date = new Date(year, month - 1, day);

    const dayNumber = date.getDay();

    return weekdays[dayNumber];
}
/* Write a function that takes an object and returns a new object where the keys and values are swapped.

If multiple keys in the original object share the same value, the key that appears later in the object's property order should overwrite any previous ones ("later key wins").

Note: In JavaScript, object keys are always strings. Therefore, the values in the returned object (which were the keys of the input object) should be strings.

Examples
swapKeysAndValues({ a: "x", b: "y" });
// => { x: "a", y: "b" }

swapKeysAndValues({ a: "x", b: "x" });
// => { x: "b" }
Example 1
Input: obj = {"a":"x","b":"y"}

Output: {"x":"a","y":"b"}

Explanation: Simple swap with unique values.

Example 2
Input: obj = {"a":"x","b":"x"}

Output: {"x":"b"}

Explanation: Both keys 'a' and 'b' map to 'x'. Since 'b' is processed later, it overwrites 'a'.

Constraints
The input object keys will be strings representing alphanumeric characters.
The input object values will be strings or numbers.
The input object will have between 0 and 1000 properties.

Hints
Hint 1. Use `Object.entries(obj)` to iterate through the key-value pairs of the object.
Hint 2. Remember that the keys of the returned object will be the values of the input object.
Hint 3. Because standard iteration of object properties follows insertion order, simply assigning `result[value] = key` in a loop will naturally handle the 'later key wins' rule. */


function swapKeysAndValues(obj) {
    const result = {};
    const entries = Object.entries(obj);

    for (let i = 0; i < entries.length; i++) {
        const key = entries[i][0];
        const value = entries[i][1];

        result[value] = key;
    }

    return result;
}
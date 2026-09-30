/* When building user interfaces, we often have to deal with incomplete or nested data.

Write a function generateProfileCard that takes a user object and returns a formatted profile string in the following format:
"{name} | {city} | followers: {followers}"

Fallback Rules
If certain fields are missing (null or undefined), use these fallbacks:

name: defaults to "Anonymous"
address.city: defaults to "Unknown"
social.followers: defaults to 0
Important: Empty strings "" and the number 0 are valid values and must not be replaced by fallbacks. Use optional chaining (?.) and the nullish coalescing operator (??) to handle this safely.

Examples
generateProfileCard({
  name: "Rafi",
  address: { city: "Dhaka" },
  social: { followers: 0 }
});
// Returns: "Rafi | Dhaka | followers: 0"

generateProfileCard({
  name: "Alice",
  social: { followers: 120 }
});
// Returns: "Alice | Unknown | followers: 120"
Example 1
Input: user = {"address":{"city":"Dhaka"},"name":"Rafi","social":{"followers":0}}

Output: "Rafi | Dhaka | followers: 0"

Example 2
Input: user = {"name":"Alice","social":{"followers":120}}

Output: "Alice | Unknown | followers: 120"

Example 3
Input: user = {}

Output: "Anonymous | Unknown | followers: 0"

Example 4
Input: user = {"address":{"city":""},"name":"","social":{"followers":999}}

Output: " |  | followers: 999"

Example 5
Input: user = {"address":{"city":null},"name":null,"social":{"followers":null}}

Output: "Anonymous | Unknown | followers: 0"

Example 6
Input: user = {"address":{},"name":"Bob","social":{}}

Output: "Bob | Unknown | followers: 0"

Example 7
Input: user = {"address":{"city":"London"},"name":"Charlie"}

Output: "Charlie | London | followers: 0"

Constraints
The input is always an object, though its properties may be missing, null, or undefined.

Hints
Hint 1. Use optional chaining `user?.address?.city` to safely access nested properties without throwing errors.
Hint 2. Use the nullish coalescing operator `??` instead of `||` so that `0` and empty strings `""` are preserved. */


function generateProfileCard(user) {
    const name = user?.name ?? "Anonymous";
    const city = user?.address?.city ?? "Unknown";
    const followers = user?.social?.followers ?? 0;

    return `${name} | ${city} | followers: ${followers}`;
}
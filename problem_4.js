/* When building user interfaces, you often need to paginate a list of items. Given the total number of items, the page size, and the current active page, calculate the metadata needed to render the pagination controls.

Write a function getPageMetadata that accepts:

totalItems (non-negative integer): The total number of items in the collection.
pageSize (positive integer): The maximum number of items displayed per page.
currentPage (positive integer): The current 1-based page number.
It should return an object containing:

totalPages: The total number of pages (0 if there are no items).
startItem: The 1-based index of the first item on the current page (0 if there are no items).
endItem: The 1-based index of the last item on the current page (0 if there are no items).
hasPrev: A boolean indicating if there is a previous page.
hasNext: A boolean indicating if there is a next page.
Note: You can assume currentPage will always be a valid page number from 1 to totalPages (unless totalItems is 0, in which case currentPage will be 1).

Examples
Example 1:

Input: totalItems = 95, pageSize = 10, currentPage = 10
Output: { totalPages: 10, startItem: 91, endItem: 95, hasPrev: true, hasNext: false }
Explanation: Page 10 is the last page, starting at item 91 and ending at the last item (95).
Example 2:

Input: totalItems = 24, pageSize = 5, currentPage = 3
Output: { totalPages: 5, startItem: 11, endItem: 15, hasPrev: true, hasNext: true }
Explanation: Page 3 contains items 11 through 15. There are pages before (1, 2) and after (4, 5).
Example 1
Input: totalItems = 95, pageSize = 10, currentPage = 10

Output: {"endItem":95,"hasNext":false,"hasPrev":true,"startItem":91,"totalPages":10}

Explanation: Page 10 of 10. Items 91 to 95.

Example 2
Input: totalItems = 24, pageSize = 5, currentPage = 3

Output: {"endItem":15,"hasNext":true,"hasPrev":true,"startItem":11,"totalPages":5}

Explanation: Page 3 of 5. Items 11 to 15.

Constraints
0 <= totalItems <= 1,000,000
1 <= pageSize <= 10,000
1 <= currentPage <= totalPages (if totalItems > 0)

Hints
Hint 1. Use Math.ceil to calculate totalPages.
Hint 2. The start item index can be calculated using the page size and current page: (currentPage - 1) * pageSize + 1.
Hint 3. The end item index is the minimum of (currentPage * pageSize) and totalItems.
Hint 4. Remember to handle the edge case where totalItems is 0. */


function getPageMetadata(totalItems, pageSize, currentPage) {
    if (totalItems === 0) {
        return {
            totalPages: 0,
            startItem: 0,
            endItem: 0,
            hasPrev: false,
            hasNext: false
        };
    }

    const totalPages = Math.ceil(totalItems / pageSize);

    const startItem = (currentPage - 1) * pageSize + 1;

    const endItem = Math.min(currentPage * pageSize, totalItems);

    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return {
        totalPages: totalPages,
        startItem: startItem,
        endItem: endItem,
        hasPrev: hasPrev,
        hasNext: hasNext
    };
}
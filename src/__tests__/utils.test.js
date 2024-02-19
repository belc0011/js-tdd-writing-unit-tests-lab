import { isPalindrome } from "../utils.js";

describe("isPalindrome", () => {
    it("should return 'true' if function is palindrome, otherwise return false", () => {
        const palindrome = "racecar";

        const isPalindromeTest = isPalindrome(palindrome);

        expect(isPalindromeTest).toBe(true)
    })
})

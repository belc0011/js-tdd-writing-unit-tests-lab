import { isPalindrome } from "../utils.js";

describe("isPalindrome", () => {
    it("should return 'true' if word is palindrome, otherwise return false", () => {
        const palindrome = "racecar";

        const isPalindromeTest = isPalindrome(palindrome);

        expect(isPalindromeTest).toBe(true)
    })
    it("should return 'false' if word is empty string", () => {
        const emptyString = "";

        const isPalindromeTestEmptyString = isPalindrome(emptyString);

        expect(isPalindromeTestEmptyString).toBe(false);
    })
})

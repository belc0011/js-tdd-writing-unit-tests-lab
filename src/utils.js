export function isPalindrome(word) {
    const wordArray = word.split('');
    let palindromeCheck = false;
    for (let i=0; i<wordArray.length; i++) {
        if (word === "") {
            palindromeCheck = false
        }
        else if (wordArray[i].toLowerCase() === wordArray[wordArray.length - i - 1].toLowerCase()) {
            palindromeCheck = true;
            console.log("i: " + i + ", " + wordArray.length - i)
        }
        else palindromeCheck = false;
    }
    return palindromeCheck;
}

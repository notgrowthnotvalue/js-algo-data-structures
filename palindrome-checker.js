function palindrome(str) {
    // remove non-word characters
    const regex = /[^A-Za-z0-9]/g
    str = str.replace(regex, "").toLowerCase()

    // check if the first character equals the last character:
    // if yes, check the next pair of characters
    // if no, return false
    for (let i = str.length - 1, j = 0; i >= 0; i-- && j++) {
        if (str[i] === str[j]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

palindrome("A man, a plan, a canal. Panama");




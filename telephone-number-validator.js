function telephoneCheck(str) {
    const re = /^\d*-\d+-\d{4}$|^\d{10}$|^\d{1}\s\d{3}\s\d+\s\d+$|^1{1}\(\d+\)\d+-\d+$|^1{1}\s\(\d+\)\s\d+-\d+$|^\d{1}\s\d{3}-\d{3}-\d{4}|^\(\d+\)\d+-\d+$/

    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

telephoneCheck("1 (555) 555-5555")

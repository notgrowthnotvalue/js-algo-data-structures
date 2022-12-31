function rot13(str) {
    // setting main variable
    let decrypted = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const key = 13;

    // loop through the encrypted string 
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i]
        let index = alphabet.indexOf(currChar)
        console.log("Character:", currChar, "Index:", index)
        let modifiedAlphabet = alphabet.substring(key) + alphabet.substring(0, key);
        console.log("\nModified:", modifiedAlphabet)

        if (index !== -1) {
            let decryptedChar = alphabet.charAt(index - key)
            let modifiedChar = modifiedAlphabet.charAt(index)
            console.log("Decrypted:", decryptedChar, "Modified:", modifiedChar)
            decrypted = decrypted.concat(modifiedChar)
        } else if (index === -1 && currChar == "." || "?" || "!") {
            decrypted = decrypted.concat(currChar)
        } else {
            decrypted = decrypted.concat(" ")
        }

        console.log(decrypted)
    }

    return decrypted;
}

rot13("SERR PBQR PNZC!")
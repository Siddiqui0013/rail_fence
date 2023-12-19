plainText = plainText.value
key = Number.parseInt(key.value)
result = cipherText.value

enBtn.addEventListener("click", ()=>{
    console.log(key)
    console.log(plainText)
})


function railFenceEncrypt(plaintext, rails) {
    let encryptedText = '';
    for (let i = 0; i < rails; i++) {
        for (let j = i; j < plaintext.length; j += 2 * (rails - 1)) {
            encryptedText += plaintext.charAt(j);
            if (i > 0 && i < rails - 1) {
                let secondIndex = j + 2 * (rails - i - 1);
                if (secondIndex < plaintext.length) {
                    encryptedText += plaintext.charAt(secondIndex);
                }
            }
        }
    }
    return encryptedText;
}

function railFenceDecrypt(ciphertext, rails) {
    let decryptedText = '';
    let cycleLength = 2 * (rails - 1);
    for (let i = 0; i < rails; i++) {
        for (let j = i; j < ciphertext.length; j += cycleLength) {
            decryptedText += ciphertext.charAt(j);
            if (i > 0 && i < rails - 1) {
                let secondIndex = j + cycleLength - 2 * i;
                if (secondIndex < ciphertext.length) {
                    decryptedText += ciphertext.charAt(secondIndex);
                }
            }
        }
    }
    return decryptedText;
}

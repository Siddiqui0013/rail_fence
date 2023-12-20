// Function to encrypt plaintext using Rail Fence Cipher
function railFenceEncrypt(text, key) {
    let rail = new Array(key).fill().map(() => new Array(text.length).fill('\n'));
    
    let dir_down = false;
    let row = 0, col = 0;
    
    for (let i = 0; i < text.length; i++) {
        if (row === 0 || row === key - 1) dir_down = !dir_down;
        rail[row][col++] = text[i];
    
        dir_down ? row++ : row--;
    }
    
    let result = '';
    for (let i = 0; i < key; i++) {
        for (let j = 0; j < text.length; j++) {
            if (rail[i][j] !== '\n') result += rail[i][j];
        }
    }
    
    return result;
}

// Function to decrypt ciphertext using Rail Fence Cipher
function railFenceDecrypt(cipher, key) {
    let rail = new Array(key).fill().map(() => new Array(cipher.length).fill('\n'));
    
    let dir_down = false;
    let row = 0, col = 0;
    
    for (let i = 0; i < cipher.length; i++) {
        if (row === 0) dir_down = true;
        if (row === key - 1) dir_down = false;
    
        rail[row][col++] = '*';
    
        dir_down ? row++ : row--;
    }
    
    let index = 0;
    for (let i = 0; i < key; i++) {
        for (let j = 0; j < cipher.length; j++) {
            if (rail[i][j] === '*' && index < cipher.length) {
                rail[i][j] = cipher[index++];
            }
        }
    }
    
    let result = '';
    row = 0, col = 0;
    for (let i = 0; i < cipher.length; i++) {
        if (row === 0) dir_down = true;
        if (row === key - 1) dir_down = false;
    
        if (rail[row][col] !== '*') result += rail[row][col++];
    
        dir_down ? row++ : row--;
    }
    
    return result;
}

// Get HTML elements
const plainTextElement = document.getElementById("plainText");
const keyElement = document.getElementById("key");
const resultElement = document.getElementById("result");
const encryptButton = document.getElementById("enBtn");
const decryptButton = document.getElementById("dcBtn");

// Event listener for encryption button
encryptButton.addEventListener("click", function() {
    const plaintext = plainTextElement.value;
    const key = parseInt(keyElement.value); // Parse key as an integer

    if (!isNaN(key)) {
        const encryptedText = railFenceEncrypt(plaintext, key);
        resultElement.value = encryptedText;
    } else {
        alert("Please enter a valid key (number of rails).");
    }
});

// Event listener for decryption button
decryptButton.addEventListener("click", function() {
    const ciphertext = plainTextElement.value;
    const key = parseInt(keyElement.value); // Parse key as an integer

    if (!isNaN(key)) {
        const decryptedText = railFenceDecrypt(ciphertext, key);
        resultElement.value = decryptedText;
    } else {
        alert("Please enter a valid key (number of rails).");
    }
});





// function railFenceEncrypt(plaintext, rails) {
//     let encryptedText = '';
//     for (let i = 0; i < rails; i++) {
//         for (let j = i; j < plaintext.length; j += 2 * (rails - 1)) {
//             encryptedText += plaintext.charAt(j);
//             if (i > 0 && i < rails - 1) {
//                 let secondIndex = j + 2 * (rails - i - 1);
//                 if (secondIndex < plaintext.length) {
//                     encryptedText += plaintext.charAt(secondIndex);
//                 }
//             }
//         }
//     }
//     return encryptedText;
// }


// function railFenceDecrypt(ciphertext, rails) {
//     let decryptedText = '';
//     let cycleLength = 2 * (rails - 1);
//     for (let i = 0; i < rails; i++) {
//         for (let j = i; j < ciphertext.length; j += cycleLength) {
//             decryptedText += ciphertext.charAt(j);
//             if (i > 0 && i < rails - 1) {
//                 let secondIndex = j + cycleLength - 2 * i;
//                 if (secondIndex < ciphertext.length) {
//                     decryptedText += ciphertext.charAt(secondIndex);
//                 }
//             }
//         }
//     }
//     return decryptedText;
// }

// decryptButton.addEventListener("click", function() {
//     // console.log("asdsfda")
//     const ciphertext = plainTextElement.value;
//     const key = keyElement.value;
//     const rails = parseInt(key); 

//     if (!isNaN(rails)) {
//         const decryptedText = railFenceDecrypt(ciphertext, rails);
//         console.log(decryptedText)
//         // plainTextElement.value = decryptedText;
//     } else {
//         alert("Please enter a valid key (number of rails).");
//     }
// });
// encryptButton.addEventListener("click", function() {
//     const plaintext = plainTextElement.value;
//     const key = keyElement.value;
//     const rails = parseInt(key); 

//     if (!isNaN(rails)) {
//         const encryptedText = railFenceEncrypt(plaintext, rails);
//         console.log(encryptedText)
//         // cipherTextElement.value = encryptedText;
//     } else {
//         alert("Please enter a valid key (number of rails).");
//     }
// });












// let key = document.getElementById('key')
// let nKey = Number.parseInt(key.value)
// let plainText = document.getElementById('plainText')
// let result = document.getElementById('result')

// plainText = plainText.value
// // key = Number.parseInt(key.value)
// result = cipherText.value

// enBtn.addEventListener("click", ()=>{
//     console.log(nKey)
//     // console.log(plainText)
// })


// function railFenceEncrypt(plaintext, rails) {
//     let encryptedText = '';
//     for (let i = 0; i < rails; i++) {
//         for (let j = i; j < plaintext.length; j += 2 * (rails - 1)) {
//             encryptedText += plaintext.charAt(j);
//             if (i > 0 && i < rails - 1) {
//                 let secondIndex = j + 2 * (rails - i - 1);
//                 if (secondIndex < plaintext.length) {
//                     encryptedText += plaintext.charAt(secondIndex);
//                 }
//             }
//         }
//     }
//     return encryptedText;
// }

// function railFenceDecrypt(ciphertext, rails) {
//     let decryptedText = '';
//     let cycleLength = 2 * (rails - 1);
//     for (let i = 0; i < rails; i++) {
//         for (let j = i; j < ciphertext.length; j += cycleLength) {
//             decryptedText += ciphertext.charAt(j);
//             if (i > 0 && i < rails - 1) {
//                 let secondIndex = j + cycleLength - 2 * i;
//                 if (secondIndex < ciphertext.length) {
//                     decryptedText += ciphertext.charAt(secondIndex);
//                 }
//             }
//         }
//     }
//     return decryptedText;
// }

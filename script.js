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
    let railIndexes = [];
    let index = 0;

    for (let i = 0; i < rails; i++) {
        let interval1 = 2 * (rails - 1 - i);
        let interval2 = cycleLength - interval1;

        let j = 0;
        while (j < ciphertext.length) {
            if (i === 0 || i === rails - 1) {
                railIndexes.push(j);
                j += cycleLength;
            } else {
                railIndexes.push(j);
                j += (index % 2 === 0) ? interval1 : interval2;
                index++;
            }
        }
        index = 0;
    }

    for (let i = 0; i < railIndexes.length; i++) {
        decryptedText += ciphertext.charAt(railIndexes.indexOf(i));
    }

    return decryptedText;
}























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

const plainTextElement = document.getElementById("plainText");
const keyElement = document.getElementById("key");
const cipherTextElement = document.getElementById("cipherText");
const encryptButton = document.getElementById("enBtn");
const decryptButton = document.getElementById("dcBtn");

encryptButton.addEventListener("click", function() {
    const plaintext = plainTextElement.value;
    const key = keyElement.value;
    const rails = parseInt(key); 

    if (!isNaN(rails)) {
        const encryptedText = railFenceEncrypt(plaintext, rails);
        cipherTextElement.value = encryptedText;
    } else {
        alert("Please enter a valid key (number of rails).");
    }
});


decryptButton.addEventListener("click", function() {
    console.log("asdsfda")
    const ciphertext = cipherTextElement.value;
    const key = keyElement.value;
    const rails = parseInt(key); 

    if (!isNaN(rails)) {
        const decryptedText = railFenceDecrypt(ciphertext, rails);
        plainTextElement.value = decryptedText;
    } else {
        alert("Please enter a valid key (number of rails).");
    }
});





















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

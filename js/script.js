const charactersString = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {
    const stringArrayTemp = characters.split('');
    let generateKeyArray = [];

    for (let count = 0; count < length; count++) {
        generateKeyArray.push(stringArrayTemp[Math.floor(Math.random() * stringArrayTemp.length)]);
    }
    
    let generatedKeyString = generateKeyArray.join('');
    return generatedKeyString;
}

console.log(generateKey(25, charactersString));
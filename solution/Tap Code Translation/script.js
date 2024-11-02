function tapCode(text) {
    if (text.includes('.')) {
        return encryptBack(text);
    }
    return encrypt(text)
}

function table(){
    return {
        1: ['a','b','c','d','e'],
        2: ['f','g','h','i','j'],
        3: ['l','m','n','o','p'],
        4: ['q','r','s','t','u'],
        5: ['v','w','x','y','z']
    }
}

function encrypt(text){
    text = text.replace(/k/g, "c");
    let resultEncrypt = '';
    const tableObj = table();
    for(let i = 0; i < text.length; i++){
        for(let el in tableObj){
            if (tableObj[el].includes(text[i])) {
                resultEncrypt += `${'.'.repeat(el)} ${'.'.repeat(tableObj[el].indexOf(text[i]) + 1)} `
            }
        }
    }
    return resultEncrypt.trim();
}

function encryptBack(text){
    let resultText = '';
    let splitedText = text.split(" ");
    const tableObj = table();
    for(let i = 0; i < splitedText.length; i = i + 2){
        resultText += tableObj[splitedText[i].length][splitedText[i + 1].length - 1];   
    }
    return resultText
}

const res = tapCode('... . ... .... ..... .... . . ... . .... .... ..... ....');
console.log(res);


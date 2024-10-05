function join(arr) {
    let resultArr = [];
    let connectedWords = arr[0];
    let check = '';
    let arr2 = []
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            check += arr[i][j]
            if (connectedWords.endsWith(check)) {
                connectedWords += arr[i].replace(check,'');
                arr2.push(check.length)     
                check = ''
                break;
            }
        }
    }
    console.log(arr2);
    console.log('happythoneyelplanky' === connectedWords);
    
    let minimum = Math.floor(arr2.reduce((acc,el) => acc+= el) / arr2.length) 
    resultArr.push(connectedWords,minimum);
    return  resultArr    
}
const res = join(["happy", "python", "honey", "yelp", "plank", "lanky"])
console.log(res);

// join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]


















// if (arr[i + 1]) {
//     for(let j = 0; j < arr[i + 1].length; j++){
//     check += arr[i + 1][j];
//     if (arr[i].endsWith(check)) {
//         console.log(arr[i + 1]);
//         connectedWords += arr[i] + arr[i+1].replace(check,'');
//         count++
//         check = ''
//         break;
//     }
//   }
// }
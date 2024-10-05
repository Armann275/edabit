function minPalindromeSteps(str) {
    let arr = str.split("");
    if(checkPalindrume(str)){
        return 0
    };
    let count = 1;
    let dublstr = str;
    for(let i = 0; i < arr.length; i++){
        dublstr += arr.slice(0,count).reverse().join('');
        if (checkPalindrume(dublstr)) {
            return arr.slice(0,count).reverse().join('').length
        }
        count++
        dublstr = str;
    }
}
const res = minPalindromeSteps("radar");

function checkPalindrume(str){
    if (str.split('').reverse().join('') === str) { 
        return true
    }
}


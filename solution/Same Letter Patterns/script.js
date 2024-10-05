function sameLetterPattern(str1, str2) {
   let strOne = foo(str1);
   let strTwo = foo(str2);
   return strOne === strTwo
}

function foo(str){
    let obj = {}
    let arr = [];
    let count = 1;
    let resultStr = "";
    for(let i = 0; i < str.length; i++){
        if (!arr.includes(str[i])) {
            arr.push(str[i]);
            obj[str[i]] = count;
            resultStr += count
            count++
        }else{
            resultStr += obj[str[i]];
            count++
        }
    }
    return resultStr
}

const res = sameLetterPattern('AAABBB', 'CCCDDD');
console.log(res);

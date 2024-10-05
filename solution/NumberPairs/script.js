function numberPairs(str) {
    let obj = {}
    let dublicateStr = str.split(" ");
    
    for(let j = 1; j < dublicateStr.length;j++){
        if (!obj[dublicateStr[j]]) {
            obj[dublicateStr[j]] = 1
        }else{
            obj[dublicateStr[j]]++
        }
    }
        
        let x =  Object.values(obj).filter((el) => el > 1)
        
        let sum = 0; 
        for (let i = 0; i < x.length; i++) {
         if (x[i]%2 == 0) {
             sum += x[i]/2
         }else{
             sum+= Math.floor(x[i]/2)
         }
        }
        return sum;
}

let res = numberPairs("16 2 3 5 11 1 11 5 7 9 13 17 3 8 7 2 1"); 
console.log(res);

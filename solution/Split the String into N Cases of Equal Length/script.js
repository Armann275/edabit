function splitNCases(str, cases) {
    let divisionDiff = str.length / cases;
    let count = 0;
    let resultArr = [];
	if (str.length % cases === 0) {
        for(let i = divisionDiff; i <= str.length; i = i + divisionDiff){
            let dublArr = [];
           for(let j = 0; j < i; j++){
            dublArr.push(str[j]);
           }
           resultArr.push(dublArr.slice(count,i).join(""));
           count += divisionDiff;
        }
        return resultArr;
    }else{
        return ["Error"];
    }
}

const res = splitNCases("Unimaginatively", 3);
// console.log(res);





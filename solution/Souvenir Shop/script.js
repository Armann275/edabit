function maxItems(prices, budget) {
    let quantity = 0;
    let newArr = [];
    let newBudget = '';
	for(let el of prices){
        let values = '';
        for(let i = 0; i < el.length; i++){
            if (el[i] % el[i] == 0 || el[i] == '0') {
                values+=el[i];
            }
        }
        newArr.push(parseFloat(values));
        values = '';
    }

    for (let ell of budget) {
        if (ell % ell == 0 || ell == '0') {
            newBudget += ell
        }
    }

    newArr.sort((a,b) => a-b);
    newArr.forEach((el) => {
        if (newBudget >= el) {
            newBudget = newBudget - el
            quantity++
        }
    });
    
    if (quantity > 0) {
        return quantity;
    }else{
        return "Not enough funds!";
    }
}
const res = maxItems(["$78", "$11", "$37", "$95", "$60", "$11", "$53", "$58", "$97"], "$231");
console.log(res);
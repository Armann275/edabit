// Splitting Objects Inside an Array
function splitBunches(bunches) {
    let result = [];
    for(let el of bunches){
        if (el.quantity == 1) {
            result.push({name:el.name,quantity:1});
        }else{
            for(let j = 1; j <= el.quantity;j++){
                result.push({name:el.name,quantity:1});
            }
        }
    }
    return result;
}
let callFunk = splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
])
// console.log(callFunk);



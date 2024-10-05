// function validName(name) {
//     const result = determineTerm(name)
//     return result
// }


// function determineTerm(name){
//     let obj = {}
//     let splitedArr = name.split(" ");
//     for(let i = 0; i < splitedArr.length; i++){
//         if (splitedArr[i].length === 2 && splitedArr[i].includes('.') && splitedArr[i][0] === splitedArr[i][0].toUpperCase()) {
//             obj[i + 1] = 'initial' 
//         }else if(splitedArr[i].length >= 2 && !splitedArr[i].includes('.') && splitedArr[i][0] === splitedArr[i][0].toUpperCase()){
//             obj[i+1] = 'word'
//         }else{
//             return false
//         }
//     }
//     return determineResult(obj)
// } 

// function determineResult(obj){
//     if (!obj['2']) {
//         return false
//     }
//     if (obj['2'] && !obj['3']) {
//         if (obj['2'] === 'initial') {
//             return false
//         }
//     }else if (obj['3']) {
//         if (obj['1'] === 'initial' && obj['2'] === 'word') {
//             return false
//         }
//         if (obj['3'] === 'initial') {
//             return false
//         }
//     }
//     return true
// }
// const res = validName("H. G. Wells")
// console.log(res);
let obj = {h:8}

// console.log(obj.prototype.h = 8);
function f(t){
    this.t = t;
}
const r = new f(7);
const rs = Object.create(r)
console.log(rs.t);


// validName("H. Wells") ➞ true

// validName("H. G. Wells") ➞ true

// validName("Herbert G. Wells") ➞ true

// validName("Herbert") ➞ false
// // Must be 2 or 3 words

// validName("h. Wells") ➞ false
// // Incorrect capitalization

// validName("H Wells") ➞ false
// // Missing dot after initial

// validName("H. George Wells") ➞ false
// // Cannot have: initial first name + word middle name

// validName("H. George W.") ➞ false
// // Last name cannot be initial

// validName("Herb. George Wells") ➞ false
// // Words cannot end with a dot (only initials can)
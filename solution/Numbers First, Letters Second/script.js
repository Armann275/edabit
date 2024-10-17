function numThenChar(arr) {  
      
    let sortedArr = sortIntoOneArray(arr);  
    

    for(let i = 0; i < arr.length; i++){
        arr[i] = sortedArr.slice(0,arr[i].length)
        sortedArr = sortedArr.slice(arr[i].length,sortedArr.length);
    }
    return arr
    
}  


function sortIntoOneArray(arr){  
    let numberArr = [];  
    let lowerString = []; 
    let upperString = []; 
    for(let i = 0; i < arr.length; i++){  
       for(let j = 0; j < arr[i].length; j++){ 
            if (typeof arr[i][j] === "string" && arr[i][j].toUpperCase() === arr[i][j]) { 
                upperString.push(arr[i][j]) 
            }else if (typeof arr[i][j] === "string" && arr[i][j].toLowerCase() === arr[i][j] ) { 
                lowerString.push(arr[i][j]) 
            }else { 
                numberArr.push(arr[i][j]) 
            } 
       } 
    
    } 
    
    
    return [...numberArr.sort((a,b) => a - b), ...upperString.sort(),...lowerString.sort()]; 
}  
 
const res = numThenChar([
    [10, 2],
    ["a",3],
    [2.2, "d","h",6,"s",14,1],
    ["f", "e"],
    ["p","y","z","V"],
    [5]
]);
console.log(res);

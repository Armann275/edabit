function knightsJump(square) {
    let alphabet = ['A','B','C','D','E','F','G','H'];
    const indexOfsquare = alphabet.indexOf(square[0]);
    let squares = [];
	const arr = [
        {A:[1,2,3,4,5,6,7,8]},
        {B:[1,2,3,4,5,6,7,8]},
        {C:[1,2,3,4,5,6,7,8]},
        {D:[1,2,3,4,5,6,7,8]},
        {E:[1,2,3,4,5,6,7,8]},
        {F:[1,2,3,4,5,6,7,8]},
        {G:[1,2,3,4,5,6,7,8]},
        {H:[1,2,3,4,5,6,7,8]}   
    ];


    for(let i = 0; i < arr.length; i++){
        if (arr[i][square[0]]) {
            if (arr[i - 2]) {
                if (arr[i - 2][alphabet[indexOfsquare - 2]][square[1]]) {
                    squares.push(`${alphabet[indexOfsquare - 2]}${arr[i - 2][alphabet[indexOfsquare - 2]][square[1]]}`);
                }
                if (arr[i - 2][alphabet[indexOfsquare - 2]][square[1] - 2]) {
                    squares.push(`${alphabet[indexOfsquare - 2]}${arr[i - 2][alphabet[indexOfsquare - 2]][square[1] - 2]}`);  
                }
            }
        
            if (arr[i - 1]) {
                if (arr[i - 1][alphabet[indexOfsquare - 1]][square[1] - 3]) {
                squares.push(`${alphabet[indexOfsquare - 1]}${arr[i - 1][alphabet[indexOfsquare - 1]][square[1] - 3]}`);
                }   
                if (arr[i - 1][alphabet[indexOfsquare - 1]][+square[1] + 1]) {
                    squares.push(`${alphabet[indexOfsquare - 1]}${arr[i - 1][alphabet[indexOfsquare - 1]][+square[1] + 1]}`)
                }
            }
            
            if (arr[i + 1]) {
                if (arr[i + 1][alphabet[indexOfsquare + 1]][square[1] - 3]) {
                squares.push(`${alphabet[indexOfsquare + 1]}${arr[i + 1][alphabet[indexOfsquare + 1]][square[1] - 3]}`);
                 }
                if (arr[i + 1][alphabet[indexOfsquare + 1]][+square[1] + 1]) {
                    squares.push(`${alphabet[indexOfsquare + 1]}${arr[i + 1][alphabet[indexOfsquare + 1]][+square[1] + 1]}`)
                }
            }
            
            if (arr[i + 2]) {
                if (arr[i + 2][alphabet[indexOfsquare + 2]][square[1]]) {
                squares.push(`${alphabet[indexOfsquare + 2]}${arr[i + 2][alphabet[indexOfsquare + 2]][square[1]]}`);
                }
                if (arr[i + 2][alphabet[indexOfsquare + 2]][square[1] - 2]) {
                    squares.push(`${alphabet[indexOfsquare + 2]}${arr[i + 2][alphabet[indexOfsquare + 2]][square[1] - 2]}`);     
                }
            }
            
        }
    }
    return SortArr(squares);
}

function SortArr(arr){
    const sorted = arr.sort((a,b) => +a[1] - (+b[1]) || a[0] - b[0]);
    return sorted.join(',')
}

console.log(knightsJump("F4"));

function getNotesDistribution(students) {
	let result = getQuantityOfNotesEl(students);
    return result;
}
function getQuantityOfNotesEl(std){
    let sortedObj = {}
    for(let el of std){
        for(let elem of el.notes){
            if (elem > 0 && elem < 6 && !sortedObj[elem]) {
                sortedObj[elem] = 1;
            }else if (elem > 0 && elem < 6 && sortedObj[elem]) {
                sortedObj[elem]++
            }
        }
    }
    return sortedObj
}

getNotesDistribution([
    {
      "name": "Steve",
      "notes": [5, 5, 3, -1, 6]
    },
    {
      "name": "John",
      "notes": [3, 2, 5, 0, -3]
    }
  ] 
)
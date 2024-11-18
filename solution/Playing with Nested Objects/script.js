function getObject(args) {
    let resultObj = {};
    resultObj["0"] = args[0]
    delete args["0"];
    let checkBool = true
    let counter = 1;
    for(let el in args){
        for(let elObj in resultObj){
            if (resultObj[elObj].marks === args[el].marks && args[el].age > resultObj[elObj].age) {
                resultObj[elObj] = args[el];
            }else if (resultObj[elObj].marks === args[el].marks) {
                el++
                checkBool = false
            }
        }
        if (checkBool) {
            resultObj[counter] = args[el];
            counter++;
        }
        checkBool = true
    }
    return resultObj
}


const res = getObject({
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
});

console.log(res);

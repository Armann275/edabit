function willFit(holds, cargo) {
	let holdsArea = {
        S:50,
        M:100,
        L:200
    }
    let holdsAmount = holds.reduce((acc,x) => acc += holdsArea[x],0);
    let cargoAmount = cargo.reduce((ac,e) => ac += e);
    return holdsAmount > cargoAmount;
}
const res = willFit(["M", "L", "L", "M"], [56, 62, 84, 90]);
console.log(res);

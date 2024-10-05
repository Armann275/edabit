function plusSign(str) {
    const regex = /[a-zA-Z]/;
    let check = true;
	for(let i = 0; i < str.length; i++){
        if(regex.test(str[i])){
            if (str[i - 1] != '+' || str[i + 1] != "+") {
                return false;
            }
        }
    }
    return check;
}
console.log(plusSign("+f+d+c+#+f+"));






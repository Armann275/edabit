function sumDigProd(...arr) {
    let result = 0;
	let res = arr.reduce((acc,x) => acc+=x);
    if (res.toString().length > 1) {
        function f(arg){
            let s = 1;
            for(let i = 0; i < arg.length; i++){
                s *= parseFloat(arg[i]);
            }
            result = s
            if (s.toString().length > 1) {
                f(s.toString());    
            }
        }
        f(res.toString());
    }else{
        result = res
    }
    return result;
}
 const x = sumDigProd(9);
 console.log(x);



function nearestChapter(chapt, page) {
    let min;
    let min2 = '';
	for(let i in chapt){
       if (!min || min > Math.abs(page - chapt[i])) {
        min = Math.abs(page - chapt[i]);
        min2 = i;
       }else if (min == Math.abs(page - chapt[i])) {
        min2 = i;
       }
    }
    return min2;
}

const res = nearestChapter({
    "Chapter 1a" : 1,
    "Chapter 1b" : 5
  }, 3);
 console.log(res);
  




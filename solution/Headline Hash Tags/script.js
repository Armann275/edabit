function getHashTags(str) {
  const regex = /[a-zA-Z]/;
  let newArr = [];
  let dublicateStr = str.split(" ");
  for (let i = 0; i < dublicateStr.length; i++) {
    let check = '';
    for (let j = 0; j < dublicateStr[i].length; j++) {
      if (regex.test(dublicateStr[i][j])) {
        check += dublicateStr[i][j]
      }
    }
    newArr.push(check)
    check = '';
  }
  newArr.sort((a, b) => b.length - a.length);
  let arr = [];
  arr.push(`#${newArr[0].toLowerCase()}`);
  arr.push(`#${newArr[1].toLowerCase()}`)
  if (newArr[2]) {
    arr.push(`#${newArr[2].toLowerCase()}`)
  }
  return arr;
}
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));

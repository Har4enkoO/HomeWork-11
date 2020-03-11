function getSymbol() {
  return new Promise(resolve => {
    setTimeout(() => {
      let symbol = Date.now()
        .toString()
        .slice(-5);
      resolve(String.fromCharCode(symbol));
    }, 50);
  });
}
async function getRandomChinese(length) {
  let str = '';
  let i = 0;
  while (i < length) {
    str += await getSymbol();
    i++;
  }
  return str;
}
getRandomChinese(5).then(result => {
  console.log(result);
});

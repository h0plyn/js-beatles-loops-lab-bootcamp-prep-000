// add solution here
function theBeatlesPlay(musicians, instruments) {
  const newArr = [];
  for (let i = 0; i < musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return newArr;
};

function johnLennonFacts(factArr) {
  let i = 0;
  while (i < facts.length) {
    facts[i] += '!!!'
  };
  return facts;
};
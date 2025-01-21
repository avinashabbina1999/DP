const allConstruct = (target,words,memo={}) => {
  if(target in memo) return memo[target];
  if(target === '') return [[]];
  let result = [];
  for(let word of words){
    if(target.indexOf(word) === 0){
      const remainder = allConstruct(target.slice(word.length),words,memo);
      const ways =  remainder.map(way => [word,...way]);
      result.push(...ways);
    }
  }
  return memo[target] = result;
};

console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(allConstruct('eeeeeeeeeeeeeeee',['e','ee','eee','eeee','eeeee','eeeeee']));
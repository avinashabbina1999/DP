const countConstruct = (target,words,memo={}) => {
  if(target in memo) return memo[target];
  if(target==='') return 1;

  let total = 0;

  for(let word of words){
    if(target.indexOf(word) === 0){
      total += countConstruct(target.slice(word.length),words,memo);
    }
  }

  return memo[target] = total;
};

console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(countConstruct('eeeeeeeeeeeeeeee',['e','ee','eee','eeee','eeeee','eeeeee']));
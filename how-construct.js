const howConstruct = (target,words,memo={}) => {
  if(target in memo) return memo[target];
  if(target === '') return [];

  for(let word of words){
    if(target.indexOf(word) === 0){
      const remainder = howConstruct(target.slice(word.length),words,memo);
      if(remainder!==null){
        return memo[target] = [...remainder,word];
      }
    }
  }

  return memo[target] = null;
};

console.log(howConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(howConstruct('eeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee','eeeeee']));
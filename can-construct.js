const canConstruct = (target,words,memo={}) => {
  if(target in memo) return memo[target];
  if(target === '') return true;

  for(let word of words){
    if(target.indexOf(word) === 0){
      if(canConstruct(target.slice(word.length),words,memo)){
        return memo[target] = true;
      }
    }
  }

  return memo[target] = false;
}


console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(canConstruct('eeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee','eeeeee']));


const canConstruct2 = (target,words) => {
  const table = Array(target.length+1).fill(false);
};
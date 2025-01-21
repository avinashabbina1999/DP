const internal = require("stream");

const gridTraveler = (m,n,memo={}) =>  {
  const key = m + ',' + n;
  const key2 = n + ',' + m;
  if(key in memo) return memo[key];
  if(key2 in memo) return memo[key2];
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
  memo[key2] = memo[key];
  return memo[key];
};

console.log(gridTraveler(2,3));
console.log(gridTraveler(18,18));

const gridTraveler2 = (m,n) => {
  const grid = Array(m+1).fill().map(() => Array(n+1).fill(0));
  grid[1][1] = 1;

  for(let i=0;i<m+1;i++){
    for(let j=0;j<n+1;j++){
      if(i<=m-1) grid[i+1][j]+= grid[i][j];
      if(j<=n-1) grid[i][j+1]+= grid[i][j];
    }
  }
  return grid[m][n];
};

console.log(gridTraveler2(2,3));
console.log(gridTraveler2(18,18));
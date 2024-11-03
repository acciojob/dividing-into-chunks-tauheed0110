const arr = [4, 3, 2, 1];

const divide = (arr, n) => {
  // Write your code here
  n = Number(n);
  let ans = [];
  let start=0;
  
  while(start < arr.length){
    let temp = [];
    let sum = 0;
    while(start < arr.length && sum <= n){
        sum += arr[start];
        if(sum <= n){
            temp.push(arr[start]);
            start++;
        }
    }
    if(temp.length > 0)
        ans.push(temp);
  }
  start++;
  return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

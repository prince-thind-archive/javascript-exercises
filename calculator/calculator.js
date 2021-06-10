const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum=0;
  for(let e of arr){
    sum+=e;
  }
  return sum;
	
};

const multiply = function(arr) {
return arr.reduce((a,b)=>{
  return a*b;
})
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(a) {
  let res=1;
	for(let i=2;i<=a;i++){
    res*=i;
  }
  return res;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

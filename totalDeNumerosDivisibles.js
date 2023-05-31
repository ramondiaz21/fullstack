a=5;
b=10;
function getTotalX(a, b) {
  let count = 0;
  const max = Math.max(...b);
	
  for (let i = 1; i <= max; i++) {
	  if (a.every(num => i % num === 0) && b.every(num => num % i === 0)) count++;
  }
	
  return count;	
}
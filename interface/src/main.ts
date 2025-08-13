import './style.css'
/*
const [min, max] = minmax([1, 2, 3, 4]);

function minmax(arr: number[]) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log('Min:', min, 'Max:', max);
*/


const r = fn(1, 2);
function fn(a: number, b: number) {
  return {
    add:  a + b,
    sub:  a - b
  };
}
function log(x: { add: number; sub: number }) {
  console.log(x.add); 
  console.log(x.sub); 
}

log(r)
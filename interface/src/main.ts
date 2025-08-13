import './style.css'
/*
type CarType = 1 | 2 | 3 | 4
type Engine = number

interface ICar {
 type: CarType
 engine: Engine

 move: () => number
 stop: Function

 airCondition?: boolean
}

class Damas implements ICar {

 type: CarType = 1 // 1 = fuel, 2 = gasoline, 3 = electric, 4 = hybrid
 engine: Engine = 1.5

 move(): number {

  return 1
 }
 stop() {}

 dumlash() {}
}

const damas = new Damas()

damas.type = 4

servis( damas )

function servis( car: ICar ) {

 console.log( car.type )

 const speed: number = car.move()

 console.log( speed / 1_000 )
}
////

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
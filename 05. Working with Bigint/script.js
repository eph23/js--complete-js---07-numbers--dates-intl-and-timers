'use strict';

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

console.log(483843024834204382456456456456n);
console.log(BigInt(48384302));

console.log(10000n + 10000n);
console.log(6544343435453454564646541423132123n * 1000000n);
const huge = 22154545454541n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);

console.log(huge + ' is REALLY big!!!');

console.log(11n / 3n);
console.log(10 / 3);

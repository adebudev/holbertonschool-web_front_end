const { performance } = require('perf_hooks');

const countPrimeNumbers = () => {
  let startTime = performance.now();
  let endTime = 0;
  const isPrime = (num) => {
    for(let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  return (function () {
    let primeNumbers = [];
    let num = 2;
    for (num; num <= 100; num++) {
      if(isPrime(num)) {
        primeNumbers.push(num);
      }
    }
    endTime = performance.now();

    //setTimeout(() => { console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);}, 0);
    return primeNumbers;
  })();
}

function main() {
  let startTime = performance.now();

  for (let t = 0; t <= 100; t++) {
    countPrimeNumbers();
  }
  let endTime = performance.now();

  setTimeout(() => { console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);}, 0);
}

main();
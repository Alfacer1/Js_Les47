const getRandomDelay = () => Math.floor(Math.random() * (7 - 3 + 1) + 3);

const a = (cb) => {
  const delay = getRandomDelay();
  setTimeout(() => cb(delay), delay);
};

const b = (cb) => {
  const delay = getRandomDelay();
  setTimeout(() => cb(delay), delay);
};

const c = (cb) => {
  const delay = getRandomDelay();
  setTimeout(() => cb(delay), delay);
};

const waitForAll = () => {
  let delayFromA, delayFromB, delayFromC;
  let counter = 0;

  const checkAndPrintSum = () => {
    if (++counter === 3) {
      console.log(delayFromA + delayFromB + delayFromC);
    }
  };

  a((delay) => {
    delayFromA = delay;
    checkAndPrintSum();
  });

  b((delay) => {
    delayFromB = delay;
    checkAndPrintSum();
  });

  c((delay) => {
    delayFromC = delay;
    checkAndPrintSum();
  });
};

// Виклик функції для перевірки
waitForAll();

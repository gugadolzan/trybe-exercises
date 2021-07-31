const didIWin = (myNumber, raffleNumber) => myNumber === raffleNumber;

const raffle = (myNumber, callback) => (callback(myNumber, Math.floor(Math.random() * 5 + 1))) ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(raffle(2, didIWin));
 
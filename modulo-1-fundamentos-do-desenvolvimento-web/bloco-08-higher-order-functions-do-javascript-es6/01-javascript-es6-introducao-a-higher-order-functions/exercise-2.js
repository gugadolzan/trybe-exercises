const didIWin = (myNumber, raffleNumber) => myNumber === raffleNumber;

const raffle = (myNumber, callback) => (callback(myNumber, Math.ceil(Math.random() * 5))) ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(raffle(2, didIWin));

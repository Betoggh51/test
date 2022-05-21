const availableBills = [100, 50, 20, 10, 5, 1];
const Calculator = {
  // Given money amount, break into bills
  // input: 195
  // output: [100, 50, 20, 20, 5]
  changeMachine: (money) => {
    const changeArray = [];

    for (let i = 0; i < availableBills.length; i++) {
      if (money <= 0) break;
      let amountBills = Math.floor(money / availableBills[i]);
      money = money - amountBills * availableBills[i];

      for (let j = 0; j < amountBills; j++) changeArray.push(availableBills[i]);
    }

    return changeArray;
  },
};

console.log(Calculator.changeMachine(1037));
console.log(Calculator.changeMachine(195));
console.log(Calculator.changeMachine(83));

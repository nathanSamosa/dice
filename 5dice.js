const dice1 = {
    name: 'Dice one',
    order: '1',
    orderNumerical: 1,
    sides: 6,
}
const dice2 = {
    name: 'Dice two',
    order: '2',
    orderNumerical: 2,
    sides: 6,
}
const dice3 = {
    name: 'Dice three',
    order: '3',
    orderNumerical: 3,
    sides: 6,
}
const dice4 = {
    name: 'Dice four',
    order: '4',
    orderNumerical: 4,
    sides: 6,
}
const dice5 = {
    name: 'Dice five',
    order: '5',
    orderNumerical: 5,
    sides: 6,
}

diceArr = [dice1, dice2, dice3, dice4, dice5];
resultsArr = [];

function rollDice() {

    diceArr.forEach(element => {

        if (document.getElementById('holdDice' + element.order).checked === false) {
            result = 1 + Math.floor(Math.random() * element.sides);
            element.randomNumber = result;
            resultsArr[element.orderNumerical - 1] = result;

            document.getElementById('diceRoll' + element.order).innerHTML = result;
            console.log(element.name + ' rolled a ' + result);
        } 

    });

    function areSame()
    {
        let s = new Set(resultsArr);
  

        return (s.size == 1);
    }
    
    setTimeout(function() {
        if (areSame())
            alert("Yahtzee!");
    },10)

    console.log(resultsArr);
}

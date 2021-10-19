const lenni = {
    character: 'Lenni',
    max: 12,
    min: 3,

}

const nathan = {
    character: 'Samosa',
    max: 6,
    min: 1,

}

function rollDice(object) {

    var result = object.min + Math.floor(Math.random() * (object.max-object.min + 1));

    document.getElementById("diceRoll").innerHTML = object.character + ' rolled a ' + result + '!';
    console.log(object.character + ' rolled a ' + result + '!')
}


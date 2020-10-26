var round = 1;
var score = { player: 0, bot: 0 };
var tools = ['❔', 'kamen 🗿', 'škare ✂️', 'papir 🧾'];
var compare = { player: 0, bot: 0 };
var roundResult = " ";
var pickedButton;

var gameDiv = document.getElementById("game");

var infoRound = document.getElementById("info-round");
var infoScore = document.getElementById("info-score");
var infoWin = document.getElementById("info-win");

var buttonBot = document.getElementById("button-bot");
var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");


function loadText() {
    // called on body load in hmtl

    infoRound.innerText = "Runda #" + round;
    infoScore.innerText = score['player'] + ":" + score['bot'];
    infoWin.innerHTML = "<b>" + roundResult + "</b>";

    if (round == 1) buttonBot.innerText = tools[0];
    button1.innerText = tools[1];
    button2.innerText = tools[2];
    button3.innerText = tools[3];
}


// main function
function startRound(pick) {

    // buttons border color
    resetButtons();
    pick.className = "clicked-wait";
    pickedButton = pick; // saved for border color after round result,  in nextRound();
    ////


    // #1 take player input, pick
    compare["player"] = Number(pick.value);

    // #2 disable buttons
    openButtons(0);

    // #3 animate and set Bot's pick choice, then start calcWin();
    // #4 calculate score and start new round
    botPick().then(function(result) {
        compare["bot"] = result;
        roundResult = calcWin(compare["player"], compare["bot"]);
        nextRound(roundResult);
    });
}
////


function openButtons(val) {

    if (val) {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
    } else {
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
    }
}

function botPick() {
    var randomChoice;

    var shuffle = setInterval(function() {
        randomChoice = Math.floor(Math.random() * 3) + 1; // random tools[1, 2, 3];
        buttonBot.innerText = tools[randomChoice];
    }, 120);

    return new Promise(function(resolve, reject) {
        t = setTimeout(function() {

            clearInterval(shuffle);
            clearTimeout(t);
            //console.log('resolved');
            resolve(randomChoice);
        }, 2000);
    });
}

function calcWin(c1, c2) {

    var res;
    switch (c1 - c2) {
        case 0:
            res = "tie";
            break;

        case -1:
            res = "you win";
            break;
        case 2:
            res = "you win";
            break;

        case 1:
            res = "you lose";
            break;
        case -2:
            res = "you lose";
            break;

        default:
            console.log("err");
    }
    return res;

    //algorithm:
    // 
    // function winner(p1, p2):
    // if ((p1 + 1) % 3 == p2)  return "Player 2 won";
    // else if (p1 == p2)       return "It is a draw";
    // else                     return "Player 1 won";

}

function nextRound(answer) {

    switch (answer) {
        case "you win":
            score["player"]++;
            pickedButton.className = "clicked-good";
            buttonBot.className = "clicked-bad";
            break;
        case "you lose":
            score["bot"]++;
            pickedButton.className = "clicked-bad";
            buttonBot.className = "clicked-good";
            break;
        case "tie":
            pickedButton.className = "clicked-wait";
            buttonBot.className = "clicked-wait";
            console.log("tie - score doesn't change");
            break;
        default:
            console.log("err");
    }

    round++;
    loadText();
    openButtons(1);
}

function resetButtons() {
    // resets border colors

    var buttons = gameDiv.getElementsByTagName("button");
    for (index = 0; index < buttons.length; ++index) {
        buttons[index].className = "";
    }
}
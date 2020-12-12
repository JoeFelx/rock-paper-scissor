
document.querySelector(".human1").addEventListener("click", function(){

    var randomValues = Math.floor(Math.random(randomChoice) * 5 + 1) ;
    var randomChoice = ["p", "r", "s", "p", "r", "s"];
    var opponentChoice = randomChoice[randomValues];                                        
    document.querySelector(".oppenent").setAttribute("src", "/images/" + opponentChoice + ".png");
    console.log(opponentChoice);

    var humanChoice = prompt(`                        
                                            Rock Paper Scissor

                                    Instruction:

                                                Type 
                                                    "r for Rock"
                                                    "p for Paper"
                                                    "s for Scissor"`)
    makeHumanDecision(humanChoice);

    if(humanChoice === 'r' && opponentChoice === 's'){
        document.querySelector("h1").innerHTML = "You Win";
    } else if(humanChoice === 'p' && opponentChoice === 'r'){
        document.querySelector("h1").innerHTML = "You Win";
    } else if(humanChoice === 's' && opponentChoice === 'p'){
        document.querySelector("h1").innerHTML = "You Win";
    } else if(humanChoice === 'p' && opponentChoice === 'p'){
        document.querySelector("h1").innerHTML = "Draw";
    } else if(humanChoice === 'r' && opponentChoice === 'r'){
        document.querySelector("h1").innerHTML = "Draw";
    } else if(humanChoice === 's' && opponentChoice === 's'){
        document.querySelector("h1").innerHTML = "Draw";
    } else {
        document.querySelector("h1").innerHTML = "You Lose";
    }

    document.querySelector("h1").addEventListener("click", function(){
        window.location.reload();
    });
});

var keyPress = document.addEventListener("keydown", function(event){
    var randomValues = Math.floor(Math.random(randomChoice) * 5 + 1) ;
    var randomChoice = ["p", "r", "s", "p", "r", "s"];
    var opponentChoice = randomChoice[randomValues];                                        
    document.querySelector(".oppenent").setAttribute("src", "/images/" + opponentChoice + ".png");
    console.log(opponentChoice);

    humanChoice = event.key;

    makeHumanDecision(humanChoice);

    if(humanChoice === 'r' && opponentChoice === 's'){
        document.querySelector("h1").innerHTML = "You Win";
    } else if(humanChoice === 'p' && opponentChoice === 'r'){
        document.querySelector("h1").innerHTML = "You Win";
    } else if(humanChoice === 's' && opponentChoice === 'p'){
        document.querySelector("h1").innerHTML = "You Win";
    } else if(humanChoice === 'p' && opponentChoice === 'p'){
        document.querySelector("h1").innerHTML = "Draw";
    } else if(humanChoice === 'r' && opponentChoice === 'r'){
        document.querySelector("h1").innerHTML = "Draw";
    } else if(humanChoice === 's' && opponentChoice === 's'){
        document.querySelector("h1").innerHTML = "Draw";
    } else {
        document.querySelector("h1").innerHTML = "You Lose";
    }

    document.querySelector("h1").addEventListener("click", function(){
        window.location.reload();
    });
});


function makeHumanDecision(key){
    switch (key) {
        case 'r':
            document.querySelector(".human").setAttribute("src", "/images/r.png");
            break;

        case 's':
            document.querySelector(".human").setAttribute("src", "/images/s.png");
            break;

        case 'p':
            document.querySelector(".human").setAttribute("src", "/images/p.png");
            break;

        default:
            break;
    }
}
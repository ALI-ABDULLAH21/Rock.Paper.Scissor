const startfn=()=>{
    const startgame=confirm("Do you want to play Game!!!");
    startgame? playgame():alert("okay,maybe next time!");
}
const playgame=()=>{
    while(true){
        let playerchoice=askuser();
        if(playerchoice===""){
            nothing();
            continue;
        }
        if(!playerchoice){
            noplay();
            break;
        }
        playerchoice=trimchoice(playerchoice);
        playerchoice=evaluatechoice(playerchoice);
        let computerchoice=compoutput();
        //result
        let result=compare(playerchoice,computerchoice);
        displayresult(result);
        let askagain=playagain();
        if(askagain){
            continue;
        }
        else{
            alert("Thanks for playing!");
            break;
        }


        
    }

}
const askuser=()=>{
    playerchoice=prompt("Enter rock,paper or scissor?");
    return playerchoice;
}
const nothing=()=>{
    alert("You didn't enter rock,paper,scissor!");
}
const noplay=()=>{
    alert("No,problem you can play  next time!");
    
}
const trimchoice=(choice)=>{
    let res=choice.trim().toLowerCase();
    return res;

}
const evaluatechoice=(eval)=>{
    if(eval==="rock" || eval==="paper"  || eval==="scissor"){
        return eval;
    }else{
        return false;
    }
}
const compoutput=()=>{
    let randomnum = Math.floor(Math.random()*3);
    let array = ["rock","paper","scissor"];
    let companswer=array[randomnum];
    return companswer;

}
const compare = (player, computer) => {
    const result =
        player === computer
            ? "Tie Game!"
            : (player === "rock" && computer === "scissor") ||
            (player === "scissor" && computer === "paper") ||
            (player === "paper" && computer === "rock")
                ? `Player One: ${player}\nComputer: ${computer}\nPlayer One Wins!`
                : (player === "rock" && computer === "paper") ||
                (player === "scissor" && computer === "rock") ||
                (player === "paper" && computer === "scissor")
                    ? `Player One: ${player}\nComputer: ${computer}\nComputer Wins!`
                    : `Invalid Choices! Please enter rock, paper, or scissor.`;

    return result;
};
const displayresult=(result)=>{
    alert(result);
}
const playagain=()=>{
     return confirm("Do you want to play again?");
    

}
startfn();

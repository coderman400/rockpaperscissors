const begin= document.querySelector('#begin');
const body = document.querySelector('body');
const rock= document.createElement('h1');
const paper = document.createElement('h1');
const scissors = document.createElement('h1');

rock.textContent="ROCK";
paper.textContent='PAPER';
scissors.textContent='SCISSORS';

//flashes rock paper scissors
function showText(){
    container.appendChild(rock);
    rock.style.opacity="0";
    rock.classList.add('introanim');
    rock.addEventListener('animationend', function(){
        container.removeChild(rock); 
        container.appendChild(paper);
        paper.style.opacity="0";
        paper.classList.add('introanim');
    })
    
    paper.addEventListener('animationend', function(){
        container.removeChild(paper); 
        container.appendChild(scissors);
        scissors.style.opacity="0";
        scissors.classList.add('introanim');
    })
    scissors.addEventListener('animationend', function(){
        game();
        container.removeChild(scissors);
        
})
}

//starts flashing text 1 second after clicking begin
begin.addEventListener('click', function(){
    const theme = document.createElement('audio');
    theme.src="sounds/theme.mp3";
    theme.play();
    theme.loop;
    theme.volume=0.2;
    begin.style.display="none";
    body.classList.add('intro');
    setTimeout(showText, 1000);
})



//==============           GAME LOGIC          =============================================================
function gameend(score){
   
   const final = document.createElement('h2');

   if(score[0]>score[1]){
       final.textContent="YOU WIN THE GAME!";
       final.style.color="rgb(255, 226, 231)";
       container.appendChild(final);
   }else if(score[1]>score[0]){
       final.textContent="YOU LOST THE GAME HEHE";
       final.style.color="rgb(255, 226, 231)";
       container.appendChild(final);
   }else{
       final.textContent
       ="THE GAME'S A DRAW! lol";
       final.style.color="rgb(255, 226, 231)";
       container.appendChild(final);
   }
   const fatality = document.createElement('audio');
   fatality.src="sounds/fatality.mp3";
   fatality.play();
   fatality.volume=2;
}

function game(){
    const navbar = document.querySelector("#navbar");
    let i = 0;
    let score = [0,0];
    
    


    function getResult(playerSelection,computerSelection){
        
        let tuplething = `${playerSelection},${computerSelection}`;
        switch(tuplething){
            case "rock,scissors":
            case "paper,rock":
            case "scissors,paper":{
                
                return "win";
                
            }
            
            case "rock,rock" :
            case "paper,paper" :
            case "scissors,scissors" :{
                return "draw";
                
            }
            default:{
                
                return "loss";
                
                
            }
            }
    }


    function computerPlay(){
        random=Math.floor(Math.random()*3)+1;
        if(random==1){
            return "rock";
        }else if(random==2){
            return "paper";
        }else {
            return "scissors";
        }
    }

    //displays the three options
    function selection(){
        container.removeChild(round);
        container.appendChild(rockbutton);
        container.appendChild(paperbutton);
        container.appendChild(scissorsbutton);
        rockbutton.style.marginLeft="0px";
        paperbutton.style.marginLeft="70px";
        scissorsbutton.style.marginLeft="70px";
        
    }

    function resultAnim(pchoice,cchoice,result){

        function resultdisplay(){
            function cleanup(){
                resultmsg.classList.add("disappear")
                body.style.background="black";
                while(container.firstChild){
                    console.log("removed " +container.firstChild);
                    container.removeChild(container.firstChild);

                }
                while(body.firstChild){
                    console.log("removed " +body.firstChild);
                    body.removeChild(body.firstChild);
                    
                }
                body.appendChild(navbar);
                body.appendChild(container);
                
                if(i>4){
                    setTimeout(gameend(score),3000);
                }else{
                    oneRound();
                }
                
            }
            navbar.style.color="black";
            circle = document.createElement('div');
            circle.classList.add("circle");
            resultmsg = document.createElement('h2');
            resultmsg.classList.add("resultmsg");

            container.appendChild(circle);
            circle.classList.add('grow');

            circle.addEventListener('animationend', ()=>{
                body.style.background="white";
                //remove all children of container
                while(container.firstChild){
                    console.log("removed " +container.firstChild);
                    container.removeChild(container.firstChild);

                }

                switch(result){
                    case "win":
                        resultmsg.textContent="YOU WIN, NICE!";
                        score[0]++;
                        console.log("win +1");
                        container.appendChild(resultmsg);
                        navbar.textContent=`${score[0]}  :  ${score[1]}`;
                        let raudio = document.createElement('audio');
                        raudio.src="sounds/win.mp3";
                        raudio.play();
                        raudio.volume=0.3;
                        break;
                    case "loss":
                        resultmsg.textContent="YOU LOSE, LOL";
                        score[1]++;
                        console.log("lose +1");
                        container.appendChild(resultmsg);
                        navbar.textContent=`${score[0]}  :  ${score[1]}`;
                        let laudio = document.createElement('audio');
                        laudio.src="sounds/loss.mp3";
                        laudio.play();
                        break;
                    case "draw":
                        resultmsg.textContent="ITS A DRAW, DAMN";
                        container.appendChild(resultmsg);
                        break;
            }})
            setTimeout(cleanup,5000);
        }



        //blank screen
        container.removeChild(rockbutton);
        container.removeChild(paperbutton);
        container.removeChild(scissorsbutton);

        const rockimg = document.createElement('img');
        rockimg.setAttribute("src","rock.png");
        const paperimg = document.createElement('img');
        paperimg.setAttribute("src","paper.png");
        const scissorsimg = document.createElement('img');
        scissorsimg.setAttribute("src","scissors.png");

        const crockimg = document.createElement('img');
        crockimg.setAttribute("src","rock.png");
        const cpaperimg = document.createElement('img');
        cpaperimg.setAttribute("src","paper.png");
        const cscissorsimg = document.createElement('img');
        cscissorsimg.setAttribute("src","scissors.png");

       

        switch(pchoice){
            case "rock":
                container.appendChild(rockimg);
                rockimg.classList.add('lefttoright')
                break;
            case "paper":
                container.appendChild(paperimg);
                paperimg.classList.add('lefttoright')
                break;
            case "scissors":
                container.appendChild(scissorsimg);
                scissorsimg.classList.add('lefttoright')
                break;
        }

        switch(cchoice){
            case "rock":
                container.appendChild(crockimg);
                crockimg.classList.add('compimg')
                crockimg.classList.add('righttoleft')
                break;
            case "paper":
                container.appendChild(cpaperimg);
                cpaperimg.classList.add('compimg')
                cpaperimg.classList.add('righttoleft')
                break;
            case "scissors":
                container.appendChild(cscissorsimg);
                cscissorsimg.classList.add('compimg')
                cscissorsimg.classList.add('righttoleft')
                break;
        }
        
        setTimeout(resultdisplay, 2900);
        

    }

    //declaring some elements
    const round = document.createElement('h2');
    const container = document.querySelector('#container');
    const rockbutton = document.createElement('div');
    const paperbutton = document.createElement('div');
    const scissorsbutton = document.createElement('div');
    rockbutton.classList.add('choice','hoverable');
    paperbutton.classList.add('choice','hoverable');
    scissorsbutton.classList.add('choice','hoverable');

    rockbutton.textContent="ROCK";
    paperbutton.textContent="PAPER";
    scissorsbutton.textContent="SCISSORS";

    function oneRound(){
        navbar.textContent=`${score[0]}  :  ${score[1]}`;
        navbar.style.color="white";
        i++;
        //show round, then round goes away after 1 second and options are displayed.
        round.textContent=`ROUND ${i}`;
        container.appendChild(round);
        let roundaud = document.createElement('audio');
        roundaud.src=`sounds/round${i}.mp3`;
        roundaud.play();

        setTimeout(selection, 1000);

        //assign choices, get result, run result animation function

        rockbutton.addEventListener('click',()=>{
            let playerSelection="rock";
            let computerSelection=computerPlay();
            let result = getResult(playerSelection,computerSelection);
            resultAnim(playerSelection,computerSelection,result);
        })
        paperbutton.addEventListener('click',()=>{
            let playerSelection="paper";
            let computerSelection=computerPlay();
            let result = getResult(playerSelection,computerSelection);
            resultAnim(playerSelection,computerSelection,result);
        })
        scissorsbutton.addEventListener('click',()=>{
            let playerSelection="scissors";
            let computerSelection=computerPlay();
            let result = getResult(playerSelection,computerSelection);
            resultAnim(playerSelection,computerSelection,result);
        })
    
    }
    oneRound();

    
   

}






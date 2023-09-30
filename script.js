let playerText=document.getElementById("playerText");
let restartBtn=document.getElementById("resetBtn");
let boxes=Array.from (document.getElementsByClassName("box"));

console.log(boxes);

const O_Text="0";
const X_Text="X";
let curr=X_Text;
let spaces=Array(9).fill(null);

console.log(spaces);

const startGame=()=>{
    boxes.forEach(box=>box.addEventListener("click",boxClicked))
}


function boxClicked(e){
    const id=e.target.id;
    if(!spaces[id]){
        spaces[id]=curr;
        e.target.innerText=curr;
if(playerHasWon()!=false){
    playerText=`${curr} has won`;
    let winning_blocks=playerHasWon();
    winning_blocks.map(box=>boxes[box].style.backgroundColor="blueviolet");
    setTimeout(won, 1000);
    return;
    

    
}
        curr= curr==X_Text?O_Text:X_Text;

    }
}
function sound(){
    var snd = new Audio('clickit.wav')//wav is alt.wavso supported
    snd.play()//plays the sound
}

function won(){
    alert(`${curr} has won` );
    spaces.fill(null);

    boxes.forEach(box=>{
        box.innerText='';
        box.style.backgroundColor=''
    })
playerText='Tic Tac Toe';
    curr=X_Text;
}

resetBtn.addEventListener("click",reset)
function reset(){
    
    spaces.fill(null);

    boxes.forEach(box=>{
        box.innerText='';
        box.style.backgroundColor=''
    })
playerText='Tic Tac Toe';
    curr=X_Text;
}
const winningCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerHasWon(){
    for(const it of winningCombos){
        let [a,b,c]=it;
        if(spaces[a]&&(spaces[a]==spaces[b])&&(spaces[a]==spaces[c])){
            return [a,b,c]
        }
    }
    return false;
}
startGame();

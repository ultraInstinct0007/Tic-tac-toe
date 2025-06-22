let boxes=document.querySelectorAll(".box");
let resbtn= document.querySelector("#res-btn");
let newGamebtn= document.querySelector("#new-game");
let msgConatainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX,playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,4,5],
    [6,7,8],
];

const resetGame = () =>{
    let turnO = true;
    enableBoxes();
    msgConatainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO){ //playerO
            box.innerText="O";
            turnO = false;
        }
        else{ //playerX
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
       
    });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =(winner) =>{
    msg.innerText =`Congratulations, The Winner is ${winner}`;
    msgConatainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1val=boxes [pattern[0]].innerText;
        let pos2val=boxes [pattern[1]].innerText;
        let pos3val=boxes [pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);

            }

        }
    }
   
}

newGamebtn.addEventListener("click",resetGame);
resbtn.addEventListener("click",resetGame);
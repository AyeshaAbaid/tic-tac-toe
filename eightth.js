let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");


let turnO = true; //playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

]
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){ //playerO
            box.innerText = "O";
            turnO = false;
        }
        else{  //playerX
            box.innerText = "X";
            turnO = true;
            
        }
        box.disabled = true;
        checkWinner();
    })
})

const showWinner = (winner)=>{
    msgContainer.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   
}
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
 }
 const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }


const checkWinner = ()=>{
    for(let pattern of winPatterns){
       
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val == pos2Val  && pos2Val == pos3Val)
                {
                    console.log("Winner" , pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
}


resetBtn.addEventListener("click",resetGame);
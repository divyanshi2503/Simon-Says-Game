let gameSeq=[];
let userSeq=[];

let start= false;
let level=0;
let h2= document.querySelector("h2");
let btns= ["red", "yellow", "green", "blue"];
let maxscore=0;
let h3= document.querySelector("h3");

document.addEventListener("keypress", function(){

if(start== false){
    
    start= true;
    levelUp();
    //console.log("game started");
}

});

function btnFlash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
    
}

function userbtnFlash(btn){

    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp(){

   userSeq=[];
    level++;
    maxscore= Math.max(level, maxscore);
    h2.innerText= `Level ${level}`;
    h3.innerText= `Maximum Score:${maxscore}`;
    //random button
    let randomIndx= Math.floor(Math.random()*3);
    let randomColor= btns[randomIndx];
    let randomBtn= document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);    
    btnFlash(randomBtn);
  
}

function check(idx){

    if(gameSeq[idx]==userSeq[idx]){

        if(gameSeq.length==userSeq.length){

            setTimeout(levelUp, 500);

        }

        
    }

    else{

        h2.innerHTML= `Game Over! Your Score is <b> ${level} </b>  <br> Press any key to start game! `;
        body= document.querySelector("body");
        body.style.backgroundColor= "red";
        setTimeout(function(){
            body.style.backgroundColor= "white";
            
        }, 200);
        reset();
    }
}

function btnPress(){

    console.log(this);
    let btn= this;
    let color= btn.getAttribute("id");
    userSeq.push(color);
    userbtnFlash(btn);
    check(userSeq.length-1);

}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns) {

    btn.addEventListener("click", btnPress);

}

function reset(){

    start= false;
    gameSeq= [];
    userSeq= [];
    level= 0;
}

const score=document.getElementById('score')
const timer=document.getElementById('timer')
const squares = document.querySelectorAll('.square')
const square= document.querySelector('.square')



let moleId
let result=0
let currentTime=10

function addMole(){
    squares.forEach(square=>{
        square.style.backgroundImage=null;
    })
    let index = Math.floor(Math.random()*9);
    randomSquare=squares[index];
    randomSquare.style.backgroundImage="url('img110.png')";    
    moleId=randomSquare.id
    
}
let moveId

function moveMole(){
   
   moveId=setInterval(addMole, 500)
}

moveMole()

squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if(square.id===moleId){
            result++;
            score.innerHTML=result;
            
        }
    })
})



function countDown(){
    currentTime--;
    timer.innerHTML=currentTime;
    if(currentTime===0){
        clearInterval(counting);
        alert('Game over! Your final score is '+result);
        clearInterval(moveId)
    
    }
}

let counting=setInterval(countDown, 1000)
let player1btn = document.getElementById('player1Btn');
let player2btn = document.getElementById('player2Btn');
let reset = document.getElementById('resetBtn');
let numInput = document.getElementsByTagName('input');
let player1Points = document.getElementById('player1Score');
let player2Points = document.getElementById('player2Score');
let player1Count = 0;
let gameOver = false;

let maxPoints = 5;

player1btn.addEventListener('click', function(){
        player1Count++;
        if(player1Count === maxPoints){
            player1Points.style.color = 'green';
        }
            player1Points.textContent = player1Count;
            
})

let player2Count = 0;
player2btn.addEventListener('click', function(){
    player2Count+=1;
    if(player2Count === maxPoints){
        player2Points.style.color = 'green'; 
    }
            player2Points.innerHTML = player2Count;
})

reset.addEventListener('click', function(){
    
})

numInput.addEventListener("change", function(){
    maxPoints.textContent = Number(this.value);
})




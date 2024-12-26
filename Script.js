function startGame(){
  var player1=Math.floor(Math.random()*6+1)
  var player2=Math.floor(Math.random()*6+1)
  
  var imgTags=document.querySelectorAll("img")
  
  imgTags[0].setAttribute("src",`./assests/dice${player1}.png`)
  imgTags[1].setAttribute("src",`./assests/dice${player2}.png`)
  
  var result=document.getElementById("result")
   if(player1 > player2) {
      result.innerText="player 1 Won the Match"
    }
    else if(player2 > player1){
      result.innerText="player 2 Won the Match"
    }
    else{
      result.innerText="Draw Match"
    }
  }
  
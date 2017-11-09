console.log('hello')

let p1 = document.getElementById('piece1');
let p2 = document.getElementById('piece2');
let bothPlayers = document.querySelectorAll('.player')

let player1 = 0;
let player2 = 0;
  

window.onkeydown=function(e){
	var key = e.keyCode 
	     if(key === 37){
	    	player1 += 10;
	    	p1.style.marginLeft = player1 + 'px';
	    }
	    else if(key === 39){
	    	player2 += 10;
	    	p2.style.marginLeft = player2 + 'px'
	    }
	  	checkWin()
}

function checkWin(){
	for(let i = 0; i < bothPlayers.length; i++){
	if(bothPlayers[i].style.marginLeft === 1330 +'px'){
		console.log('win')
	}
}
}




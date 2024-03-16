var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

const c = canvas.getContext('2d');


c.beginPath();
c.setLineDash([20,5]);
c.moveTo(canvas.width/2, 0);
c.lineTo(canvas.width/2, canvas.height);
c.strokeStyle = "white";
c.stroke();

c.font = '50px Courier';
c.textAlign = 'center';

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth - 10;
	canvas.height = window.innerHeight - 10;

	c.font = '50px Courier';
	c.textAlign = 'center';

	c.beginPath();
	c.setLineDash([20,5]);
	c.moveTo(canvas.width/2, 0);
	c.lineTo(canvas.width/2, canvas.height);
	c.strokeStyle = "white";
	c.stroke();

	init();
});

/*window.addEventListener('keydown', function(event){

	if(event.keyCode == "83") {
		if(pad1.dy < 0){
			pad1.dy = -pad1.dy;
		}
		if (pad1.dy < 20) {
            pad1.dy++;
        }
		pad1.move();
	}

	if(event.keyCode == "87") {
		if(pad1.dy > 0){
			pad1.dy = -pad1.dy;
		}
		if (pad1.dy > -20) {
            pad1.dy--;
        }
		pad1.move();
	}

	if(event.keyCode == "40") {
		if(pad2.dy < 0){
			pad2.dy = -pad2.dy;
		}
		if (pad2.dy < 20) {
            pad2.dy++;
        }
		pad2.move();
	}

	if(event.keyCode == "38") {
		if(pad2.dy > 0){
			pad2.dy = -pad2.dy;
		}
		if (pad2.dy > -20) {
            pad2.dy--;
        }
		pad2.move();
	}

}, false);*/
/*var keysDown = []; //empty array to store which keys are being held down


window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true; //store the code for the key being pressed
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

function checkKeys() {

  if (keysDown[40]) {
    if (pad1.y > 10) {
      pad1.dy += 5;
      pad1.y -= pad1.dy; //z
    } else {
    	pad1.y = 10;
    }
    pad1.draw()
  }

  if (keysDown[38]) {
    if (pad1.y < (cHeight - 60)) {
      pad1.y += 5;
      pad1.y += pad1.dy; //x
    } else {
    	pad1.y = cHeight - 60;
    }
    pad1.draw()
  }

  if (keysDown[83]) {
    if (pad2.y > 10) {
      pad2.dy += 5;
      pad2.y -= pad2.dy; //z
    } else {
    	pad2.y = 10;
    }
    pad2.draw()
  }

  if (keysDown[87]) {
    if (pad1.y < (cHeight - 60)) {
      pad1.y += 5;
      pad2.y += pad2.dy; //x
    } else {
    	pad2.y = cHeight - 60;
    }
    pad2.draw()
  }

}*/



function pad2(x, dx, y, dy, len, wid, color) {
	this.y = y;
	this.x = x;
	this.dx = dx;
	this.dy = dy;
	this.len = len;
	this.wid = wid;
	this.color = color;
	this.decel = .85;
	var keys = [];

	this.draw = function(){
		c.fillStyle = this.color;
		c.fillRect(this.x, this.y, this.len, this.wid);
	}

	this.move = function(){
		c.clearRect(this.x, this.dx, this.y, this.dy, this.len, this.wid);
		/*this.y += this.dy;
		if(this.y < 10){
			this.y = 10;
		}

		if(this.y > (canvas.height - 60)){
			this.y = canvas.height - 60;
		}*/
		this.draw();
	}

	this.update = function(){
		if (keys[38]) {
        	if (this.dy > -10) {
            	this.dy -= 3;
        	}
    	}
    
    	if (keys[40]) {
        	if (this.dy < 10) {
            	this.dy += 3;
        	}
    	}

    	this.dy *= this.decel;
    	this.y += this.dy;

    	if (this.y > canvas.height - 60) {
        	this.y = canvas.height - 60;
    	} else if (y <= 10) {
        	this.y = 10;
    	}
	}

	document.body.addEventListener("keydown", function (e) {
   		keys[e.keyCode] = true;
	});
	document.body.addEventListener("keyup", function (e) {
    	keys[e.keyCode] = false;
	});
	
}

function pad1(x, dx, y, dy, len, wid, color) {
	this.y = y;
	this.x = x;
	this.dx = dx;
	this.dy = dy;
	this.len = len;
	this.wid = wid;
	this.color = color;
	this.decel = .85;
	var keys = [];

	this.draw = function(){
		c.fillStyle = this.color;
		c.fillRect(this.x, this.y, this.len, this.wid);
	}

	this.move = function(){
		c.clearRect(this.x, this.dx, this.y, this.dy, this.len, this.wid);
		/*this.y += this.dy;
		if(this.y < 10){
			this.y = 10;
		}

		if(this.y > (canvas.height - 60)){
			this.y = canvas.height - 60;
		}*/
		this.draw();
	}

	this.update = function(){
		if (keys[87]) {
        	if (this.dy > -10) {
            	this.dy -= 3;
        	}
    	}
    
    	if (keys[83]) {
        	if (this.dy < 10) {
            	this.dy += 3;
        	}
    	}

    	this.dy *= this.decel;
    	this.y += this.dy;

    	if (this.y > canvas.height - 60) {
        	this.y = canvas.height - 60;
    	} else if (y <= 10) {
        	this.y = 10;
    	}
	}

	document.body.addEventListener("keydown", function (e) {
   		keys[e.keyCode] = true;
	});
	document.body.addEventListener("keyup", function (e) {
    	keys[e.keyCode] = false;
	});
	
}

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	var color = null;
	
	this.draw = function(color) {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		c.fillStyle = color;
		c.fill();
	}

	this.hitWall1 = function(){
		if((this.x-this.radius) <= 0){
			return true;
		} else {
			return false;
		}
	}

	this.hitWall2 = function(){
		if((this.x+this.radius) >= canvas.width){
			return true;
		} else {
			return false;
		}
	}

	this.hitPad1 = function(){
		if((((this.x-this.radius) <= pad1.x+10)
				&& (this.y >= pad1.y) 
				&& (this.y < pad1.y+100))){
			return true;
		} else {
			return false;
		}
	}

	this.hitPad2 = function(){
		if((((this.x+this.radius) >= pad2.x) 
				&& (this.y >= pad2.y) 
				&& (this.y < pad2.y+100))){
			return true;
		} else {
			return false;
		}
	}

	this.update = function() {
			if( (this.x+this.radius) >= canvas.width || (this.x-this.radius) <= 0){
				if(score1.num < 100 && score2.num < 100)
				{
					reset();
				} else {
					endGame();
				}
			}

			if( (this.y+this.radius) >= canvas.height || (this.y-this.radius) <= 0){
				this.dy=-this.dy;
			}

			if(this.x <= canvas.width/2){
				color = 'white';
			} else {
				color = 'white';
			}

			if(this.hitPad1() 
				|| this.hitPad2()){
				this.dx = -this.dx;
			}
	
			this.x+=this.dx;
			this.y+=this.dy;

			//interactivity
			//if (mouse.x - this.x < 50 
				//&& mouse.x - this.x > -50
				//&& mouse.y - this.y < 50
				//&& mouse.y - this.y > -50) {
				//if(this.radius < maxRadius){
					//this.radius += 1;
				//}
			//}
			//else if(this.radius > this.minRadius) {
				//this.radius -= 1
			//}
		
			this.draw(color);
		
	}
}


function score(num, x, y, wid){
	this.num = num;
	this.x = x;
	this.y = y;
	this.wid = wid;

	this.draw = function(){
		c.fillStyle = 'white';
		c.fillText(`${this.num}`, this.x, this.y, this.wid)
	}

	this.updateL = function(){
		if(ball.hitWall2()){
			this.num += 10;
		}
		this.draw();
	}

	this.freeze = function(){
		this.num = this.num;
	}

	this.updateR = function(){
		if(ball.hitWall1()){
			this.num += 10;
		}
		this.draw();
	}
}

// function dashedLine(){
// 	this.draw = function(){

// 	}
// }


var pad1 = new pad1(10, 0, (innerHeight/2) - 50, 0, 10, 100, 'white');
var pad2 = new pad2(innerWidth - 30, 0, (innerHeight/2) - 50, 0, 10, 100, 'white');

var dx = null;
var x = (Math.random() * (innerWidth - 160)) + 80;
var y = (Math.random() * (innerHeight - 160)) + 80;
if(x <= innerWidth/2){
	dx = 5;
} else {
	dx = -5;
}
var dy = 5;

var ball = new Circle(x, y, dx, dy, 6)

var score1 = new score(0, innerWidth/4, 100, 200);
var score2 = new score(0, ((3*innerWidth)/4), 100, 200);


ball.update();
pad1.draw();
pad2.draw();
score1.updateL();
score2.updateR();

function wait(ms)
{
	var d = new Date();
	var d2 = null;
	do { d2 = new Date(); }
	while(d2-d < ms);
}

function endGame(){
	var playerName = null;
	if(score1.num === 100){
		playerName = 'Player 1';
	} else {
		playerName = 'Player 2';
	}
	c.fillText(`${playerName} Won!`, (canvas.width/2), (canvas.height/2) + 5, 200);
	ball.dx = 0;
	ball.dy = 0;
	score1.freeze();
	score2.freeze();
}

function reset() {
	wait(1750);
	pad1.y = (innerHeight/2) - 50;
	pad2.y = (innerHeight/2) - 50;
	ball.x = (Math.random() * (innerWidth - 160)) + 80;
	ball.y = (Math.random() * (innerHeight - 160)) + 80;
}

function init() {
	//pad2.x = pad2.x + innerWidth - 30;
	pad2.x = innerWidth - 30;
	pad2.draw();
	pad1.draw();
	score1.x = canvas.width/4;
	score1.draw();
	score2.x = (3*canvas.width)/4;
	score2.draw();
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth, innerHeight);
	
	ball.update();
	score1.updateL();
	score2.updateR();
	pad1.update();
	pad2.update();

	init();

}


animate();
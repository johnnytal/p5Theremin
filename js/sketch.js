let song;

function preload() {
	song = loadSound('assets/time_scratch.mp3');
}

function setup() {
 	createCanvas(400, 710);
  
  	try{window.plugins.insomnia.keepAwake();} catch(e){}
  
  	song.loop();
}

function draw() {
  	background(100);

  	var speed = Math.round((rotationX / 90) * 1000) / 1000;
  	song.rate(constrain(speed, -2, 2));

  	textSize(48);
  	text('speed: ' + speed, 20, 100);
  
  	stroke(0);
  	fill(255);
  	ellipse(170, 355 + (rotationX * (200/180)), 48, 48);
}

function handleFile(_what, fileObj) {
	song.stop();
	
	var fileReader  = new FileReader;
	
	fileReader.readAsArrayBuffer(fileObj[0]);
	
	url = URL.createObjectURL(fileObj[0]); 
	
	if (_what.id == 'audio_file_light'){
		newSfx.src = url;
	}
	
	fileReader.onload = function(){
	    var arrayBuffer = this.result;
		song = loadSound(url, playSong);
	};
}

function playSong(){
	song.loop();
}

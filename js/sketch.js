// A sound file object
let song;

function preload() {
  // Load a sound file
  song = loadSound('assets/BrainInaVat.mp3');
}

function setup() {
  createCanvas(710, 400);

  song.loop();
}

function draw() {
  background(200);

  //let speed = map(accelerationY, 0.1, height, 0, 2);
  //speed = constrain(speed, 0.01, 4);
  
  song.rate(Math.abs(rotationY / 25));
  
  // Draw some circles to show what is going on

  stroke(0);
  fill(51, 100);
  ellipse(100, mouseY, 48, 48);
}

function handleFile(_what, fileObj) {
	var fileReader  = new FileReader;
	
	fileReader.readAsArrayBuffer(fileObj[0]);
	
	url = URL.createObjectURL(fileObj[0]); 
	
	if (_what.id == 'audio_file_light'){
		newSfx.src = url;
	}
	
	fileReader.onload = function(){
	    var arrayBuffer = this.result;
		
		song.stop();
		
		song = loadSound(url, play);
	};
}

function play(){
	song.play();
}

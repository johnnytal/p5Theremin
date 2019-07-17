// A sound file object
let song;

function preload() {
  // Load a sound file
  song = loadSound('assets/BrainInaVat.mp3');
}

function setup() {
  createCanvas(710, 400);
  
  try{
      window.plugins.insomnia.keepAwake();
  } catch(e){}
  

  song.loop();
}

function draw() {
  background(200);

  var speed = (rotationY + 90) / 45;
  song.rate(speed);
  
  textSize(64);
  text(speed, 100, 100);
  
  // Draw some circles to show what is going on

  stroke(0);
  fill(51, 100);
  ellipse(100, 200 + (rotationY * 2), 48, 48);
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

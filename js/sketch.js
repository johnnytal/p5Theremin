let song;

function preload() {
  song = loadSound('assets/time_scratch.mp3');
}

function setup() {
  createCanvas(400, 710);
  
  p5.disableFriendlyErrors = true;
  
  try{
      window.plugins.insomnia.keepAwake();
  } catch(e){}
  
  song.loop();
}

function draw() {
  background(100);

  var speed = map(rotationX, -180, 180, -2, 2); 
  song.rate(speed);

  textSize(48);
  text('rotationX: ' + rotationX + '\n speed: ' + speed, 20, 100);
  
  stroke(0);
  fill(255);
  ellipse(180, 200 + (rotationX * (200/180)), 48, 48);
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
	song.loop();
	song.play();
}
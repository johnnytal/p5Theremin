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
  
  textSize(48);
  stroke(0);
  fill(255);
}

function draw() {
  background(100);

  var speed = Math.round((rotationX / 90) * 100) / 100; 
  song.rate(speed);

  text('rotationX: ' + Math.round(rotationX * 100) / 100 + '\n speed: ' + speed, 20, 100);
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
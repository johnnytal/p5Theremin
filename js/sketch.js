// A sound file object
let song;

function preload() {
  // Load a sound file
  song = loadSound('assets/time_scratch.mp3');
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

  var speed = Math.round(((rotationX + 180) / 180) * 1000) / 1000;
  song.rate(speed);

  textSize(48);
  text(speed, 20, 100);
  
  stroke(0);
  fill(51, 100);
  ellipse(350, 200 + (rotationX * (200/180)), 48, 48);
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
	
    /*reverb = new p5.Reverb();
    reverb.process(song, 0, 2);*/
}

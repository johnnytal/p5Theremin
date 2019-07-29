var song;

function preload() {
	song = loadSound('assets/time_scratch.mp3');
}

function setup() {
 	createCanvas(400, 710);
 	song.loop();
  
  	try{window.plugins.insomnia.keepAwake();} catch(e){}	
}

function draw() {
	try{
  		var speed = rotationX / 90;
  		song.rate(constrain(speed, -2, 2));
	} catch(e){alert(e+' speed');}

	try{
		background(100);
	  	stroke(0);
	  	fill(255);
	  	ellipse(170, 355 + (rotationX * (200/180)), 48, 48);
  		textSize(48);
		text('speed: ' + Math.round(speed * 1000) / 1000, 20, 100);
	catch(e){alert(e+' graphics');}
}

function handleFile(_what, fileObj) {
	song.stop();
	
	var fileReader  = new FileReader;
	
	fileReader.readAsArrayBuffer(fileObj[0]);
	
	url = URL.createObjectURL(fileObj[0]); 
	
	if (_what.id == 'audio_file'){
		newSfx.src = url;
	}
	
	fileReader.onload = function(){
	    var arrayBuffer = this.result;
		song = loadSound(url, function(){
			song.loop();
		});
	};
}
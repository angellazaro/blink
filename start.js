const { exec } = require('child_process');
var num_leds = 6;
var mode = 0;

write(1, 0);
write(3, 0);
write(5, 0);
write(2, 0);
write(4, 0);
write(6, 0);

// Cada 5 seg enciende los pines pares y apaga los impares y luego al revés
setInterval(
	function(){ 
		for(i = 0; i < num_leds ; i++){
			if(i%2 == 0 && mode == 0){
				write(i+1, mode);
				setTimeout(function(){}, 1500);
			}else{
				write(i+1, mode%2);
				setTimeout(function(){}, 1500);
			}
		}
		
		if(mode == 0){
			mode = 1;
		}else{
			mode = 0;
		}
	}, 
	1500
);

function write(pin, value){
	var command = './piTest -w O_' + pin + ',' + value;
	exec(command, (err, stdout, stderr) => {
		if (err) {
    		console.log(stdout);
	    	return;
  		}
	});
}
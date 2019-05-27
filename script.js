			function shapeAppear(){
				document.getElementById("shape").style.display = "block";
				document.getElementById("shape").style.top = Math.random()*200 + "px";
				document.getElementById("shape").style.left = Math.random()*200 + "px";
				document.getElementById("shape").style.backgroundColor = getRandomColor();
				document.getElementById("shape").style.width = document.getElementById("shape").style.height = (Math.random()*200 + 50) + "px";
				document.getElementById("shape").style.borderRadius = shapeDecider();
				start = new Date();
			}
			
			function getRandomColor(){
				var letters = '0123456789ABCDEF';
				var color = "#";
				for(i = 0; i < 6; i++){
					color+= letters[Math.floor(Math.random()*16)];
				}
				return color;
			}
			
			function shapeDecider(){
				if(Math.random() < 0.5){
					return("50%");
				}
				else{
					return("0");
				}
			}
			
			var start = new Date();
			var timeRecord = 0;
			document.getElementById("shape").onclick = function(){
				document.getElementById("shape").style.display = "none";
				var end = new Date();
				var timeTaken = (end - start)/1000;
				if(timeRecord == 0){
					timeRecord = timeTaken;
				}
				if(timeTaken < timeRecord){
					document.getElementById("recordTime").innerHTML = timeTaken + "s";
					timeRecord = timeTaken;
				}
				document.getElementById("reactionTime").innerHTML = timeTaken + "s";
				
				setTimeout(shapeAppear,Math.random()*3000);
			}
			
// JavaScript Document

var user;

//$(document).ready(function(){
	
	/* random number generation */
	
	var ranNum = Math.floor((Math.random()*100)+1);	
	var variance = $("#inbox") - ranNum;
		
	$(document).ready(function(){
			$(".play").focus();
			$("#user").hide();
			$("#feedback").hide();
			$(".enter").hide();
			$("#anew").hide();
			$("#output").hide();
		});
	
	$("button").click(function(){
			$("#user").slideDown(750);
			$("#inbox").fadeTo(1000, 1.0, function(){
					$("#inbox").focus();
				});			
		});
	
	$("#inbox").mousedown(function(){
			$("#button").slideDown(750);
			$(".enter").fadeTo(1250, 1.0);
		});
			
 	$("#inbox").change(function(){
	 		user = this.value;
			$("#output").fadeTo(750, 1.0);
			$(".output")
				.hide()
				.append(" " + user)
				.fadeTo(750, 1.0);		//would like to see each new guess fadeTo independently
			var variance = (Math.abs(user - ranNum));
			$("#feedback").slideDown(750);
	 		$("#feedback").text(this.value);
			$("#generator").text(ranNum.value);
			$("#inbox").val("");
						
			console.log(ranNum);
			console.log(user);
			console.log("variance: " + variance);
			
		if(variance == 0){
			$("#feedback").text("nice job!");
			$("#anew").fadeTo(750, 1.0);
			}
		else if(variance < 6 ){
			$("#feedback").text("h o t!");
		  	$("#feedback").animate({backgroundColor: "#E64E12"}, 500);
			}
		else if(variance > 5 && variance < 16){
			$("#feedback").text("s p r i n g");
			}
		else if(variance > 15 && variance < 41){
			$("#feedback").text("c o o l");
			}
		else if(variance > 40 && variance < 51){
			$("#feedback").text("c o l d");
			}
		else if(variance > 50){
			$("#feedback").text("w i n t e r");
			}
		else{
			$("#feedback").text("are you sure thats a number?");
			}
	 });

	$('.anew').click(function(){
		$("#user").slideUp(500);
				$("#feedback").fadeTo(500, 0.0);
				$(".anew").fadeTo(500, 0.0);
				$(".output").fadeTo(500, 0.0, function(){
						location.reload(true);
					});			
			
	});
	
	
	/*
	$("#inbox").on("keyup change", function() {
   		$("#dom_element").text(this.value);
	});
	*/
	
//});

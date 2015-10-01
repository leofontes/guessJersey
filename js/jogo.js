$(document).ready( function() {
	/*POINTS SCRIPT */
	var score = 0;

	/*VANCOUVER CANUCKS SCRIPT */
	$("#canucksButton").click(function () {
		var answer = $("#canucksInput").val().toUpperCase();
		if(answer == "VANCOUVER CANUCKS" || answer == "VANCOUVER" || answer == "CANUCKS") {
			$("#canucksContainer").fadeOut(500, function() {
				$("#canucksJersey").attr("src", "img/vancouverCanucks/respostaMini.png");
				$("#canucksContainer").fadeIn(500);
				$("#canucksFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#canucksButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#canucksFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#canucksFeedback").find("p").fadeOut(1000);
		}
	});

	/* LA KINGS SCRIPT */
	$("#kingsButton").click(function() {
		var answer = $("#kingsInput").val().toUpperCase();
		if(answer == "LA KINGS" || answer == "LOS ANGELES KINGS") {
			$("#kingsContainer").fadeOut(500, function() {
				$("#kingsJersey").attr("src", "img/laKings/respostaMini.png");
				$(this).fadeIn(500);
				$("#kingsFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#kingsButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#kingsFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#kingsFeedback").find("p").fadeOut(1000);
		}
	});

	/*REAL MADRID SCRIPT */
	$("#realButton").click(function() {
		var answer = $("#realInput").val().toUpperCase();
		if(answer == "REAL MADRID" || answer == "REAL" || answer == "MADRID") {
			$("#realContainer").fadeOut(500, function() {
				$("#realJersey").attr("src", "img/real/respostaMini.png");
				$(this).fadeIn(500);
				$("#realFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#realButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#realFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#realFeedback").find("p").fadeOut(1000);
		}
	});
	/*SAN FRANCISCO GIANTS SCRIPT */
	$("#sfGiantsButton").click(function() {
		var answer = $("#sfGiantsInput").val().toUpperCase();
		if(answer == "SAN FRANCISCO GIANTS" || answer == "SF GIANTS") {
			$("#sfGiantsContainer").fadeOut(500, function() {
				$("#sfGiantsJersey").attr("src", "img/sfGiants/respostaMini.png");
				$(this).fadeIn(500);
				$("#sfGiantsFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#sfGiantsButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#sfGiantsFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#sfGiantsFeedback").find("p").fadeOut(1000);
		}
	});
	/*NY RANGERS SCRIPT */
	$("#rangersButton").click(function() {
		var answer = $("#rangersInput").val().toUpperCase();
		if(answer == "NEW YORK RANGERS" || answer == "NY RANGERS") {
			$("#rangersContainer").fadeOut(500, function() {
				$("#rangersJersey").attr("src", "img/nyRangers/respostaMini.png");
				$(this).fadeIn(500);
				$("#rangersFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#rangersButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#rangersFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#rangersFeedback").find("p").fadeOut(1000);
		}
	});
	/*MANCHESTER UNITED SCRIPT */
	$("#unitedButton").click(function() {
		var answer = $("#unitedInput").val().toUpperCase();
		if(answer == "MANCHESTER UNITED" || answer == "MAN UNITED") {
			$("#unitedContainer").fadeOut(500, function() {
				$("#unitedJersey").attr("src", "img/manUtd/respostaMini.png");
				$(this).fadeIn(500);
				$("#unitedFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#unitedButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#unitedFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#unitedFeedback").find("p").fadeOut(1000);
		}
	});
	/* SAO PAULO SCRIPT */
	$("#saoPauloButton").click(function() {
		var answer = $("#saoPauloInput").val().toUpperCase();
		if(answer == "SAO PAULO" || answer == "SÃO PAULO" || answer == "SP") {
			$("#saoPauloContainer").fadeOut(500, function() {
				$("#saoPauloJersey").attr("src", "img/saoPaulo/respostaMini.png");
				$(this).fadeIn(500);
				$("#saoPauloFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#saoPauloButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#saoPauloFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#saoPauloFeedback").find("p").fadeOut(1000);
		}
	});
	/* FLYERS SCRIPT */
	$("#flyersButton").click(function() {
		var answer = $("#flyersInput").val().toUpperCase();
		if(answer == "FLYERS" || answer == "PHILADELPHIA FLYERS") {
			$("#flyersContainer").fadeOut(500, function() {
				$("#flyersJersey").attr("src", "img/flyers/respostaMini.png");
				$(this).fadeIn(500);
				$("#flyersFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#flyersButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#flyersFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#flyersFeedback").find("p").fadeOut(1000);
		}
	});
	/* PSG SCRIPT */
	$("#psgButton").click(function() {
		var answer = $("#psgInput").val().toUpperCase();
		if(answer == "PSG" || answer == "PARIS SAINT GERMAIN") {
			$("#psgContainer").fadeOut(500, function() {
				$("#psgJersey").attr("src", "img/psg/respostaMini.png");
				$(this).fadeIn(500);
				$("#psgFeedback").find("p").replaceWith("<p class='feedbackPositivo'>Good Job!</p>");
				$("#psgButton").attr("disabled", "disabled");
			});
			score+=10;
			var pointsText = "<h3 id='scoreText'>Your score so far is: " + score + " points.</h3>";
			$("#scoreText").replaceWith(pointsText);
		} else {
			$("#psgFeedback").find("p").replaceWith("<p class='feedbackNegativo'>Oops, try again</p>");
			$("#psgFeedback").find("p").fadeOut(1000);
		}
	})

	/* LEVEL TWO SCRIPT */
	$("#levelTwo").click(function() {
		if(score >= 70) {
			$("#levelTwoRows").toggle(500);
		} else {
			$("#feedbackLevelTwoContainer").fadeIn(500, function() {
				$(this).fadeOut(3000);
			});
		}
	});
})
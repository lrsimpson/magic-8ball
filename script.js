$(document).ready(function () {
	//*declare object*//
	var magic8Ball = {};
	//*property of object--list of answers/data resides in an array*//
	magic8Ball.listOfAnswers = [
		"It is certain",
		"Yes - definitely",
		"As I see it, yes",
		"Most likely",
		"Outlook good",
		"Yes",
		"No",
	];

	//*hide answerside of ball*//
	$("#answer").hide();

	// $("#answer").fadeIn( 4000 );
	//*define the method*//
	magic8Ball.askQuestion = function (question) {
		$("#8ball").effect("shake");
		$("#8ball").attr(
			"src",
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
		);
		//*create a random number*//
		var randomNumber = Math.random();
		//*make the randome numbert between 0 and the number of items in your array*//
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		//*round down the number to be a whole number*//
		var randomIndex = Math.floor(randomNumberForListOfAnswers);
		//*use that number to index a random number from the answers array*//
		var answer = this.listOfAnswers[randomIndex];
		$("#answer").text(answer);

		$("#answer").fadeIn(4000);
		console.log(question);
		console.log(answer);
	};

	//*clicking button to open prompt window*//
	var onClick = function () {
		$("#answer").hide();
		$("#question").attr(
			"src",
			"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
		);
		setTimeout(function () {
			var question = prompt("Ask a yes or no question!");
			magic8Ball.askQuestion(question);
		}, 500);
	};

	$("#questionButton").click(onClick);
});

(function (window) {
	var byeSpeaker = {};
	var speakWord = "GoodBye";
byeSpeaker.greeting = function (names) {
  console.log(speakWord + " " + names);
}
window.byeSpeaker = byeSpeaker;
})(window);
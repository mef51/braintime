// namespace for other scripts to use
var Templates = window.Templates = window.Templates || {};
var targetSelector = 'page';
var targetDiv = document.getElementsByClassName(targetSelector)[0];

var templates = document.getElementsByClassName("template");

page('/', function(){
	targetDiv.innerHTML = templates[0].text;
});

page('/start', function(something){
	console.log(something);
});

page();

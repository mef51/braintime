// namespace for other scripts to use
var Templates = window.Templates = window.Templates || {};
var targetDiv = document.querySelector('.page');

// load and store the templates
var templateIds = ["greeter", "game", "notfound"];
for(var i = 0; i < templateIds.length; i++){
	Templates[templateIds[i]] = document.getElementById(templateIds[i]).innerHTML;
}

// Routes
page('/', function(){
	targetDiv.innerHTML = Templates["greeter"];
});

page('/play/:duration', function(ctx){
	console.log(ctx.params.duration);
	targetDiv.innerHTML = Templates["game"];
	Braintime.initialize();
});

page('*', function(ctx){
	console.log(ctx);
	targetDiv.innerHTML = Templates["notfound"];
});

page();

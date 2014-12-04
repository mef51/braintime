// namespace for other scripts to use
var Templates = window.Templates = window.Templates || {};
var targetSelector = 'page';
var page = document.getElementsByClassName(targetSelector)[0];

var templates = document.getElementsByClassName("template");
page.innerHTML = templates[0].text;

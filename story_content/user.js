window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script4 = function()
{
  let videoContentDev = document.querySelector('.control-background');

videoContentDev.setAttribute('style', 'border-radius: 0 0 30px 30px;');
}

window.Script5 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script6 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        el.blur();
        el.focus();
    })
});
}

window.Script7 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script8 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script9 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script10 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        
        el.blur();
        el.focus();
    })})
}

window.Script11 = function()
{
  var player = GetPlayer();
var searchQuery = player.GetVar("TextEntry_Search").toLowerCase();

// Define menu items with IDs and corresponding text
var menuItems = [
    { id: 1, text: "المحور الاول / مقدمة المحور"},
    { id: 2, text: "المحور الاول / أهداف المحور"},
    { id: 3, text: "المحور الاول / مثلث التنمية"},
    { id: 4, text: "المحور الاول / القطاع غير الربحى"},
    { id: 5, text: "المحور الاول / حالة تدريبيه"},
    { id: 6, text: "المحور الاول / ملخص المحور"},
    { id: 7, text: "التقييم / التقييم"},
];

// Count how many menu items match the search query
var count = 0;

for(i=1;i<=menuItems.length;i++){
player.SetVar(`Heading_${i}`, '')
}

if(searchQuery != ''){
menuItems.forEach(function(item) {
    if (item.text.includes(searchQuery)) { 
		count++;  
    	player.SetVar(`Heading_${count}`, item.text);
	}
});
}


player.SetVar('count',count)

}

window.Script12 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script13 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        el.blur();
        el.focus();
    })
});
}

window.Script14 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script15 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script16 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script17 = function()
{
  let videoContentDev = document.querySelector('.control-background');
let videoContentModern = document.querySelector('.modern-video-controls');

videoContentDev.setAttribute('style', 'border-radius: 0 0 30px 30px; background: #0081c285;');
videoContentModern.setAttribute('style', 'height: 43px; width: 96%; position: absolute; bottom: 8px; left: 25px;');

}

window.Script18 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        
        el.blur();
        el.focus();
    })})
}

window.Script19 = function()
{
  var player = GetPlayer();
var searchQuery = player.GetVar("TextEntry_Search").toLowerCase();

// Define menu items with IDs and corresponding text
var menuItems = [
    { id: 1, text: "المحور الاول / مقدمة المحور"},
    { id: 2, text: "المحور الاول / أهداف المحور"},
    { id: 3, text: "المحور الاول / مثلث التنمية"},
    { id: 4, text: "المحور الاول / القطاع غير الربحى"},
    { id: 5, text: "المحور الاول / حالة تدريبيه"},
    { id: 6, text: "المحور الاول / ملخص المحور"},
    { id: 7, text: "التقييم / التقييم"},
];

// Count how many menu items match the search query
var count = 0;

for(i=1;i<=menuItems.length;i++){
player.SetVar(`Heading_${i}`, '')
}

if(searchQuery != ''){
menuItems.forEach(function(item) {
    if (item.text.includes(searchQuery)) { 
		count++;  
    	player.SetVar(`Heading_${count}`, item.text);
	}
});
}


player.SetVar('count',count)

}

window.Script20 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script21 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        el.blur();
        el.focus();
    })
});
}

window.Script22 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script23 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script24 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script25 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        
        el.blur();
        el.focus();
    })})
}

window.Script26 = function()
{
  var player = GetPlayer();
var searchQuery = player.GetVar("TextEntry_Search").toLowerCase();

// Define menu items with IDs and corresponding text
var menuItems = [
    { id: 1, text: "المحور الاول / مقدمة المحور"},
    { id: 2, text: "المحور الاول / أهداف المحور"},
    { id: 3, text: "المحور الاول / مثلث التنمية"},
    { id: 4, text: "المحور الاول / القطاع غير الربحى"},
    { id: 5, text: "المحور الاول / حالة تدريبيه"},
    { id: 6, text: "المحور الاول / ملخص المحور"},
    { id: 7, text: "التقييم / التقييم"},
];

// Count how many menu items match the search query
var count = 0;

for(i=1;i<=menuItems.length;i++){
player.SetVar(`Heading_${i}`, '')
}

if(searchQuery != ''){
menuItems.forEach(function(item) {
    if (item.text.includes(searchQuery)) { 
		count++;  
    	player.SetVar(`Heading_${count}`, item.text);
	}
});
}


player.SetVar('count',count)

}

};

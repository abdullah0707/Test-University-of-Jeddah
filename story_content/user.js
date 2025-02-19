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
  
let promoVid = document.querySelector('video');

promoVid.setAttribute('style', 'box-shadow: 0px 0px 3px 1px #1396D4; border-radius: 20px;');
}

window.Script7 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        el.blur();
        el.focus();
    })
});
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
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script11 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        
        el.blur();
        el.focus();
    })})
}

window.Script12 = function()
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

window.Script13 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script14 = function()
{
  
let promoVid = document.querySelector('video');

promoVid.setAttribute('style', 'box-shadow: 0px 0px 3px 1px #1396D4; border-radius: 20px;');
}

window.Script15 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        el.blur();
        el.focus();
    })
});
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
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script18 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script19 = function()
{
  let videoContentDev = document.querySelector('.control-background');
let videoContentModern = document.querySelector('.modern-video-controls');

videoContentDev.setAttribute('style', 'border-radius: 0 0 30px 30px; background: #0081c285;');
videoContentModern.setAttribute('style', 'height: 43px; width: 96%; position: absolute; bottom: 8px; left: 25px;');

}

window.Script20 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        
        el.blur();
        el.focus();
    })})
}

window.Script21 = function()
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
  
let promoVid = document.querySelector('video');

promoVid.setAttribute('style', 'box-shadow: 0px 0px 3px 1px #1396D4; border-radius: 20px;');
}

window.Script24 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        el.blur();
        el.focus();
    })
});
}

window.Script25 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script26 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script27 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script28 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        
        el.blur();
        el.focus();
    })})
}

window.Script29 = function()
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

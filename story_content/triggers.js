function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65FietArtOd":
        Script1();
        break;
      case "6ULDdOA7OX8":
        Script2();
        break;
      case "6JQarUvN2jH":
        Script3();
        break;
      case "62RxH4DtHpv":
        Script4();
        break;
      case "601vL20IkDe":
        Script5();
        break;
      case "5nL9ZCAL5DW":
        Script6();
        break;
      case "6lfPQyEt9IS":
        Script7();
        break;
      case "6CkbmRlgaRN":
        Script8();
        break;
      case "5lRxB9H5ART":
        Script9();
        break;
      case "62tr2UMRoxN":
        Script10();
        break;
      case "5WqNm7t5KDo":
        Script11();
        break;
      case "6fHSm2NXZll":
        Script12();
        break;
      case "6i3UAWFhw7P":
        Script13();
        break;
      case "6leFGcPLwgH":
        Script14();
        break;
      case "6GjQ9bxWBbL":
        Script15();
        break;
      case "6mvAnIV4cGI":
        Script16();
        break;
      case "5bz43VtY0ys":
        Script17();
        break;
      case "6ITZegA1vnF":
        Script18();
        break;
      case "5ajLWyjc94a":
        Script19();
        break;
      case "6TCjmOM2zp6":
        Script20();
        break;
      case "63DobZVMFv7":
        Script21();
        break;
      case "6GMvQqdZGTx":
        Script22();
        break;
      case "64YFaMwg54X":
        Script23();
        break;
      case "5WNbFbDiI3Q":
        Script24();
        break;
      case "5ct3fxZONr7":
        Script25();
        break;
      case "5aGQc059avi":
        Script26();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6LEXF9dOdyJ');
const duration = 250;
const easing = 'ease-out';
const id = '5WARkei5O1v';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5Vs9vje5uC3');
const duration = 250;
const easing = 'ease-out';
const id = '6BZSdzesN8g';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6F2ngL8uhO5');
const duration = 250;
const easing = 'ease-out';
const id = '6PW6wM20HJF';
const pulseAmount = 0.03;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};

function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kuNEUjwOVh":
        Script1();
        break;
      case "61624HTXjzp":
        Script2();
        break;
      case "6T2RzI8tCSa":
        Script3();
        break;
      case "67driEuuwvP":
        Script4();
        break;
      case "6o7GBEr6fQA":
        Script5();
        break;
      case "5u2WZoHCwai":
        Script6();
        break;
      case "6dcvcVDEPrG":
        Script7();
        break;
      case "6RkJQ1Ygji0":
        Script8();
        break;
      case "6W86j7pgOg5":
        Script9();
        break;
      case "5qMIZQmmTUN":
        Script10();
        break;
      case "5jRCkOOaXFX":
        Script11();
        break;
      case "6px8xMaxld4":
        Script12();
        break;
      case "64RK9OGRNra":
        Script13();
        break;
      case "5wTSFC5FNor":
        Script14();
        break;
      case "6NdGnfekSSp":
        Script15();
        break;
      case "6MxG2G79Hkb":
        Script16();
        break;
      case "5Vy2aNlfWSc":
        Script17();
        break;
      case "5v9gdW2A4AH":
        Script18();
        break;
      case "67t3ZhiJ4Td":
        Script19();
        break;
      case "5k1ADjFWlZd":
        Script20();
        break;
      case "6HGaJIoJmaZ":
        Script21();
        break;
      case "6H3wmBkMwEg":
        Script22();
        break;
      case "6TVO9wvg9fG":
        Script23();
        break;
      case "6pRZttjFvLb":
        Script24();
        break;
      case "5WS6dfM4N2H":
        Script25();
        break;
      case "64bRejPdHBn":
        Script26();
        break;
      case "6dxNJ6Ro4vl":
        Script27();
        break;
      case "5tqDOdy3aj4":
        Script28();
        break;
      case "5X6dkI1TnIT":
        Script29();
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

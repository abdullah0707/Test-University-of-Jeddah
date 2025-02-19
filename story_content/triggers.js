function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jPSRsi66wc":
        Script1();
        break;
      case "6kmNO18guEl":
        Script2();
        break;
      case "5Y0lXKoAzlF":
        Script3();
        break;
      case "6FIsRzEbQ1f":
        Script4();
        break;
      case "5YNBkMXOsy9":
        Script5();
        break;
      case "5WkWnxm3Iut":
        Script6();
        break;
      case "66jDqCRMFDV":
        Script7();
        break;
      case "5pYkZZgfFtc":
        Script8();
        break;
      case "642o4DobVc7":
        Script9();
        break;
      case "5uvLteItR4n":
        Script10();
        break;
      case "6ndl8zML8Ld":
        Script11();
        break;
      case "6MQOlVnoLBj":
        Script12();
        break;
      case "6F9Dkrjjwkz":
        Script13();
        break;
      case "5WXtV8K5Jlt":
        Script14();
        break;
      case "6O286dLs5kt":
        Script15();
        break;
      case "69lULQPVtM1":
        Script16();
        break;
      case "5wW3AyPotd1":
        Script17();
        break;
      case "5g5sXnWQmeX":
        Script18();
        break;
      case "6h2Zt0tOvjc":
        Script19();
        break;
      case "6KhCpGSzRNZ":
        Script20();
        break;
      case "6JouAvHHMNd":
        Script21();
        break;
      case "5qEubD8ZXjr":
        Script22();
        break;
      case "5fcvM4OrPXy":
        Script23();
        break;
      case "6SYWtbsUBw2":
        Script24();
        break;
      case "6gS6AerVg2e":
        Script25();
        break;
      case "6oeANI1KTVj":
        Script26();
        break;
      case "5vBkmtwDEPm":
        Script27();
        break;
      case "5hZQ27Y1xKd":
        Script28();
        break;
      case "6MEz08tJrft":
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

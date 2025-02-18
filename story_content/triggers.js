function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GT2YTBrC9X":
        Script1();
        break;
      case "6ZAgZm3qBnG":
        Script2();
        break;
      case "6q5NRmmRlVP":
        Script3();
        break;
      case "6mCPLDHBICx":
        Script4();
        break;
      case "668lzQ9Vqz8":
        Script5();
        break;
      case "5ocMVKtyTC4":
        Script6();
        break;
      case "6GC5DyJPckQ":
        Script7();
        break;
      case "63XF7eszkYt":
        Script8();
        break;
      case "6Z9oCmrH0xX":
        Script9();
        break;
      case "6G61O13Jc9E":
        Script10();
        break;
      case "67Ig4b97cJe":
        Script11();
        break;
      case "6IKWrSd2knt":
        Script12();
        break;
      case "69d5twPuWhx":
        Script13();
        break;
      case "6aV8j4aBQm3":
        Script14();
        break;
      case "5bnRDKvaGO1":
        Script15();
        break;
      case "6MNXAoyOOSY":
        Script16();
        break;
      case "6jw1Me6Cpbn":
        Script17();
        break;
      case "6Lqv6vqqWEV":
        Script18();
        break;
      case "5uMe4wR9bfn":
        Script19();
        break;
      case "5sDKHXJpRYY":
        Script20();
        break;
      case "5xSTqrkkXtV":
        Script21();
        break;
      case "5qiOpneGU8h":
        Script22();
        break;
      case "619XJ7mlX7g":
        Script23();
        break;
      case "68tScLrtkHF":
        Script24();
        break;
      case "5x5bPhxofoa":
        Script25();
        break;
      case "65xouqGgaAb":
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

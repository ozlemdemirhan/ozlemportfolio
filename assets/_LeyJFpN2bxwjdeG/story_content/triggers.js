function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5irmehAvCYb":
        Script1();
        break;
      case "6EZHDVjhvz7":
        Script2();
        break;
      case "64cZKINZvHP":
        Script3();
        break;
      case "5gXdsY9oltR":
        Script4();
        break;
      case "5sb2nivW4Ht":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('5ZDbEGajYML');
const duration = 750;
const easing = 'ease-out';
const id = '6bZGXUfMLdP';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};

window.InitUserScripts = function()
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
window.Script2 = function()
{
  const briefing = object('5Vi5r1x80Tc');
const cover = object('5hMqIHDYDBt');

cover.style.left = '0%';
briefing.style.bottom = '0%';

briefing.style.position = 'absolute';
}

window.Script3 = function()
{
  const cover = object('5hMqIHDYDBt');
const briefing = object('5Vi5r1x80Tc');

cover.style.transform = 'skew(10deg)';
cover.style.transition = 'transform 1s ease';
cover.style.transformOrigin = 'left bottom';

briefing.style.bottom = '100%';
briefing.style.transform = 'scale(1.5)';
briefing.style.transformOrigin = '50% -100%';
briefing.style.transition = 'bottom 1s ease, transform 0.5s ease 1s';

setTimeout (() => {
briefing.depth = 30;
}, 1000);
}

window.Script4 = function()
{
  const cover = object('5hMqIHDYDBt');
const briefing = object('5Vi5r1x80Tc');

cover.style.left = '0%';
cover.style.transform = '';

briefing.style.bottom = '0%';
briefing.style.transform = '';
briefing.style.transition = 'bottom 1s ease 0.5s, transform 0.5s ease';

setTimeout (() => {
briefing.depth = 5;
}, 500);
}

window.Script5 = function()
{
  const radar = object('6rV1GeiDqAu');

if (!radar) return;

// smooth animation
radar.style.transition = 'transform 0.1s linear';
radar.style.transformOrigin = 'center center';

// when mouse moves
window.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;

  // center of the screen
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;

  // angle between mouse and center (in radians)
  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

  // convert to degrees
  const deg = angle * (180 / Math.PI);

  // rotate radar to face cursor
  radar.style.transform = `rotate(${deg}deg)`;
});

}

};

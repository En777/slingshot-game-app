import Matter from 'matter-js';

var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
var int = parseInt;
var engine = Matter.Engine.create();
var render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
  }
});

var width1 = int(canvasW * 0.25)
var height1 = 20
var x1 = canvasW - width1
var y1 = int(canvasH * 0.54)
console.log('canvasW', canvasW, width1, x1)
// 堆放小球的地面，一个横杆
var groud = Matter.Bodies.rectangle(x1, y1, width1, height1, { isStatic: true });
// 小球
var ballY = canvasH - 100
var ball = Matter.Bodies.circle(100, ballY, 20);
// 弹簧位置
var sling = Matter.Constraint.create({
  pointA: { x: 100, y: ballY },
  bodyB: ball,
  stiffness: 0.05
})

var mouse = Matter.Mouse.create(render.canvas);
var mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: { render: { visible: false } }
})
render.mouse = mouse;

var firing = false;
Matter.Events.on(mouseConstraint, 'enddrag', function (e) {
  if (e.body === ball) {
    console.log('enddrag');
    firing = true;
  }
})

var boxY = ballY
Matter.Events.on(engine, 'afterUpdate', function () {
  // 小球弹出盒子范围后，重新生成一个小球
  if (firing && Math.abs(ball.position.x - 100) < 40 && Math.abs(ball.position.y - boxY < 40)) {
    ball = Matter.Bodies.circle(100, canvasH - 100, 20);
    Matter.World.add(engine.world, ball);
    sling.bodyB = ball;
    firing = false;
  }
});

var radius1 = 20
var stackX = x1 - (radius1 * 2) // 半径*2，得到直径
// 一堆砖块，用来给小球射击
var stack = Matter.Composites.stack(stackX, y1 - (radius1 * 2 * 4), 4, 4, 0, 0, function (x, y) {
  return Matter.Bodies.polygon(x, y, 8, radius1);
})
Matter.World.add(engine.world, [stack, groud, ball, sling, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);

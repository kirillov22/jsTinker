var c = 0;
$('#counter').click(function() {
  c++;
  $('#count').text("Count: " + c);
  console.log(c);
});


var randInt = 0;
var min = 0;
var max = 1000;
$('#randInt').click(function() {
  randInt = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randInt);
  $('#txtRandomInt').text('Random integer: ' + randInt);
});

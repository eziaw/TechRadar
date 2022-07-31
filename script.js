const randInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min; 
function drawRadar(ringsAmount, ringSize, marginLeft, marginTop) { 
var point_size = 8; 
var c = document.getElementById("radar"); 
var ctx = c.getContext('2d'); 
function drawCoordSys(ringsAmount, ringSize, dash, marginLeft, marginTop) { 
ctx.beginPath(); 
ctx.setLineDash([dash, dash]); 
ctx.moveTo(ringsAmount*ringSize+marginLeft, marginTop); 
ctx.lineTo(ringsAmount*ringSize+marginLeft, ringsAmount*ringSize*2+marginTop); 
ctx.moveTo(marginLeft, ringsAmount*ringSize+marginTop); 
ctx.lineTo(ringsAmount*ringSize*2+marginLeft, ringsAmount*ringSize+marginTop); 
ctx.stroke(); 
ctx.setLineDash([0, 0]); 
} 
function drawRings(ringsAmount, ringSize, marginLeft, marginTop) { 
for(i=1; i<=ringsAmount; i++) { 
ctx.beginPath(); 
ctx.arc(ringsAmount*ringSize+marginLeft, ringsAmount*ringSize+marginTop, ringSize*i, 0, 2*Math.PI);
ctx.stroke(); 
}
}
function drawPoint(center_x, center_y, angle, radius, ringNum, ringSize, label) {
ctx.fillStyle = 'black'; 
var x = center_x + (radius+ringNum*ringSize) * Math.cos(-angle*Math.PI/180);
var y = center_y + (radius+ringNum*ringSize) * Math.sin(-angle*Math.PI/180);
ctx.beginPath();
ctx.arc(x, y, point_size, 0, 2 * Math.PI);
ctx.fill();
ctx.font = 'bold 10px arial';
ctx.fillStyle = 'red'; 
ctx.fillText(label,x-6,y+4);
}
drawCoordSys(ringsAmount, ringSize, 5, marginLeft, marginTop) 
drawRings(ringsAmount, ringSize, marginLeft, marginTop) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(5, ringSize-5), 1, ringSize, 1) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(5, ringSize-5), 1, ringSize, 2) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 3, ringSize, 3) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(5, ringSize-5), 2, ringSize, 4) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(5, ringSize-5), 2, ringSize, 5) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 6) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 3, ringSize, 7) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(5, ringSize-5), 1, ringSize, 8) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 3, ringSize, 9) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 10) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 1, ringSize, 11) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 12) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 13) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 2, ringSize, 14) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 15) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 1, ringSize, 16) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 2, ringSize, 17) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 18) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(5, ringSize-5), 1, ringSize, 19) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 20) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 21) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(5, ringSize-5), 1, ringSize, 22) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 23) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 24) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(5, ringSize-5), 3, ringSize, 25) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 26) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 27) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 28) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 29) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(5, ringSize-5), 2, ringSize, 30) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 31) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(5, ringSize-5), 3, ringSize, 32) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(5, ringSize-5), 3, ringSize, 33) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 34) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 1, ringSize, 35) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 36) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 37) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 38) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 39) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 2, ringSize, 40) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 41) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 42) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 43) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 44) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 3, ringSize, 45) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 46) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 47) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(5, ringSize-5), 2, ringSize, 48) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(5, ringSize-5), 3, ringSize, 49) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 1, ringSize, 50) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 1, ringSize, 51) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 52) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(183, 267), randInRange(10, ringSize-5), 0, ringSize, 53) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 54) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 55) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 56) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 57) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 58) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 59) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 60) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 61) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 62) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(5, ringSize-5), 3, ringSize, 63) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 64) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 97), randInRange(10, ringSize-5), 0, ringSize, 65) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(273, 357), randInRange(10, ringSize-5), 0, ringSize, 66) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 67) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 68) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 69) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 70) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(93, 177), randInRange(10, ringSize-5), 0, ringSize, 71) 
drawPoint(4*ringSize+marginLeft, 4*ringSize+marginTop, randInRange(3, 90), randInRange(5, ringSize-5), 3, ringSize, 72) 
}
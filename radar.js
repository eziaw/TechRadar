function drawRadar() { 
var c = document.getElementById("radar"); 
var ctx = c.getContext('2d'); 
function drawPoint(x, y, pointSize, label) {
ctx.beginPath();
ctx.arc(x, y, pointSize, 0, 2*Math.PI);
ctx.fill();
ctx.font = 'bold 14px arial';
ctx.fillStyle = 'black'; 
if(label.toString().length>1) 
ctx.fillText(label, x-8, y+5); 
else 
ctx.fillText(label, x-4, y+5); 
}
ctx.beginPath(); 
ctx.setLineDash([5, 5]) 
ctx.moveTo(450, 450) 
ctx.lineTo(850.0, 450.0) 
ctx.stroke() 
ctx.moveTo(450, 450) 
ctx.lineTo(450.0, 50.0) 
ctx.stroke() 
ctx.moveTo(450, 450) 
ctx.lineTo(50.0, 449.99999999999994) 
ctx.stroke() 
ctx.moveTo(450, 450) 
ctx.lineTo(449.99999999999994, 850.0) 
ctx.stroke() 
ctx.moveTo(450, 450) 
ctx.lineTo(850.0, 450.0000000000001) 
ctx.stroke() 
ctx.setLineDash([0, 0]) 
ctx.beginPath(); 
ctx.arc(450, 450, 100*1, 0, 2*Math.PI);
ctx.stroke(); 
ctx.beginPath(); 
ctx.arc(450, 450, 100*2, 0, 2*Math.PI);
ctx.stroke(); 
ctx.beginPath(); 
ctx.arc(450, 450, 100*3, 0, 2*Math.PI);
ctx.stroke(); 
ctx.beginPath(); 
ctx.arc(450, 450, 100*4, 0, 2*Math.PI);
ctx.stroke(); 
ctx.fillStyle = 'blue'; 
drawPoint(527.7707493114182, 320.56773759398106, 9, 1) 
ctx.fillStyle = 'blue'; 
drawPoint(628.3097218556981, 408.8339570550727, 9, 2) 
ctx.fillStyle = 'red'; 
drawPoint(285.7250280877065, 187.10509019150794, 9, 3) 
ctx.fillStyle = 'blue'; 
drawPoint(514.7747786169948, 224.10350145449507, 9, 4) 
ctx.fillStyle = 'blue'; 
drawPoint(725.7467283342216, 386.3388516206862, 9, 5) 
ctx.fillStyle = 'blue'; 
drawPoint(511.8192528825004, 433.4355811134387, 9, 6) 
ctx.fillStyle = 'red'; 
drawPoint(366.14262938678326, 137.04003228234188, 9, 7) 
ctx.fillStyle = 'blue'; 
drawPoint(572.7932405239548, 432.7425354809519, 9, 8) 
ctx.fillStyle = 'red'; 
drawPoint(141.99883134733915, 234.33525993200655, 9, 9) 
ctx.fillStyle = 'blue'; 
drawPoint(774.5143490983755, 318.8876923044308, 9, 10) 
ctx.fillStyle = 'red'; 
drawPoint(281.92551334205575, 368.02459555044254, 9, 11) 
ctx.fillStyle = 'blue'; 
drawPoint(769.6270286149315, 280.0512942715075, 9, 12) 
ctx.fillStyle = 'blue'; 
drawPoint(628.8947498708984, 127.26532806556298, 9, 13) 
ctx.fillStyle = 'red'; 
drawPoint(181.1166821756317, 341.36408790938543, 9, 14) 
ctx.fillStyle = 'blue'; 
drawPoint(730.7288970481068, 246.03851745451183, 9, 15) 
ctx.fillStyle = 'red'; 
drawPoint(380.05355497719574, 353.72697766938126, 9, 16) 
ctx.fillStyle = 'red'; 
drawPoint(384.77760063416474, 206.58669177515478, 9, 17) 
ctx.fillStyle = 'yellow'; 
drawPoint(396.4375206152032, 469.4951481695631, 9, 18) 
ctx.fillStyle = 'green'; 
drawPoint(580.9899230472595, 482.65945590595516, 9, 19) 
ctx.fillStyle = 'green'; 
drawPoint(474.81365379103306, 453.0467335851287, 9, 20) 
ctx.fillStyle = 'yellow'; 
drawPoint(390.4543896758749, 488.6693714860669, 9, 21) 
ctx.fillStyle = 'yellow'; 
drawPoint(322.01310221664517, 569.3497130109372, 9, 22) 
ctx.fillStyle = 'green'; 
drawPoint(487.476659402887, 487.47665940288704, 9, 23) 
ctx.fillStyle = 'green'; 
drawPoint(514.9519052838328, 487.50000000000006, 9, 24) 
ctx.fillStyle = 'yellow'; 
drawPoint(126.05480846878652, 542.8897889103287, 9, 25) 
ctx.fillStyle = 'green'; 
drawPoint(538.8919506535624, 464.0791018536208, 9, 26) 
ctx.fillStyle = 'blue'; 
drawPoint(753.4372244485478, 267.67652148184084, 9, 27) 
ctx.fillStyle = 'blue'; 
drawPoint(729.524948399041, 313.6665733485969, 9, 28) 
ctx.fillStyle = 'blue'; 
drawPoint(593.7890552840528, 111.25421392950199, 9, 29) 
ctx.fillStyle = 'yellow'; 
drawPoint(390.97105747368107, 686.7521572113432, 9, 30) 
ctx.fillStyle = 'green'; 
drawPoint(462.67573219521904, 473.83958500719103, 9, 31) 
ctx.fillStyle = 'yellow'; 
drawPoint(317.01465933735113, 779.1502683712094, 9, 32) 
ctx.fillStyle = 'yellow'; 
drawPoint(337.826831041894, 795.2335154151408, 9, 33) 
ctx.fillStyle = 'red'; 
drawPoint(443.11688353822984, 406.54171301381393, 9, 34) 
ctx.fillStyle = 'red'; 
drawPoint(334.95042997341864, 360.11342460245385, 9, 35) 
ctx.fillStyle = 'green'; 
drawPoint(482.328188876086, 494.4959346906221, 9, 36) 
ctx.fillStyle = 'yellow'; 
drawPoint(441.71288464845, 517.4931383116099, 9, 37) 
ctx.fillStyle = 'yellow'; 
drawPoint(436.0, 474.24871130596426, 9, 38) 
ctx.fillStyle = 'green'; 
drawPoint(452.75637355816997, 459.61261695938316, 9, 39) 
ctx.fillStyle = 'red'; 
drawPoint(223.67274269247363, 297.34033735248613, 9, 40) 
ctx.fillStyle = 'yellow'; 
drawPoint(381.14605757066147, 471.05076274003704, 9, 41) 
ctx.fillStyle = 'blue'; 
drawPoint(463.86044395638874, 415.69419738102886, 9, 42) 
ctx.fillStyle = 'yellow'; 
drawPoint(436.61738787282286, 464.8628965095479, 9, 43) 
ctx.fillStyle = 'red'; 
drawPoint(413.5339318652737, 427.2134716379722, 9, 44) 
ctx.fillStyle = 'red'; 
drawPoint(136.1014061825204, 221.93932211052038, 9, 45) 
ctx.fillStyle = 'yellow'; 
drawPoint(424.0, 495.0333209967908, 9, 46) 
ctx.fillStyle = 'yellow'; 
drawPoint(434.3631243155941, 483.53338812035605, 9, 47) 
ctx.fillStyle = 'green'; 
drawPoint(707.2528189929908, 504.68077468507084, 9, 48) 
ctx.fillStyle = 'green'; 
drawPoint(485.74873443753734, 790.1264882159495, 9, 49) 
ctx.fillStyle = 'red'; 
drawPoint(382.2772377141776, 363.3188171032606, 9, 50) 
ctx.fillStyle = 'red'; 
drawPoint(393.8090109876132, 310.9224218149819, 9, 51) 
ctx.fillStyle = 'green'; 
drawPoint(503.8598031643945, 478.6377653299393, 9, 52) 
ctx.fillStyle = 'green'; 
drawPoint(459.135454576426, 454.067366430758, 9, 53) 
ctx.fillStyle = 'blue'; 
drawPoint(463.01557257842563, 420.7665453554368, 9, 54) 
ctx.fillStyle = 'yellow'; 
drawPoint(441.51951903843576, 455.29919264233206, 9, 55) 
ctx.fillStyle = 'blue'; 
drawPoint(652.7859120409032, 170.88913694064314, 9, 56) 
ctx.fillStyle = 'red'; 
drawPoint(427.5894885099396, 444.82612575009114, 9, 57) 
ctx.fillStyle = 'red'; 
drawPoint(417.64341433323, 434.2186387155932, 9, 58) 
ctx.fillStyle = 'red'; 
drawPoint(400.9993019915156, 404.3061098758126, 9, 59) 
ctx.fillStyle = 'blue'; 
drawPoint(474.41234255562085, 374.8665352126829, 9, 60) 
ctx.fillStyle = 'blue'; 
drawPoint(467.9730881554959, 422.323871257801, 9, 61) 
ctx.fillStyle = 'blue'; 
drawPoint(506.11233446141404, 431.7679973318781, 9, 62) 
ctx.fillStyle = 'red'; 
drawPoint(186.01639754174818, 243.75340576590443, 9, 63) 
ctx.fillStyle = 'blue'; 
drawPoint(465.0492557938046, 416.1988180672238, 9, 64) 
ctx.fillStyle = 'blue'; 
drawPoint(464.5390154902394, 428.44502311356894, 9, 65) 
ctx.fillStyle = 'yellow'; 
drawPoint(413.8085387728492, 457.69273256025707, 9, 66) 
ctx.fillStyle = 'red'; 
drawPoint(437.5974153005246, 386.1942330759018, 9, 67) 
ctx.fillStyle = 'blue'; 
drawPoint(693.5635407146244, 179.49528352622855, 9, 68) 
ctx.fillStyle = 'red'; 
drawPoint(373.99913494675167, 432.4538177611785, 9, 69) 
ctx.fillStyle = 'blue'; 
drawPoint(542.6141515545117, 127.01607016472485, 9, 70) 
ctx.fillStyle = 'red'; 
drawPoint(445.55505711986945, 399.19407039732096, 9, 71) 
ctx.fillStyle = 'blue'; 
drawPoint(801.5970007692208, 355.78986758268246, 9, 72) 
}
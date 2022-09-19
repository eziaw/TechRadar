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
ctx.fillStyle = 'red'; 
drawPoint(545.0, 285.45517328095667, 9, 1) 
ctx.fillStyle = 'red'; 
drawPoint(498.3991614341714, 269.37187048394424, 9, 2) 
ctx.fillStyle = 'green'; 
drawPoint(301.91290230256527, 101.12866054152511, 9, 3) 
ctx.fillStyle = 'yellow'; 
drawPoint(667.9212347253814, 407.64040302640706, 9, 4) 
ctx.fillStyle = 'yellow'; 
drawPoint(535.5977074418604, 186.55734498624247, 9, 5) 
ctx.fillStyle = 'blue'; 
drawPoint(465.0492557938046, 416.1988180672238, 9, 6) 
ctx.fillStyle = 'green'; 
drawPoint(297.2849696224039, 174.4947922510903, 9, 7) 
ctx.fillStyle = 'red'; 
drawPoint(612.0046198326993, 352.6578038419998, 9, 8) 
ctx.fillStyle = 'green'; 
drawPoint(289.3081206280631, 182.56380218094097, 9, 9) 
ctx.fillStyle = 'green'; 
drawPoint(623.0527931697783, 161.9917869640903, 9, 10) 
ctx.fillStyle = 'red'; 
drawPoint(316.6223631841803, 390.61645011093316, 9, 11) 
ctx.fillStyle = 'green'; 
drawPoint(731.7933108296625, 267.0012842349509, 9, 12) 
ctx.fillStyle = 'green'; 
drawPoint(566.9708890173788, 128.62512369121936, 9, 13) 
ctx.fillStyle = 'yellow'; 
drawPoint(350.7320779759518, 191.3982218602751, 9, 14) 
ctx.fillStyle = 'green'; 
drawPoint(753.086256386927, 237.77671855011297, 9, 15) 
ctx.fillStyle = 'red'; 
drawPoint(330.66599271047573, 424.63477372023334, 9, 16) 
ctx.fillStyle = 'yellow'; 
drawPoint(329.815279926812, 223.96541622811466, 9, 17) 
ctx.fillStyle = 'blue'; 
drawPoint(400.99464116963975, 474.96947748567504, 9, 18) 
ctx.fillStyle = 'red'; 
drawPoint(554.914704796691, 534.9582527917281, 9, 19) 
ctx.fillStyle = 'blue'; 
drawPoint(496.5908183397727, 470.7435687968658, 9, 20) 
ctx.fillStyle = 'blue'; 
drawPoint(372.9452050955555, 478.0456517527048, 9, 21) 
ctx.fillStyle = 'red'; 
drawPoint(402.9281555396393, 603.9650657100487, 9, 22) 
ctx.fillStyle = 'blue'; 
drawPoint(517.2177907077985, 475.80249236726166, 9, 23) 
ctx.fillStyle = 'blue'; 
drawPoint(512.4820102359907, 467.916428128105, 9, 24) 
ctx.fillStyle = 'green'; 
drawPoint(200.5984074416227, 747.2252439301634, 9, 25) 
ctx.fillStyle = 'blue'; 
drawPoint(478.71777399350555, 454.0360199278419, 9, 26) 
ctx.fillStyle = 'green'; 
drawPoint(762.9176427217076, 336.1072922725523, 9, 27) 
ctx.fillStyle = 'green'; 
drawPoint(504.35187960974923, 141.7551733071789, 9, 28) 
ctx.fillStyle = 'green'; 
drawPoint(722.2234388662127, 279.8959161811412, 9, 29) 
ctx.fillStyle = 'yellow'; 
drawPoint(227.1365018174508, 583.9098994766141, 9, 30) 
ctx.fillStyle = 'blue'; 
drawPoint(476.38451607214813, 487.6809940372936, 9, 31) 
ctx.fillStyle = 'green'; 
drawPoint(280.52076583429346, 768.7440810220726, 9, 32) 
ctx.fillStyle = 'green'; 
drawPoint(221.69145791130336, 712.6389339175246, 9, 33) 
ctx.fillStyle = 'blue'; 
drawPoint(438.9753747499665, 443.1110495649683, 9, 34) 
ctx.fillStyle = 'red'; 
drawPoint(403.9564678381328, 308.29257907202214, 9, 35) 
ctx.fillStyle = 'blue'; 
drawPoint(502.06579638460965, 512.0495998926373, 9, 36) 
ctx.fillStyle = 'blue'; 
drawPoint(430.52913905409747, 457.86673846173414, 9, 37) 
ctx.fillStyle = 'blue'; 
drawPoint(428.46559051577105, 472.2995338104982, 9, 38) 
ctx.fillStyle = 'blue'; 
drawPoint(497.67917001438207, 475.3514643904381, 9, 39) 
ctx.fillStyle = 'yellow'; 
drawPoint(341.4026450648205, 254.08518560077533, 9, 40) 
ctx.fillStyle = 'blue'; 
drawPoint(447.6467949458132, 476.8972568484771, 9, 41) 
ctx.fillStyle = 'blue'; 
drawPoint(468.8829529585151, 395.1599226152396, 9, 42) 
ctx.fillStyle = 'blue'; 
drawPoint(375.6573248931513, 491.20881772093867, 9, 43) 
ctx.fillStyle = 'blue'; 
drawPoint(440.9702947613196, 398.7899968433652, 9, 44) 
ctx.fillStyle = 'green'; 
drawPoint(181.88444490835775, 225.02433660971118, 9, 45) 
ctx.fillStyle = 'blue'; 
drawPoint(418.6812784831634, 520.3430002384803, 9, 46) 
ctx.fillStyle = 'blue'; 
drawPoint(428.14522127065766, 476.04551106604526, 9, 47) 
ctx.fillStyle = 'yellow'; 
drawPoint(526.6907412026941, 649.7862112704013, 9, 48) 
ctx.fillStyle = 'green'; 
drawPoint(745.9449951996129, 563.6026400058604, 9, 49) 
ctx.fillStyle = 'red'; 
drawPoint(407.93152237094273, 334.4178076433333, 9, 50) 
ctx.fillStyle = 'red'; 
drawPoint(399.157919615525, 335.8068177946749, 9, 51) 
ctx.fillStyle = 'blue'; 
drawPoint(469.39238480985347, 484.98478828557586, 9, 52) 
ctx.fillStyle = 'blue'; 
drawPoint(462.618681599723, 468.0213449743578, 9, 53) 
ctx.fillStyle = 'blue'; 
drawPoint(472.5733294594941, 387.9802870281301, 9, 54) 
ctx.fillStyle = 'blue'; 
drawPoint(440.6348351646022, 473.1795963641697, 9, 55) 
ctx.fillStyle = 'green'; 
drawPoint(794.3495612149816, 266.9060905135026, 9, 56) 
ctx.fillStyle = 'blue'; 
drawPoint(432.69504831500296, 396.7408350874714, 9, 57) 
ctx.fillStyle = 'blue'; 
drawPoint(435.2382699519391, 380.5515203478998, 9, 58) 
ctx.fillStyle = 'blue'; 
drawPoint(437.40660630514805, 385.2126058924542, 9, 59) 
ctx.fillStyle = 'blue'; 
drawPoint(457.77817459305203, 442.22182540694797, 9, 60) 
ctx.fillStyle = 'blue'; 
drawPoint(512.2935697836888, 403.0584281941402, 9, 61) 
ctx.fillStyle = 'blue'; 
drawPoint(474.57456132866974, 432.7927069094686, 9, 62) 
ctx.fillStyle = 'green'; 
drawPoint(171.5121648977971, 207.9142183025028, 9, 63) 
ctx.fillStyle = 'blue'; 
drawPoint(508.0237020535574, 416.5, 9, 64) 
ctx.fillStyle = 'blue'; 
drawPoint(518.7139028413364, 436.6433703236419, 9, 65) 
ctx.fillStyle = 'blue'; 
drawPoint(420.1546473880185, 470.13094452494687, 9, 66) 
ctx.fillStyle = 'blue'; 
drawPoint(394.61083537392386, 396.5113054746572, 9, 67) 
ctx.fillStyle = 'green'; 
drawPoint(628.0, 141.69495625273987, 9, 68) 
ctx.fillStyle = 'blue'; 
drawPoint(433.1567063713709, 406.12171995463154, 9, 69) 
ctx.fillStyle = 'green'; 
drawPoint(783.2345621565505, 373.06673941439817, 9, 70) 
ctx.fillStyle = 'blue'; 
drawPoint(444.0062945053454, 435.1650583269314, 9, 71) 
ctx.fillStyle = 'green'; 
drawPoint(685.224114710739, 222.8467128599079, 9, 72) 
}
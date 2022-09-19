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
drawPoint(618.3096370494942, 398.54257996879835, 9, 1) 
ctx.fillStyle = 'red'; 
drawPoint(560.2020830995639, 388.91398784896154, 9, 2) 
ctx.fillStyle = 'green'; 
drawPoint(196.22026553814786, 213.34656905831298, 9, 3) 
ctx.fillStyle = 'yellow'; 
drawPoint(685.6492424838248, 349.97283110674596, 9, 4) 
ctx.fillStyle = 'yellow'; 
drawPoint(473.93701808829263, 222.25448596066542, 9, 5) 
ctx.fillStyle = 'blue'; 
drawPoint(465.48656378147825, 427.88289480419724, 9, 6) 
ctx.fillStyle = 'green'; 
drawPoint(111.29380264880649, 420.3670474657961, 9, 7) 
ctx.fillStyle = 'red'; 
drawPoint(582.3858066059292, 346.56887214528945, 9, 8) 
ctx.fillStyle = 'green'; 
drawPoint(352.34785062260596, 130.59421150834612, 9, 9) 
ctx.fillStyle = 'green'; 
drawPoint(583.2393148148424, 136.10784497271788, 9, 10) 
ctx.fillStyle = 'red'; 
drawPoint(401.5493400673301, 335.8573981718974, 9, 11) 
ctx.fillStyle = 'green'; 
drawPoint(740.310476954631, 308.406119587128, 9, 12) 
ctx.fillStyle = 'green'; 
drawPoint(796.0357078251793, 281.2271084862052, 9, 13) 
ctx.fillStyle = 'yellow'; 
drawPoint(262.8886299204428, 354.6619950546951, 9, 14) 
ctx.fillStyle = 'green'; 
drawPoint(789.7023920492852, 420.27989172304854, 9, 15) 
ctx.fillStyle = 'red'; 
drawPoint(427.00413363908604, 304.80981393251477, 9, 16) 
ctx.fillStyle = 'yellow'; 
drawPoint(352.60228571186286, 208.93219781263528, 9, 17) 
ctx.fillStyle = 'blue'; 
drawPoint(413.2948186010154, 459.83512371389577, 9, 18) 
ctx.fillStyle = 'red'; 
drawPoint(601.1673280959776, 465.8883264166833, 9, 19) 
ctx.fillStyle = 'blue'; 
drawPoint(487.914346458579, 500.3140371329795, 9, 20) 
ctx.fillStyle = 'blue'; 
drawPoint(414.6167240293677, 460.81775307474123, 9, 21) 
ctx.fillStyle = 'red'; 
drawPoint(336.8539163073212, 517.9850258881272, 9, 22) 
ctx.fillStyle = 'blue'; 
drawPoint(520.1546446645369, 466.19647591275833, 9, 23) 
ctx.fillStyle = 'blue'; 
drawPoint(523.0558888913122, 470.948439042092, 9, 24) 
ctx.fillStyle = 'green'; 
drawPoint(187.49611223308227, 620.4720179597034, 9, 25) 
ctx.fillStyle = 'blue'; 
drawPoint(481.49083339154436, 486.22605985069305, 9, 26) 
ctx.fillStyle = 'green'; 
drawPoint(549.386513319368, 79.08448270499775, 9, 27) 
ctx.fillStyle = 'green'; 
drawPoint(754.3380852144492, 351.1145618000168, 9, 28) 
ctx.fillStyle = 'green'; 
drawPoint(666.4994795668674, 200.94583852648523, 9, 29) 
ctx.fillStyle = 'yellow'; 
drawPoint(272.2018395955701, 565.4634754231857, 9, 30) 
ctx.fillStyle = 'blue'; 
drawPoint(474.09021032674394, 484.40438586013767, 9, 31) 
ctx.fillStyle = 'green'; 
drawPoint(117.13021929669628, 558.1559480312317, 9, 32) 
ctx.fillStyle = 'green'; 
drawPoint(67.76461218968166, 510.5401379705693, 9, 33) 
ctx.fillStyle = 'blue'; 
drawPoint(443.1901425039068, 436.6349021371745, 9, 34) 
ctx.fillStyle = 'red'; 
drawPoint(281.43397879215433, 411.0834675985114, 9, 35) 
ctx.fillStyle = 'blue'; 
drawPoint(527.9496051828188, 467.9960843475092, 9, 36) 
ctx.fillStyle = 'blue'; 
drawPoint(414.7328848624516, 498.54101966249686, 9, 37) 
ctx.fillStyle = 'blue'; 
drawPoint(432.386031320628, 504.21022142882373, 9, 38) 
ctx.fillStyle = 'blue'; 
drawPoint(457.77817459305203, 457.77817459305203, 9, 39) 
ctx.fillStyle = 'yellow'; 
drawPoint(261.95676296502995, 345.7659316470375, 9, 40) 
ctx.fillStyle = 'blue'; 
drawPoint(405.68365111445064, 457.81416799501187, 9, 41) 
ctx.fillStyle = 'blue'; 
drawPoint(456.98811421776804, 423.92000269019513, 9, 42) 
ctx.fillStyle = 'blue'; 
drawPoint(396.3064249653648, 481.0, 9, 43) 
ctx.fillStyle = 'blue'; 
drawPoint(423.02832527405434, 383.2427624711913, 9, 44) 
ctx.fillStyle = 'green'; 
drawPoint(410.5927693480947, 75.06524544616093, 9, 45) 
ctx.fillStyle = 'blue'; 
drawPoint(414.6088977220174, 513.8472386211758, 9, 46) 
ctx.fillStyle = 'blue'; 
drawPoint(382.11598164598007, 501.1542769679241, 9, 47) 
ctx.fillStyle = 'yellow'; 
drawPoint(617.4126672806182, 623.3608918816151, 9, 48) 
ctx.fillStyle = 'green'; 
drawPoint(683.4778650794897, 738.3211517005361, 9, 49) 
ctx.fillStyle = 'red'; 
drawPoint(273.83506763231037, 378.82474725097666, 9, 50) 
ctx.fillStyle = 'red'; 
drawPoint(395.2976420115017, 321.12932051665837, 9, 51) 
ctx.fillStyle = 'blue'; 
drawPoint(461.82016130410085, 459.23492212988486, 9, 52) 
ctx.fillStyle = 'blue'; 
drawPoint(477.8155156370036, 461.2381978024774, 9, 53) 
ctx.fillStyle = 'blue'; 
drawPoint(468.4194173975324, 389.7528003743288, 9, 54) 
ctx.fillStyle = 'blue'; 
drawPoint(435.76494945019533, 485.23298647353795, 9, 55) 
ctx.fillStyle = 'green'; 
drawPoint(774.0787725761828, 369.198086869711, 9, 56) 
ctx.fillStyle = 'blue'; 
drawPoint(409.07645727902013, 440.55205571755766, 9, 57) 
ctx.fillStyle = 'blue'; 
drawPoint(439.64723819589915, 411.36296694843725, 9, 58) 
ctx.fillStyle = 'blue'; 
drawPoint(426.53850716312655, 432.9542276835183, 9, 59) 
ctx.fillStyle = 'blue'; 
drawPoint(463.4223092215014, 419.8529998977942, 9, 60) 
ctx.fillStyle = 'blue'; 
drawPoint(466.1129138269721, 439.9315339795691, 9, 61) 
ctx.fillStyle = 'blue'; 
drawPoint(461.3308376480212, 431.1423193845535, 9, 62) 
ctx.fillStyle = 'green'; 
drawPoint(136.26476703731623, 230.32022487754924, 9, 63) 
ctx.fillStyle = 'blue'; 
drawPoint(481.49659287464044, 412.46382228717005, 9, 64) 
ctx.fillStyle = 'blue'; 
drawPoint(480.3086256386927, 428.7776718550113, 9, 65) 
ctx.fillStyle = 'blue'; 
drawPoint(439.8744466120232, 454.298042413382, 9, 66) 
ctx.fillStyle = 'blue'; 
drawPoint(441.0105521589818, 364.4711169983285, 9, 67) 
ctx.fillStyle = 'green'; 
drawPoint(728.1597755393077, 276.1864813315088, 9, 68) 
ctx.fillStyle = 'blue'; 
drawPoint(411.8752675489481, 391.2930602438203, 9, 69) 
ctx.fillStyle = 'green'; 
drawPoint(540.9276001687712, 152.589220895496, 9, 70) 
ctx.fillStyle = 'blue'; 
drawPoint(427.3494216807192, 446.0060919136606, 9, 71) 
ctx.fillStyle = 'green'; 
drawPoint(815.2794444565611, 345.25780478954033, 9, 72) 
}
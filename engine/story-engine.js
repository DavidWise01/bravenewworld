/* BNW / PIXEL STORY ENGINE 1.0 — original code and procedural sprites.
   Static Pages-safe: no external dependencies, no model calls, no copyrighted novel passages. */
(()=>{'use strict';
const data=window.BNW_CHAPTER;if(!data)throw Error('Missing BNW_CHAPTER');
const $=id=>document.getElementById(id),C=$('screen'),g=C.getContext('2d',{alpha:false});
const W=320,H=180;C.width=960;C.height=540;g.imageSmoothingEnabled=false;
let scene=0,frame=0,playing=true,inspected=new Set(),choices={},sound=false,selected=-1,particles=[];
const key='bnw.story.'+data.id+'.v1';
try{const saved=JSON.parse(localStorage.getItem(key)||'{}');scene=Math.min(data.scenes.length-1,Math.max(0,saved.scene||0));inspected=new Set((saved.inspected||[]).filter(Number.isInteger));choices=saved.choices||{}}catch(e){}
const col={bg:'#0e1a34',steel:'#253f62',edge:'#5a8bb0',teal:'#73eff0',gold:'#ffbc69',lilac:'#d4a3fa',ink:'#071120',red:'#f38a88',paper:'#d8f8ee'};
const rect=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(Math.floor(x),Math.floor(y),Math.ceil(w),Math.ceil(h))};
const outline=(x,y,w,h,c)=>{rect(x,y,w,2,c);rect(x,y+h-2,w,2,c);rect(x,y,2,h,c);rect(x+w-2,y,2,h,c)};
const type=(str,x,y,c='#d8f8ee',size=7)=>{g.fillStyle=c;g.font='bold '+size+'px monospace';g.fillText(str,x,y)};
const windowPane=(x,y,w,h)=>{rect(x,y,w,h,'#132c48');outline(x,y,w,h,'#3f789b');rect(x+4,y+4,w-8,h-8,'#0e1e36')};
function scientist(x,y,accent='#c8eff3',t=0){const bob=Math.sin(t/24+x)*0.8;rect(x-6,y-17+bob,12,9,'#dab59f');rect(x-8,y-23+bob,16,6,'#343450');rect(x-9,y-8+bob,18,20,accent);rect(x-7,y+12+bob,6,11,'#1c3049');rect(x+1,y+12+bob,6,11,'#1c3049');rect(x-11,y-3+bob,4,12,'#d1a99c');rect(x+7,y-3+bob,4,12,'#d1a99c');rect(x+4,y-15+bob,2,2,'#26324a')}
function student(x,y,n,t=0){const pal=['#f4b970','#bfa1fb','#83bfb7','#e495a4'];scientist(x,y,pal[n%4],t);rect(x-8,y-7,16,3,'#243a5f')}
function embryo(x,y,t,k=0){const p=Math.sin(t/22+x)*2;rect(x-5,y-13+p,10,9,k%2?'#ffb8b1':'#f5ba78');rect(x-10,y-4+p,15,5,'#ffc6aa');rect(x-5,y+1+p,7,7,'#f5ba78');rect(x-2,y-7+p,2,2,'#313854')}
function capsule(x,y,w,h,t,i){rect(x-5,y-8,w+10,7,'#7b98bb');rect(x-2,y-3,w+4,h+6,'#61c7ef');rect(x,y,w,h,'#135c8a');rect(x+2,y+2,w-4,h-4,'#2e8eac');rect(x+3,y+3,2,h-6,'#9de7ff');rect(x+4,y+3,w-8,2,'#95e9ff');embryo(x+w/2,y+h*.58,t,i);rect(x-4,y+h+3,w+8,8,'#617c9d');rect(x,y+h+12,w,3,'#ffe0a0');}
function lab(t,mode){rect(0,0,W,H,'#101936');for(let x=0;x<W;x+=36){rect(x,16,3,126,'#345876');rect(x+5,10,26,3,'#5f819c')}rect(0,18,W,8,'#22465f');for(let x=5;x<320;x+=39)rect(x,18,23,4,'#64d4ee');
rect(0,143,W,37,'#142840');for(let x=0;x<320;x+=25)rect(x,147,18,2,'#50779b');for(let y=152;y<180;y+=9)rect(0,y,W,1,'#35546a');
for(let j=0;j<5;j++){rect(9+j*63,32,55,99,'#25415e');rect(15+j*63,38,43,84,'#0e3357')}
if(mode===0||mode===1){for(let j=0;j<5;j++)capsule(22+j*60,48,27,61,t,j);}
else if(mode===2){for(let j=0;j<6;j++){capsule(9+j*51,48,19,55,t,j);rect(16+j*51,117,23,7,'#f3a958')}}
else if(mode===3){for(let j=0;j<5;j++){rect(21+j*59,35,39,17,['#bb6380','#be8b56','#a69f5a','#42948a','#4183b4'][j]);type(['A','B','G','D','E'][j],35+j*59,47,'#fff3db',10);capsule(26+j*59,64,25,43,t,j)}}
else if(mode===4){for(let j=0;j<4;j++)capsule(25+j*75,44,33,72,t,j);for(let j=0;j<4;j++){rect(15+j*75,116,58,9,'#f0bc6d');type('O2 '+(98-j*23)+'%',20+j*75,123,'#15263a',6)}}
else if(mode===5){rect(85,38,150,85,'#1c5269');rect(102,48,115,61,'#071e38');for(let j=0;j<5;j++){rect(110+j*20,59,14,22,['#ecaa88','#dbbb86','#a3cb82','#8cb5a8','#7f9bbd'][j]);type(['A','B','G','D','E'][j],114+j*20,75,'#1a2e45',7)}}
else{for(let j=0;j<4;j++)capsule(35+j*70,52,24,57,t,j);rect(114,40,96,70,'#0b233d');outline(114,40,96,70,'#e1a86a');type('QUESTION',132,68,'#ffd38b',10);type('WHO CHOOSES?',121,89,'#89f2e5',8)}
rect(0,0,320,15,'#080e27');type('CENTRAL LONDON HATCHERY / BNW · '+data.id,5,10,'#91ecf2',7);}
function hallway(t){lab(t,0);rect(39,102,236,43,'#26374b');rect(40,103,234,4,'#f0aa55');for(let j=0;j<4;j++)student(56+j*29,120,j,t);scientist(213,116,'#f0d2ab',t);rect(206,110,24,3,'#f7b468')}
function nursery(t,mode){
rect(0,0,W,H,'#151c42');for(let x=0;x<320;x+=42){rect(x,15,3,122,'#43577c');rect(x+5,22,30,6,'#8f79af')}
rect(0,125,320,33,'#29385b');for(let j=0;j<320;j+=22)rect(j,139,13,2,'#625c91');
for(let j=0;j<5;j++){rect(12+j*62,43,49,70,'#1c3357');outline(12+j*62,43,49,70,'#6399bd')}
if(mode===0){rect(48,35,216,68,'#21455f');outline(48,35,216,68,'#8bd9dc');type('NEO-PAVLOVIAN',103,63,'#ffe1a6',11);type('CONDITIONING ROOMS',91,80,'#9ff0e6',9)}
if(mode===1||mode===2||mode===3){for(let j=0;j<5;j++){let x=26+j*59;rect(x,100,34,4,'#e5b882');rect(x+10,90,14,10,'#ba9bd8');rect(x+17,83,4,10,'#6de2b9');rect(x+6,83,4,9,'#f78c92');rect(x+1,83,4,9,'#ffd18e');rect(x+8,108,20,13,'#9ee3ef');rect(x+11,111,16,2,'#b6c1fb');rect(x+11,117,16,2,'#b6c1fb');}}
if(mode===2){for(let j=0;j<7;j++){const x=(j*47+(t*5)%320)%320;rect(x,48,4,13,'#ff9e83');rect(x+1,42,2,5,'#e6b6f3');}rect(0,24,320,9,Math.floor(t/9)%2?'#982f5a':'#ed7a67');type('AVERSIVE STIMULUS',107,31,'#fff0da',7)}
if(mode===3){type('LEARNED AVOIDANCE',113,33,'#f9be8f',8);for(let j=0;j<4;j++)rect(50+j*59,67,20,4,'#ef8f9d')}
if(mode===4){rect(65,37,198,83,'#162945');outline(65,37,198,83,'#d6a177');type('ECONOMIC PLAN',121,52,'#fff0ba',9);for(let j=0;j<5;j++){rect(80,64+j*10,100+j*11,5,['#84d9cb','#d1b275','#a6cb9b','#e79d7a','#99ace6'][j])}}
if(mode===5){for(let j=0;j<6;j++){rect(21+j*49,61,35,49,'#2d4270');rect(24+j*49,68,29,31,'#759bce');rect(27+j*49,86,23,12,'#f2c2a4');rect(33+j*49,77,12,12,'#e7b6a1')}for(let j=0;j<5;j++){let x=35+j*62;rect(x,34,34,8,'#c5a6f2');type('zzz',x+6,40,'#15283b',7)}type('HYPNOPAEDIA',104,23,'#fdd8ab',9)}
if(mode===6){rect(61,40,202,70,'#0d2a46');outline(61,40,202,70,'#e7c08e');type('REPEAT != CHOOSE',92,70,'#f6c691',10);type('WHO OWNS THE THOUGHT?',79,90,'#8ff2e6',8)}
if(mode!==5){for(let j=0;j<4;j++){let x=55+j*56,dy=Math.sin(t/21+j)*1.5;rect(x-7,111+dy,14,9,'#e6baa0');rect(x-10,120+dy,20,13,['#a990db','#e49b8d','#8fc4c9','#e2b782'][j])}}
scientist(270,120,'#e4ddcf',t);
rect(0,0,320,15,'#081329');type('CONDITIONING NURSERY / BNW · '+data.id,5,10,'#8feedd',7);
}
function worldState(t,mode){
rect(0,0,W,H,'#101b37');for(let y=16;y<139;y+=34){rect(0,y,320,2,'#2b4267')}for(let x=0;x<320;x+=43){rect(x,16,3,121,'#405a78')}
rect(0,140,320,20,'#203751');for(let x=0;x<320;x+=20)rect(x,147,11,2,'#6f8196');
const tree=(x,y)=>{rect(x-2,y-1,5,24,'#8d6b69');for(let j=0;j<4;j++)rect(x-12+j*4,y-19+Math.sin(t/34+j+x)*1.5,14,13,'#45998c')};
const podium=(x,y)=>{rect(x,y,37,38,'#3d6281');rect(x+3,y+3,31,5,'#e0ae76');rect(x+5,y+11,26,19,'#25445c')};
if(mode===0){rect(0,19,320,99,'#204e67');rect(0,101,320,16,'#407d7b');for(let j=0;j<5;j++)tree(22+j*65,51);for(let j=0;j<4;j++){rect(37+j*56,104,18,9,'#b8a6ef');rect(43+j*56,96,9,9,'#e3bda0')};scientist(260,114,'#eed6aa',t);type('CULTIVATED GARDEN',115,31,'#ffe3ac',9)}
if(mode===1||mode===2){rect(17,26,286,102,'#223c5b');for(let j=0;j<6;j++){rect(29+j*45,37,36,53,'#355a77');rect(33+j*45,43,28,34,'#193b59')}podium(207,80);scientist(225,67,'#d6ab88',t);for(let j=0;j<4;j++)student(42+j*36,116,j,t);type('WORLD CONTROLLER',174,28,'#ffcf87',8);if(mode===2){for(let j=0;j<4;j++){rect(50+j*62,42,38,13,['#936e87','#bf9875','#8bafa9','#a6a0bd'][j]);type(['PAST','WAR','CRISIS','STATE'][j],52+j*62,51,'#f8e0bb',6)}}}
if(mode===3){rect(20,25,280,96,'#4a5c83');for(let j=0;j<5;j++){rect(27+j*57,34,44,70,'#2d4167');outline(27+j*57,34,44,70,'#9ba5bf');rect(40+j*57,47,18,29,'#5c759a')}scientist(111,106,'#c9a5e7',t);scientist(207,106,'#f2bb7e',t);type('LENINA + FANNY',105,23,'#f3d9bc',9)}
if(mode===4){rect(19,28,282,99,'#2c425f');for(let j=0;j<6;j++)rect(29+j*47,40,29,73,'#182d48');scientist(60,110,'#b4accb',t);scientist(216,110,'#f3c58c',t);scientist(251,110,'#b7dbc8',t);type('BERNARD HEARS',113,27,'#f9c88c',9);for(let j=0;j<3;j++){rect(83+j*15,58,12,5,'#d5a7e2')}}
if(mode===5){rect(33,33,254,90,'#30476b');rect(51,45,220,65,'#112841');outline(51,45,220,65,'#7ec6cf');type('DISCOMFORT',110,60,'#ffcf9d',10);type('IS NOT A FAILURE',94,77,'#a7e3e6',8);type('OF THOUGHT',120,91,'#d5b1eb',8);scientist(30,114,'#bda5da',t);scientist(287,114,'#f2bb88',t)}
if(mode===6){rect(12,27,92,102,'#263e5b');rect(114,27,92,102,'#3c4269');rect(216,27,92,102,'#254d5e');outline(12,27,92,102,'#77b7d7');outline(114,27,92,102,'#b29ee5');outline(216,27,92,102,'#83d3ce');type('MOND',38,43,'#ffe2a8',10);type('LENINA',133,43,'#ffe2a8',9);type('BERNARD',234,43,'#ffe2a8',9);scientist(57,95,'#f0cd9e',t);scientist(159,95,'#dcb0cf',t);scientist(261,95,'#83bcb0',t);type('ONE SHARED CULTURE',102,137,'#ffe8bb',8)}
rect(0,0,320,15,'#07142b');type('WORLD STATE / BNW · '+data.id,5,10,'#9bece5',8);
}
function bernardHelmholtz(t,mode){
rect(0,0,W,H,'#101b35');for(let j=0;j<8;j++){rect(j*45,18,3,125,'#344c6c');rect(j*45+6,25,33,5,'#6276a3')}
rect(0,140,W,20,'#233750');for(let j=0;j<320;j+=23)rect(j,144,15,2,'#476180');
const bernard=(x,y)=>{scientist(x,y,'#526b9a',t);rect(x-8,y-24,16,5,'#272945');rect(x-9,y-12,18,2,'#dd986f')};
const helm=(x,y)=>{scientist(x,y,'#c09161',t);rect(x-8,y-25,16,6,'#b36c40');rect(x-11,y-9,22,4,'#bf7d56')};
const lenina=(x,y)=>{scientist(x,y,'#c99bc8',t);rect(x-8,y-24,16,6,'#d2ad78');rect(x-4,y-17,8,3,'#d5a6ab')};
const holo=(x,y,w,h,label)=>{rect(x,y,w,h,'#1c3a58');outline(x,y,w,h,'#88cad5');type(label,x+5,y+10,'#ffe0a5',7)};
if(mode===0){for(let j=0;j<4;j++){rect(21+j*77,35,50,98,'#385775');rect(27+j*77,43,38,72,'#274059')}type('PUBLIC LIFT / RESERVATION INVITATION',28,31,'#ffcd91',8);bernard(104,109);lenina(171,106);for(let j=0;j<3;j++)student(26+j*88,117,j,t);rect(130,45,44,12,'#e8a976');type('YES',142,54,'#17283d',9)}
if(mode===1){rect(0,18,320,92,'#28496d');for(let j=0;j<12;j++){const x=j*27+Math.sin(t/60)*2;rect(x,67+j%4*4,16,45,'#547494');rect(x+4,75+j%3*3,5,5,'#a8e3ea')}for(let j=0;j<4;j++){const x=15+j*94%320,y=35+j*15;rect(x,y,49,8,'#8bade5');rect(x+11,y+8,28,6,'#d6a56c')}rect(82,45,156,27,'#a9a8db');rect(107,35,105,14,'#d7b9ed');lenina(132,112);scientist(189,112,'#c1a78d',t);type('HELICOPTER CITY VIEW',95,24,'#ffdda3',8)}
if(mode===2){rect(30,32,260,89,'#2f526f');for(let j=0;j<5;j++)rect(38+j*55,45,44,63,'#183851');holo(108,39,104,21,'SOMA / RELIEF');bernard(94,112);scientist(214,104,'#ddbe88',t);rect(171,83,20,7,'#d9bbf0');type('MOOD != CLAIM',101,29,'#ffdb9c',8)}
if(mode===3){for(let j=0;j<5;j++)holo(11+j*62,36,50,63,['A','B','G','D','E'][j]);for(let j=0;j<3;j++)student(85+j*66,119,j,t);bernard(45,105);rect(48,78,60,9,'#df886b');type('STATUS?',58,85,'#171e37',8);type('HIERARCHY',108,27,'#ffdb9e',8)}
if(mode===4){rect(23,27,274,105,'#2c486a');holo(37,39,245,24,'EMOTIONAL ENGINEERING');for(let j=0;j<5;j++){rect(52+j*45,78,31,28,'#3f7193');rect(56+j*45,83,23,9,'#a0d7e2');rect(56+j*45,97,21,3,'#e0ad7d')}helm(206,117);bernard(78,121);type('SUCCESS != FULFILLMENT',88,27,'#f3c894',8)}
if(mode===5){rect(24,27,272,105,'#24415f');holo(62,43,195,22,'PROPAGANDA PHRASES');for(let j=0;j<5;j++){rect(77+j*27,78,17,5,['#9fe4d8','#ffce9c','#c9aaf7'][j%3])}helm(203,114);bernard(81,117);type('WORDS WORTH WRITING?',87,35,'#ffdaaa',8)}
if(mode===6){rect(17,29,136,98,'#283e64');rect(166,29,136,98,'#3f4466');outline(17,29,136,98,'#75b8db');outline(166,29,136,98,'#cf9eeb');type('EXCLUSION',55,43,'#ffc48d',8);type('UNUSED TALENT',192,43,'#ffe5b6',8);bernard(85,98);helm(236,98);rect(154,65,11,5,'#ffd09e');rect(154,76,11,5,'#ffd09e');type('SAME FEELING',105,136,'#9ef2da',8)}
rect(0,0,320,15,'#091529');type('BERNARD + HELMHOLTZ / BNW · '+data.id,6,10,'#91eee4',7);
}
function solidarity(t,mode){
rect(0,0,W,H,'#101831');for(let j=0;j<8;j++){rect(j*43,16,3,121,'#43547c');rect(j*43+8,19,25,6,'#70577d')}rect(0,140,320,18,'#21324e');
const bern=(x,y)=>{scientist(x,y,'#566b9a',t);rect(x-7,y-25,15,6,'#2a2b47')};
const len=(x,y)=>{scientist(x,y,'#c5a0cb',t);rect(x-7,y-24,15,7,'#e7ba8b')};
const hen=(x,y)=>{scientist(x,y,'#d9b075',t);rect(x-8,y-24,16,7,'#947353')};
const city=()=>{rect(0,19,320,99,'#2c416b');for(let j=0;j<14;j++){let x=j*24;rect(x,45+j%4*12,19,68,'#394c76');for(let k=0;k<3;k++)rect(x+3+k*5,70+j%3*8,2,3,'#ffd08e')}rect(0,111,320,25,'#192843')};
if(mode===0){city();rect(166,25,31,85,'#806d8e');rect(174,16,15,15,'#a7a8cd');rect(170,30,21,8,'#edb06d');for(let j=0;j<6;j++)rect(176+j*3,22-Math.sin((t+j*5)/28)*4,2,4,'#e6b2d2');len(101,121);hen(148,121);type('PHOSPHORUS RECOVERY',100,35,'#ffdda6',8)}
if(mode===1){rect(18,29,284,91,'#40385e');for(let j=0;j<6;j++){rect(24+j*51,39,37,62,'#334f83');rect(30+j*51,46,23,49,['#ae78c1','#5cd9c7','#d4ab61'][j%3])}for(let j=0;j<5;j++)student(55+j*50,121,j,t);len(106,126);hen(211,126);type('WESTMINSTER CABARET',92,24,'#ffe0ae',9)}
if(mode===2){rect(45,29,230,100,'#294467');outline(45,29,230,100,'#dba67c');type('SOMA + ROUTINE',112,43,'#ffddb0',9);rect(87,54,148,22,'#162e4b');for(let j=0;j<6;j++)rect(100+j*20,58,10,12,['#d3a2e8','#a7e4d6','#f3b67d'][j%3]);len(127,117);hen(194,117);type('RELIEF != ANSWER',111,94,'#a2f3e6',8)}
if(mode>=3){rect(22,24,276,110,'#303a62');for(let j=0;j<6;j++){rect(31+j*47,28,28,90,'#254061');rect(35+j*47,34,20,68,'#475a80')}rect(87,81,146,22,'#835981');rect(102,73,116,20,'#c59a7d');rect(116,82,88,11,'#e6bc94');rect(157,69,12,11,'#ffe2b8');for(let j=0;j<12;j++){const a=j*Math.PI/6,x=160+84*Math.cos(a),y=82+46*Math.sin(a);rect(x-4,y-6,8,9,j===8?'#f0ac87':'#a6b8d9');rect(x-5,y+3,10,8,j===8?'#506897':'#957fa5')}bern(72,126);type(['','','','TWELVE AT ONE TABLE','ONE CUP / ONE RHYTHM','THE CHORUS','THE AFTERMATH'][mode],90,23,'#ffdbac',8);if(mode===4||mode===5)for(let j=0;j<7;j++){const x=28+j*41,y=39+Math.sin((t+j*8)/12)*3;rect(x,y,19,3,'#e2baff')}if(mode===6){rect(21,36,69,63,'#142d49');outline(21,36,69,63,'#88cdd3');type('ALONE',34,52,'#ffbc93',9);rect(100,49,120,4,'#f2c38f')}}
rect(0,0,320,15,'#071327');type('SOLIDARITY / BNW · '+data.id,6,10,'#9af1e5',8);
}
function reservationJourney(t,mode){
rect(0,0,W,H,'#101c36');for(let j=0;j<8;j++){rect(j*43,16,3,122,'#365174');rect(j*43+6,20,31,5,'#6f89a8')}rect(0,139,320,20,'#19324d');
const bern=(x,y)=>{scientist(x,y,'#526da2',t);rect(x-8,y-25,16,6,'#30283e')};
const len=(x,y)=>{scientist(x,y,'#cfa0cd',t);rect(x-8,y-25,16,6,'#e8bb87')};
const screen=(x,y,w,hh,s)=>{rect(x,y,w,hh,'#183752');outline(x,y,w,hh,'#83d0db');type(s,x+6,y+13,'#ffdca6',8)};
if(mode===0){rect(13,27,294,101,'#36556a');for(let j=0;j<5;j++)rect(18+j*60,36,49,79,'#244e67');screen(103,27,113,23,'PRIVATE OR PUBLIC?');bern(100,117);len(208,117);type('TWO IDEAS OF A DATE',97,64,'#ffd1aa',8)}
if(mode===1){rect(0,16,320,105,'#244264');for(let j=0;j<6;j++){rect(j*57,87+Math.sin((t+j*6)/17)*6,57,6,'#61acc9');rect(j*57,95+Math.sin((t+j*6)/17)*6,57,8,'#307c9a')}rect(70,35,185,25,'#8b97c1');rect(93,26,138,11,'#d8a9da');rect(124,60,80,10,'#abcad7');bern(141,116);len(190,116);type('ENGLISH CHANNEL',104,23,'#ffdeb1',8)}
if(mode===2){screen(45,29,230,85,'WORDS VERSUS HABITS');bern(102,105);len(213,105);for(let j=0;j<5;j++)rect(85+j*35,66,21,5,['#cfa9ee','#72dcd3','#edae72'][j%3])}
if(mode===3){rect(21,24,278,108,'#293d65');screen(39,34,242,20,'DIRECTOR / TRAVEL PERMIT');scientist(238,103,'#e7ceaa',t);bern(78,117);for(let j=0;j<8;j++){rect(132+j*18,73,2,23,'#89c0cb');rect(138+j*18,72,10,6,'#dbb892')}type('A WOMAN LOST IN A STORM',81,29,'#f6d0ab',7)}
if(mode===4){screen(59,35,200,65,'ICELAND / POSSIBLE EXILE');bern(96,118);scientist(244,118,'#dac99b',t);rect(122,64,83,17,'#6e4a67');type('THREAT',143,76,'#ffb6b1',9)}
if(mode===5){rect(0,20,320,100,'#95576b');for(let j=0;j<6;j++){rect(j*55,79+j%2*13,35,44,'#d58e75');rect(j*55+8,65+j%3*9,21,19,'#bf7861')}screen(64,32,194,21,'SANTA FE / WARDEN');bern(94,118);len(197,118);type('RESERVATION AHEAD',114,27,'#ffe2a8',8)}
if(mode===6){rect(17,25,286,110,'#334269');screen(37,33,244,23,'INCOMING MESSAGE / HELMHOLTZ');bern(90,115);len(231,115);rect(122,74,80,14,'#ae537b');type('ICELAND',137,85,'#fff0bf',9);rect(131,94,63,4,'#f2c08a');type('FEAR IS NOW REAL',100,29,'#f9d69a',8)}
rect(0,0,320,15,'#081329');type('THE RESERVATION JOURNEY / BNW · '+data.id,5,10,'#91efe7',7);
}
function malpais(t,mode){
rect(0,0,W,H,'#202b54');rect(0,16,320,89,'#ad6680');for(let j=0;j<9;j++){const x=j*45;rect(x,56+j%3*11,51,62,'#b9846d');rect(x+7,64+j%3*11,11,17,'#3d4560');rect(x+27,75+j%3*11,12,15,'#4c4560');rect(x+10,84+j%3*11,3,26,'#deae7f')}rect(0,124,320,33,'#98646b');for(let j=0;j<10;j++)rect(j*38,132,20,3,'#d3a27d');
const bern=(x,y)=>{scientist(x,y,'#5d70a6',t);rect(x-7,y-25,14,6,'#282d48')};
const len=(x,y)=>{scientist(x,y,'#d6a2cb',t);rect(x-8,y-25,16,6,'#e1b58c')};
const john=(x,y)=>{scientist(x,y,'#d6c0a3',t);rect(x-8,y-26,16,8,'#caa776');rect(x-11,y-6,22,4,'#a67674')};
const linda=(x,y)=>{scientist(x,y,'#a09a92',t);rect(x-8,y-25,16,6,'#bfae87');rect(x-12,y-7,24,18,'#baa9a6')};
const placard=(x,y,w,txt)=>{rect(x,y,w,19,'#182f49');outline(x,y,w,19,'#6ad8d4');type(txt,x+6,y+12,'#ffe1b1',8)};
if(mode===0){placard(45,30,228,'MALPAIS / ARRIVAL');bern(87,120);len(146,120);scientist(229,120,'#d5af8a',t);type('LIVED PLACE != EXHIBIT',93,59,'#f5dfa9',7)}
if(mode===1){rect(16,43,83,80,'#bf8771');rect(25,46,44,72,'#a76f5a');for(let j=0;j<5;j++)rect(48+j*3,55+j*8,26,3,'#e9bf8f');scientist(79,118,'#c79c83',t);rect(73,91,13,7,'#d6d0c2');len(194,120);rect(214,82,43,35,'#a87d6e');rect(223,91,17,10,'#e4be9e');type('AGE / CARE / BIRTH',116,37,'#f8dfa9',8)}
if(mode===2){len(105,114);bern(216,117);placard(74,34,174,'SOMA UNAVAILABLE');for(let j=0;j<5;j++)rect(97+j*26,74,10,5,'#e2b5c9');type('FEELING != VERDICT',94,63,'#ffe0af',8)}
if(mode===3){rect(0,23,320,104,'#443860');for(let j=0;j<12;j++){const x=15+j*27;rect(x,61+Math.sin((t+j*7)/17)*2,14,18,['#b68c9e','#d9ad79','#8cb7ac'][j%3]);rect(x+3,53+Math.sin((t+j*7)/17)*2,8,9,'#e0b99d')}for(let j=0;j<6;j++){rect(20+j*54,37,31,7,'#a982af');rect(25+j*54,28,22,8,'#d2aa79')}rect(134,88,51,31,'#4b4565');outline(134,88,51,31,'#ebac76');type('DRUMS',142,106,'#ffe0b4',8);type('CEREMONY / NON-GRAPHIC',64,24,'#ffe5c0',8)}
if(mode===4){john(165,110);bern(73,117);len(259,117);placard(107,35,112,'JOHN ARRIVES');type('LIVED HERE / HEARD OF THERE',65,70,'#ffdda8',8)}
if(mode===5){rect(21,37,280,94,'#aa7a70');for(let j=0;j<7;j++)rect(31+j*39,46,28,64,'#805e65');linda(150,112);len(246,119);bern(59,117);placard(97,28,135,'LINDA TESTIFIES');type('DIRECT EXPERIENCE',107,64,'#f8deaa',8)}
if(mode===6){for(let j=0;j<3;j++){rect(9+j*105,26,94,100,['#4b466d','#3a5a6a','#66536a'][j]);outline(9+j*105,26,94,100,'#95cbd2')}type('DIRECTOR',28,41,'#ffe1b1',8);type('JOHN',146,41,'#ffe1b1',8);type('LINDA',251,41,'#ffe1b1',8);scientist(54,97,'#d9bb91',t);john(160,97);linda(263,97);type('THREE ROOTS / ONE SHARED EVENT',48,137,'#99f1e8',8)}
rect(0,0,320,15,'#071629');type('MALPAIS / RESERVATION / BNW · '+data.id,5,10,'#99f0e7',7);
}
function johnsStory(t,mode){
rect(0,0,W,H,'#182348');rect(0,17,320,91,'#986b83');for(let j=0;j<8;j++){const x=j*44;rect(x,69+j%3*9,44,63,'#bb8b70');rect(x+7,77+j%3*9,10,17,'#55445a');rect(x+24,83+j%3*8,10,15,'#5a3d56')}rect(0,135,320,23,'#725971');for(let j=0;j<10;j++)rect(j*37,142,19,2,'#c2937b');
const john=(x,y,small=false)=>{scientist(x,y,small?'#bba992':'#e0c8a3',t);rect(x-8,y-25,16,7,'#aa866e')};
const linda=(x,y)=>{scientist(x,y,'#ab9a9c',t);rect(x-9,y-25,17,7,'#c4a784')};
const frame=(x,y,w,q,s)=>{rect(x,y,w,q,'#172b47');outline(x,y,w,q,'#8bdbd7');type(s,x+7,y+12,'#ffdfa8',8)};
if(mode===0){frame(51,30,218,24,'JOHN TELLS BERNARD');john(122,116);scientist(224,115,'#566a9e',t);linda(46,119);type('MEMORY != OMNISCIENCE',85,63,'#f7daaa',8)}
if(mode===1){rect(28,28,264,95,'#3e4b79');frame(54,36,212,21,'LINDA REMEMBERS LONDON');linda(86,116);john(195,117,true);for(let j=0;j<5;j++){rect(103+j*32,70,18,33,'#6987bd');rect(108+j*32,63,8,7,'#b5c4ec')}type('HEARD OF != LIVED IN',93,28,'#ffdea8',8)}
if(mode===2){rect(25,25,270,100,'#8c685f');rect(45,44,215,56,'#ddad85');for(let j=0;j<12;j++){type(String.fromCharCode(65+j),59+(j%6)*29,60+Math.floor(j/6)*22,'#51445c',10)}linda(61,114);john(245,116,true);type('LEARNING THE LETTERS',90,24,'#ffe8bc',8)}
if(mode===3){rect(75,30,167,98,'#584863');rect(98,40,122,70,'#edc398');outline(98,40,122,70,'#754865');type('SHAKESPEARE',116,63,'#543655',10);type('WORDS / EMOTION',115,77,'#5c4665',8);john(60,116);rect(245,70,45,32,'#27263e');outline(245,70,45,32,'#e09b88');type('ANGER',251,89,'#ffdbb4',8)}
if(mode===4){frame(44,29,226,21,'THE CLOSED CIRCLE');for(let j=0;j<6;j++)scientist(40+j*45,116,['#b08c7c','#d0aa8c','#83a99c'][j%3],t);john(163,78,true);rect(128,91,71,5,'#e0a987');rect(70,59,17,22,'#c99d7d');rect(76,53,6,7,'#dcb991');type('CRAFT + EXCLUSION',105,26,'#ffdfad',8)}
if(mode===5){rect(0,20,320,100,'#343b69');for(let j=0;j<8;j++)rect(j*46,86+(j%3)*5,48,32,'#77516e');rect(0,38,320,8,'#6f5e9c');rect(148,25,24,24,'#f5d4ba');john(163,112);type('A PRIVATE ORDEAL',103,29,'#ffe2ba',8);type('NOT A PUBLIC INITIATION',75,130,'#abeee3',8)}
if(mode===6){rect(25,31,270,95,'#334871');frame(65,33,190,22,'INVITATION / LONDON');john(98,117);scientist(222,117,'#5f78a7',t);rect(128,74,64,13,'#d6b27e');type('LINDA TOO?',132,83,'#25334b',8);type('OFFER != COMPLETED TRAVEL',75,29,'#ffdfaa',7)}
rect(0,0,320,15,'#071629');type('JOHNS STORY / BNW · '+data.id,6,10,'#99efe4',8);
}
function sleepingVisitor(t,mode){
rect(0,0,W,H,'#131b39');for(let j=0;j<8;j++){rect(j*43,17,3,120,'#3d5274');rect(j*43+8,24,27,5,'#5d789e')}rect(0,136,320,24,'#253a56');
const john=(x,y)=>{scientist(x,y,'#d2beac',t);rect(x-8,y-24,16,6,'#a6836f')};
const bern=(x,y)=>{scientist(x,y,'#536fa5',t);rect(x-8,y-25,16,6,'#2d304c')};
const len=(x,y)=>{rect(x-13,y-11,26,11,'#e5bead');rect(x-15,y,32,12,'#d4a0cc');rect(x-16,y+12,34,6,'#a36caa');rect(x-10,y-16,22,6,'#e6b87a')};
const panel=(x,y,w,q,s)=>{rect(x,y,w,q,'#193450');outline(x,y,w,q,'#86ced5');type(s,x+7,y+13,'#ffe0aa',8)};
if(mode===0){rect(30,25,260,96,'#38496d');rect(48,52,226,64,'#67507f');rect(69,64,177,34,'#ad7daf');len(158,71);panel(90,30,141,20,'SOMA / SLEEP');type('SILENCE != CONSENT',97,124,'#9ceade',8)}
if(mode===1){rect(0,19,320,97,'#385079');for(let j=0;j<10;j++)rect(j*37,77+j%3*7,33,40,'#52789c');rect(74,37,169,26,'#909ac3');rect(107,27,104,13,'#b9b8db');bern(151,113);panel(66,22,187,20,'SANTA FE / CONTROL');type('REQUEST != COMPLETION',92,131,'#ffdfaa',8)}
if(mode===2){rect(29,28,260,101,'#253e61');panel(43,35,233,23,'MUSTAPHA MOND / APPROVAL');for(let j=0;j<4;j++){rect(56+j*52,72,37,23,'#6d83ac');rect(62+j*52,77,24,11,'#ccbdd7')}bern(72,113);type('APPROVAL != CONSENT',91,125,'#ffe0aa',8)}
if(mode===3){rect(17,27,283,99,'#345075');panel(43,33,233,20,'WARDEN / FORMAL ORDERS');rect(79,59,162,50,'#e8c6a1');for(let j=0;j<5;j++)rect(91,67+j*8,133-j*10,2,'#a47879');rect(192,97,26,5,'#6fb69d');bern(45,113);type('AUTHORIZED / NOT ARRIVED',85,125,'#9ff1e7',8)}
if(mode===4){rect(23,27,273,104,'#614b6e');rect(51,38,216,77,'#223952');rect(56,43,208,7,'#bd93a9');rect(92,69,88,43,'#a88a9f');rect(101,80,74,27,'#e6c3a5');john(47,116);panel(115,33,113,20,'NO INVITATION');type('PRIVATE BOUNDARY',115,126,'#ffdda8',8)}
if(mode===5){rect(23,24,272,111,'#584b75');rect(72,62,195,66,'#a181bd');rect(88,83,152,30,'#efbaac');len(184,80);john(70,118);rect(33,50,26,36,'#b69b77');rect(36,54,20,27,'#e7ce9f');type('SHAKESPEARE',20,42,'#ffe0ad',7);panel(92,28,163,20,'DESIRE != PERMISSION')}
if(mode===6){rect(0,20,320,105,'#41476b');for(let j=0;j<8;j++)rect(j*44,79+j%3*8,37,46,'#745d84');rect(104,30,121,28,'#af9ac6');rect(123,20,84,12,'#d6c0df');bern(194,116);john(83,119);panel(69,49,182,20,'HELICOPTER RETURNS');type('TRAVEL STILL AHEAD',108,131,'#ffdda8',8)}
rect(0,0,320,15,'#081429');type('SLEEPING VISITOR / BNW · '+data.id,6,10,'#98ede6',8);
}
function paint(t){const s=data.scenes[scene];g.setTransform(3,0,0,3,0,0);g.imageSmoothingEnabled=false;if(data.id==='B009')sleepingVisitor(t,s.mode);else if(data.id==='B008')johnsStory(t,s.mode);else if(data.id==='B007')malpais(t,s.mode);else if(data.id==='B006')reservationJourney(t,s.mode);else if(data.id==='B005')solidarity(t,s.mode);else if(data.id==='B004')bernardHelmholtz(t,s.mode);else if(data.id==='B003')worldState(t,s.mode);else if(data.id==='B002')nursery(t,s.mode);else if(s.mode===0)hallway(t);else{lab(t,s.mode);for(let j=0;j<3;j++)student(45+j*29,129,j,t);scientist(229,127,'#f1ddbf',t)}
if(data.id==='B001'&&s.mode===2){for(let j=0;j<24;j++){const x=16+(j%8)*36,y=32+Math.floor(j/8)*9;rect(x,y,2,2,j%3?'#9ce4ff':'#f7c876')}}
if(data.id==='B001'&&s.mode===3){for(let j=0;j<5;j++)rect(28+j*59,132,19,2,['#ed7182','#f4a757','#e8dc6a','#5dd5a7','#77b9ff'][j])}
if(data.id==='B001'&&s.mode===6){const glow=Math.floor(4+Math.sin(t/30)*4);outline(114-glow/2,40-glow/2,96+glow,70+glow,'#cbb5f4')}
rect(0,157,320,23,'#061528');rect(0,156,320,2,'#6ad8e6');type('ACT '+String(scene+1).padStart(2,'0')+' / '+String(data.scenes.length).padStart(2,'0')+'   '+s.short.toUpperCase().slice(0,22),7,168,'#ffd09d',8);type('ANIMATED CANVAS2D',220,175,'#7ac8c5',6);
if(!playing)type('PAUSED',146,28,'#ffd08b',10)}
function save(){try{localStorage.setItem(key,JSON.stringify({scene,inspected:[...inspected],choices}))}catch(e){}}
function buttonTone(){if(!sound)return;try{const ctx=new (window.AudioContext||window.webkitAudioContext)(),o=ctx.createOscillator(),gain=ctx.createGain();o.type='triangle';o.frequency.value=420;gain.gain.value=.03;o.connect(gain);gain.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.05);o.onended=()=>ctx.close()}catch(e){}}
function render(){const s=data.scenes[scene];$('act').textContent='ACT '+(scene+1)+' / '+data.scenes.length+' · '+s.short;$('sceneHeading').textContent=s.title;$('narration').textContent=s.narration;$('speaker').textContent=s.speaker;$('dialogue').textContent=s.dialogue;$('evidence').textContent=inspected.has(scene)?s.evidence:'Observation unavailable until INSPECT is selected.';$('fact').textContent=inspected.has(scene)?s.fact:'—';$('inference').textContent=inspected.has(scene)?s.inference:'—';$('question').textContent=s.question;const cs=$('choices');cs.replaceChildren();s.answers.forEach((v,i)=>{const b=document.createElement('button');b.textContent=v;b.className=choices[scene]===i?'chosen':'';b.onclick=()=>{choices[scene]=i;save();render();buttonTone()};cs.appendChild(b)});$('reflection').textContent=choices[scene]===undefined?'Choose a reading of this scene. It changes your ledger, not the novel.':s.responses[choices[scene]];$('back').disabled=scene===0;$('forward').disabled=scene===data.scenes.length-1;$('inspect').disabled=inspected.has(scene);$('inspectedCount').textContent=inspected.size+'/'+data.scenes.length;$('progress').style.width=Math.round(inspected.size/data.scenes.length*100)+'%';$('seal').disabled=inspected.size!==data.scenes.length;$('status').textContent=inspected.size===data.scenes.length?'All scenes observed. Seal this browser session or revisit the narrative.':'Observe each scene, then move through the story.';paint(frame);save()}
function go(d){scene=Math.max(0,Math.min(data.scenes.length-1,scene+d));buttonTone();render()}
$('back').onclick=()=>go(-1);$('forward').onclick=()=>go(1);$('inspect').onclick=()=>{inspected.add(scene);buttonTone();render()};$('reset').onclick=()=>{if(confirm('Reset only this browser chapter progress?')){inspected.clear();choices={};scene=0;save();render()}};$('pause').onclick=()=>{playing=!playing;$('pause').textContent=playing?'PAUSE MOTION':'RESUME MOTION';render()};$('sound').onclick=()=>{sound=!sound;$('sound').textContent=sound?'SOUND ON':'SOUND OFF';buttonTone()};
$('seal').onclick=()=>{const packet={chapter:data.id,observed:[...inspected].sort(),choices,source:'original interpretation of the novel; no quoted text',not_independent:'film-side lab is an analogy, not a second witness to the book events',timestamp:new Date().toISOString()};const blob=new Blob([JSON.stringify(packet,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='BNW-'+data.id+'-witness.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);$('status').textContent='EXPORTED WITNESS PACKET · browser-local progress, not a Git commit.'};
document.addEventListener('keydown',e=>{if(e.target.matches('button,input,textarea,select'))return;if(['ArrowRight',' ','d','D'].includes(e.key)){e.preventDefault();go(1)}if(['ArrowLeft','a','A'].includes(e.key)){e.preventDefault();go(-1)}if(e.key==='i'||e.key==='I'){$('inspect').click()}});
let last=0;function loop(t){if(playing&&t-last>=40){frame++;paint(frame);last=t}requestAnimationFrame(loop)}render();requestAnimationFrame(loop);
})();
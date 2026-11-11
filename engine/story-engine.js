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
function paint(t){const s=data.scenes[scene];g.setTransform(3,0,0,3,0,0);g.imageSmoothingEnabled=false;if(data.id==='B003')worldState(t,s.mode);else if(data.id==='B002')nursery(t,s.mode);else if(s.mode===0)hallway(t);else{lab(t,s.mode);for(let j=0;j<3;j++)student(45+j*29,129,j,t);scientist(229,127,'#f1ddbf',t)}
if(data.id!=='B002'&&s.mode===2){for(let j=0;j<24;j++){const x=16+(j%8)*36,y=32+Math.floor(j/8)*9;rect(x,y,2,2,j%3?'#9ce4ff':'#f7c876')}}
if(data.id!=='B002'&&s.mode===3){for(let j=0;j<5;j++)rect(28+j*59,132,19,2,['#ed7182','#f4a757','#e8dc6a','#5dd5a7','#77b9ff'][j])}
if(data.id!=='B002'&&s.mode===6){const glow=Math.floor(4+Math.sin(t/30)*4);outline(114-glow/2,40-glow/2,96+glow,70+glow,'#cbb5f4')}
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
(function(){
var W=[
{t:"Бытовки в Ставрополе",d:"Сайт-каталог бытовок, блок-контейнеров и модульных зданий от производителя",s:"Сайт на заказ",l:"https://bytovka-stavropol.ru/"},
{t:"Модульные здания, Ростов",d:"Сайт про модульные здания из блок-контейнеров и сэндвич-панелей от производителя",s:"Сайт на заказ",l:"https://modulnoe-zdanie-rostov.ru/"},
{t:"Вагончики и бытовки, Волгоград",d:"Сайт производителя вагончиков и бытовок в Волгограде",s:"Сайт на заказ",l:"https://vagonchiki-bytovki-volgograd.ru/"},
{t:"Блок-контейнеры, Ростов",d:"Сайт про блок-контейнеры, модульные бытовки и строительные вагончики",s:"Сайт на заказ",l:"https://blok-konteyner-rostov.ru/"},
{t:"Вагончики и бытовки, Крым",d:"Сайт производителя: заказ вагончиков, бытовок и модульных зданий",s:"Сайт на заказ",l:"https://vagonchiki-bytovki-krym.ru/"},
{t:"Opel House",d:"Магазин автозапчастей для Opel, Daewoo и Chevrolet",s:"Сайт на заказ",l:"https://opel-house.ru/"},
{t:"Sapphire Taxi",d:"Сайт службы пассажирских и грузовых перевозок",s:"Сайт на заказ",l:"https://cg53800.tw1.ru/"},
{t:"AgroService Pro",d:"Помощь по обслуживанию и ремонту сельхозтехники: загрузка фото узла, диагностика и подсказки по ремонту",s:"Веб-сервис",l:"https://agroservice-pro-1-3.onrender.com/"},
{t:"Раунд",d:"Сайт магазина техники: прайс на 50+ позиций, страницы товаров и админка с загрузкой фото",s:"JS, Netlify Functions, Netlify Blobs",g:"raund-tech-store",l:"https://raund-tech.netlify.app/"},
{t:"Steve’s Apple",d:"Тёмный «журнальный» лендинг магазина Apple с анимациями при прокрутке",s:"HTML, CSS, JS",g:"steves-apple",l:"https://vadex-web.github.io/steves-apple/"},
{t:"Министерство Яблок",d:"Лендинг магазина Apple-техники: 3D-конфигуратор iPhone, прайс, каталог Mac и iPad",s:"HTML, CSS, JS, SVG",g:"ministry-of-apples",l:"https://vadex-web.github.io/ministry-of-apples/"},
{t:"Car_light_RnD",d:"Сайт мастерской автосвета: блок «до и после», прайс, галерея работ, отзывы, запись через звонок или мессенджер",s:"HTML, CSS, JS",g:"car-light-rnd",l:"https://vadex-web.github.io/car-light-rnd/"},
{t:"Автомойка на Евдокимова",d:"Сайт круглосуточной автомойки: прайс из каталога, галерея, отзывы с Яндекс Карт, запись по звонку или SMS",s:"HTML, CSS, JS",g:"avtomoyka-evdokimova",l:"https://vadex-web.github.io/avtomoyka-evdokimova/"},
{t:"Apple RU Store",d:"Магазин техники Apple: каталог из 88 позиций с поиском и фильтрами, выбор памяти и цвета, обращение в WhatsApp и Telegram",s:"HTML, CSS, JS",g:"apple-ru-store",l:"https://vadex-web.github.io/apple-ru-store/"},
{t:"СИНК",d:"Магазин техники Apple: каталог из 111 вариантов с поиском и фильтрами, заявка в WhatsApp и Telegram",s:"HTML, CSS, JS",g:"sync-shop",l:"https://vadex-web.github.io/sync-shop/"},
{t:"SCS Detailing",d:"Сайт детейлинг-студии: интерактивная «полировка» кузова на canvas, каталог услуг и калькулятор стоимости",s:"HTML, CSS, JS, Canvas",g:"scs-detailing",l:"https://vadex-web.github.io/scs-detailing/"},
{t:"Alpha Store",d:"Магазин электроники: каталог на 150 позиций, страница каждой модели с выбором памяти, SIM и цвета, заказ через корзину",s:"HTML, CSS, JS, SVG",g:"alpha-store",l:"https://vadex-web.github.io/alpha-store/"}
];
var STACK=["Python","JavaScript","TypeScript","Dart","Kotlin","Flutter","Android","aiogram","Django","React","PHP","Git"];
var gh="https://github.com/VaDex-web/";
var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var fine=window.matchMedia("(pointer: fine)").matches;
function $(s){return document.querySelector(s);}

function rng(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return function(){h+=0x6D2B79F5;var t=h;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
function art(title,i){
var r=rng(title),k=i%4,s="",x,y,n;
if(k===0){for(y=0;y<5;y++){for(x=0;x<36;x++){var v=r();if(v>.35)s+='<circle cx="'+(x*8.6+6)+'" cy="'+(y*12+8)+'" r="'+(v*2.4).toFixed(2)+'" fill="#fff" fill-opacity="'+(.25+v*.6).toFixed(2)+'"/>';}}}
else if(k===1){for(x=0;x<44;x++){var hh=6+r()*52;s+='<rect x="'+(x*7)+'" y="'+(64-hh).toFixed(1)+'" width="3" height="'+hh.toFixed(1)+'" fill="#fff" fill-opacity="'+(.18+r()*.5).toFixed(2)+'"/>';}}
else if(k===2){for(x=-4;x<46;x++){var l=10+r()*40;s+='<line x1="'+(x*7)+'" y1="64" x2="'+(x*7+l).toFixed(1)+'" y2="'+(64-l).toFixed(1)+'" stroke="#fff" stroke-opacity="'+(.15+r()*.5).toFixed(2)+'" stroke-width="1"/>';}}
else{var cx=60+r()*180,cy=20+r()*30;for(n=1;n<10;n++){s+='<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="'+(n*n*1.1+4).toFixed(1)+'" fill="none" stroke="#fff" stroke-opacity="'+(.5-n*.045).toFixed(2)+'" stroke-width="1"/>';}}
return '<svg class="art" viewBox="0 0 300 64" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g>'+s+'</g></svg>';
}
var grid=$("#grid");
W.forEach(function(w,i){
var a=document.createElement("article");
a.className="card rv";
a.setAttribute("data-k",w.g?"code":"order");
var n=(i+1<10?"0":"")+(i+1);
a.innerHTML=art(w.t,i)+'<div class="n"><span>'+n+'</span><em></em></div><h3></h3><p></p><span class="st"></span><div class="links"><a target="_blank" rel="noopener">демо ↗</a></div>';
a.querySelector("em").textContent=w.g?"open source":(w.s==="Веб-сервис"?"сервис":"на заказ");
a.querySelector("h3").textContent=w.t;
a.querySelector("p").textContent=w.d;
a.querySelector(".st").textContent=w.s;
var l=a.querySelector(".links a");
l.href=w.l;l.setAttribute("aria-label","Демо: "+w.t);
if(w.g){var c=document.createElement("a");c.target="_blank";c.rel="noopener";c.textContent="код";c.href=gh+w.g;c.setAttribute("aria-label","Код: "+w.t);a.querySelector(".links").appendChild(c);}
a.addEventListener("pointermove",function(e){var r=a.getBoundingClientRect();var px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;a.style.setProperty("--mx",(e.clientX-r.left)+"px");a.style.setProperty("--my",(e.clientY-r.top)+"px");if(fine&&!reduce){a.style.setProperty("--ry",((px-.5)*7).toFixed(2)+"deg");a.style.setProperty("--rx",((.5-py)*7).toFixed(2)+"deg");}});
a.addEventListener("pointerleave",function(){a.style.setProperty("--rx","0deg");a.style.setProperty("--ry","0deg");});
grid.appendChild(a);
});
$("#y").textContent=new Date().getFullYear();

var fb=document.querySelectorAll("#filter button");
fb.forEach(function(b){b.addEventListener("click",function(){
fb.forEach(function(x){x.classList.toggle("on",x===b);});
var f=b.getAttribute("data-f");
document.querySelectorAll(".card").forEach(function(c){
var k=c.getAttribute("data-k");
c.classList.toggle("hide",!(f==="all"||(f==="code"&&k==="code")||(f==="order"&&k==="order")));
});
});});

var total=W.length,withCode=W.filter(function(w){return w.g;}).length;
var langs=document.querySelector("#stack .tags").children.length;
var counts=[["#s1",total],["#s2",withCode],["#s3",total-withCode],["#s4",langs]];
document.querySelectorAll(".cw").forEach(function(e){e.textContent=total;});
counts.forEach(function(c,i){
var el=$(c[0]);
if(reduce){el.textContent=c[1];return;}
var t0=performance.now()+400+i*120,dur=1100;
(function up(t){
var p=Math.min(1,Math.max(0,(t-t0)/dur));
el.textContent=Math.round(c[1]*(1-Math.pow(1-p,3)));
if(p<1)requestAnimationFrame(up);
})(performance.now());
});

var belt=$("#belt");
var row=STACK.map(function(s){return "<span>"+s+"</span>";}).join("");
belt.innerHTML=row+row+row+row;
belt.style.animationDuration=(STACK.length*4)+"s";
var b2=$("#belt2"),row2=["WEB","FLUTTER","ANDROID","TELEGRAM BOTS","ADMIN","DESIGN"].map(function(s){return "<span>"+s+"</span>";}).join("");
b2.innerHTML=row2+row2+row2+row2+row2+row2;

var nm=$("#name"),FINAL="VADEX",CH="01{}<>/;=#$%&*+";
if(!reduce){
var f=0;
(function sc(){
var out="";
for(var i=0;i<FINAL.length;i++){out+=(f>i*4+6)?FINAL[i]:CH[Math.floor(Math.random()*CH.length)];}
nm.textContent=out;
f++;
if(f<=FINAL.length*4+8)setTimeout(sc,45);else nm.textContent=FINAL;
})();
nm.addEventListener("mouseenter",function(){
var g=0;
(function sc(){
var out="";
for(var i=0;i<FINAL.length;i++){out+=(g>i*2+3)?FINAL[i]:CH[Math.floor(Math.random()*CH.length)];}
nm.textContent=out;g++;
if(g<=FINAL.length*2+4)setTimeout(sc,40);else nm.textContent=FINAL;
})();
});
}


var hero=document.querySelector(".hero"),ow=document.querySelector(".orbwrap");
if(!reduce){addEventListener("scroll",function(){var s=Math.min(scrollY,innerHeight);if(ow)ow.style.transform="translateY(calc(-52% + "+(s*.18)+"px))";nm.style.transform="translateY("+(s*.12)+"px)";},{passive:true});}
var phrases=["Делаю сайты.","Пишу приложения на Flutter.","Собираю Android на Kotlin.","Делаю Telegram-ботов."];
var el=$("#typed");
if(reduce){el.textContent=phrases[1];}
else{
var pi=0,ci=0,del=false;
(function tick(){
var p=phrases[pi];
el.textContent=p.slice(0,ci);
var wait=del?32:70;
if(!del&&ci===p.length){wait=1500;del=true;}
else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;wait=300;}
else{ci+=del?-1:1;}
setTimeout(tick,wait);
})();
}

var io=new IntersectionObserver(function(es){
var k=0;
es.forEach(function(e){if(e.isIntersecting){var t=e.target;io.unobserve(t);setTimeout(function(){t.classList.add("on");},reduce?0:(k++)*90);}});
},{threshold:.1});
document.querySelectorAll(".sv").forEach(function(a){
a.addEventListener("pointermove",function(e){var r=a.getBoundingClientRect();var px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;a.style.setProperty("--mx",(e.clientX-r.left)+"px");a.style.setProperty("--my",(e.clientY-r.top)+"px");if(fine&&!reduce){a.style.setProperty("--ry",((px-.5)*6).toFixed(2)+"deg");a.style.setProperty("--rx",((.5-py)*6).toFixed(2)+"deg");}});
a.addEventListener("pointerleave",function(){a.style.setProperty("--rx","0deg");a.style.setProperty("--ry","0deg");});
});
document.querySelectorAll(".card,.sv,.block,.term,.tags").forEach(function(x){x.classList.add("rv");io.observe(x);});


var boot=$("#boot"),bl=$("#bootlog");
if(boot&&!reduce){
var lines=["> init vadex.dev","> modules: web, mobile, bots","> loading "+total+" projects","> ready_"],bi=0,bc=0,txt="";
(function bt(){
if(bi>=lines.length){setTimeout(function(){boot.classList.add("done");},260);return;}
var L=lines[bi];
bl.textContent=txt+L.slice(0,bc);
if(bc<L.length){bc++;setTimeout(bt,16);}
else{txt+=L+"\n";bi++;bc=0;setTimeout(bt,90);}
})();
boot.addEventListener("click",function(){boot.classList.add("done");});
}else if(boot){boot.style.display="none";}

var ring=$("#ring");
if(fine&&!reduce){
var rx=-100,ry=-100,tx=-100,ty=-100,rs=false;
addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY;if(!rs){rs=true;ring.classList.add("show");}});
document.addEventListener("pointerover",function(e){ring.classList.toggle("big",!!e.target.closest("a,button,.card"));});
(function rl(){rx+=(tx-rx)*.2;ry+=(ty-ry)*.2;ring.style.transform="translate3d("+rx+"px,"+ry+"px,0)";requestAnimationFrame(rl);})();
document.querySelectorAll(".mag").forEach(function(m){
m.addEventListener("pointermove",function(e){var r=m.getBoundingClientRect();m.style.transform="translate("+((e.clientX-r.left-r.width/2)*.22).toFixed(1)+"px,"+((e.clientY-r.top-r.height/2)*.3).toFixed(1)+"px)";});
m.addEventListener("pointerleave",function(){m.style.transform="";});
});
}

var cp=$("#copy");
if(cp){cp.addEventListener("click",function(){
var done=function(){var t=cp.textContent;cp.textContent="скопировано ✓";setTimeout(function(){cp.textContent=t;},1600);};
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText("@vv1rtuss").then(done,function(){});}
});}

var prog=$("#prog"),links=document.querySelectorAll("nav a"),secs=["about","services","stack","work","contact"].map(function(id){return document.getElementById(id);});
function onScroll(){
var h=document.documentElement.scrollHeight-innerHeight;
prog.style.transform="scaleX("+(h>0?scrollY/h:0)+")";
var cur=-1;
secs.forEach(function(s,i){if(s.getBoundingClientRect().top<innerHeight*.4)cur=i;});
links.forEach(function(a,i){a.classList.toggle("on",i===cur);});
}
addEventListener("scroll",onScroll,{passive:true});onScroll();

var glow=$("#glow"),mx=-9999,my=-9999;
if(fine&&!reduce){
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY;glow.style.transform="translate3d("+mx+"px,"+my+"px,0)";});
}
addEventListener("pointerleave",function(){mx=my=-9999;});

var cv=$("#bg"),cx=cv.getContext("2d");
var P=[],w=0,h=0,dpr=Math.min(window.devicePixelRatio||1,2),on=!reduce,raf=0,B=[];
var btn=$("#fx");
var GL=["0","1","{","}","<",">","/",";","=","()","[]","&&"];
function size(){
w=innerWidth;h=innerHeight;
cv.width=w*dpr;cv.height=h*dpr;
cx.setTransform(dpr,0,0,dpr,0,0);
var small=w<700;
var n=Math.min(small?120:300,Math.round(w*h/(small?7000:6200)));
while(P.length<n)P.push(mk());
P.length=n;
}
function mk(){
var d=Math.random()*.7+.3;
var g=Math.random()<.17;
return{x:Math.random()*w,y:Math.random()*h,d:d,vx:(Math.random()-.5)*.5*d,vy:(Math.random()-.5)*.5*d-.05,r:d*(Math.random()*1.4+.8),a:d*(Math.random()*.55+.35),g:g?GL[Math.floor(Math.random()*GL.length)]:null,fs:Math.round(9+d*7),ph:Math.random()*6.28};
}
function burst(x,y){
for(var i=0;i<18;i++){
var an=Math.random()*6.2832,sp=Math.random()*2.6+.8;
B.push({x:x,y:y,vx:Math.cos(an)*sp,vy:Math.sin(an)*sp,life:1,r:Math.random()*1.6+.7});
}
if(B.length>160)B.splice(0,B.length-160);
}
var T=0,SS=[],nextSS=120;
function frame(){
T+=.016;
cx.clearRect(0,0,w,h);
var i,j,p,q,dx,dy,d2;
for(i=0;i<P.length;i++){
p=P[i];
dx=p.x-mx;dy=p.y-my;d2=dx*dx+dy*dy;
if(d2<19600){var m=Math.sqrt(d2)||1;var f=(1-m/140)*.55;p.vx+=dx/m*f*.16;p.vy+=dy/m*f*.16;}
p.vx*=.992;p.vy*=.992;
var sp=Math.hypot(p.vx,p.vy);
var lim=.12*p.d;
if(sp<lim){p.vx+=(Math.random()-.5)*.03*p.d;p.vy+=(Math.random()-.5)*.03*p.d;}
if(sp>1.6){p.vx*=.9;p.vy*=.9;}
p.x+=p.vx;p.y+=p.vy;
if(p.x<-20)p.x=w+20;else if(p.x>w+20)p.x=-20;
if(p.y<-20)p.y=h+20;else if(p.y>h+20)p.y=-20;
var tw=.75+.25*Math.sin(T*1.6+p.ph);
if(p.g){
cx.font=p.fs+'px "JetBrains Mono",monospace';
cx.fillStyle="rgba(255,255,255,"+(p.a*.7*tw)+")";
cx.fillText(p.g,p.x,p.y);
}else{
cx.fillStyle="rgba(255,255,255,"+(p.a*tw)+")";
cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.2832);cx.fill();
if(p.r>1.5){cx.fillStyle="rgba(255,255,255,"+(p.a*.12)+")";cx.beginPath();cx.arc(p.x,p.y,p.r*3.2,0,6.2832);cx.fill();}
}
}
cx.lineWidth=1;
for(i=0;i<P.length;i++){
p=P[i];
if(p.g)continue;
for(j=i+1;j<P.length;j++){
q=P[j];
if(q.g)continue;
dx=p.x-q.x;dy=p.y-q.y;
if(dx>125||dx<-125||dy>125||dy<-125)continue;
d2=dx*dx+dy*dy;
if(d2<15000){
cx.strokeStyle="rgba(255,255,255,"+(.2*(1-d2/15000)*Math.min(p.d,q.d)*1.4)+")";
cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke();
}
}
dx=p.x-mx;dy=p.y-my;d2=dx*dx+dy*dy;
if(d2<32400){
cx.strokeStyle="rgba(255,255,255,"+(.5*(1-d2/32400))+")";
cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(mx,my);cx.stroke();
}
}
nextSS--;
if(nextSS<=0&&!reduce){var sy=Math.random()*h*.5;SS.push({x:w*(.3+Math.random()*.7),y:sy,vx:-(7+Math.random()*5),vy:3.5+Math.random()*3,life:1});nextSS=200+Math.random()*320;}
for(i=SS.length-1;i>=0;i--){
var s=SS[i];s.x+=s.vx;s.y+=s.vy;s.life-=.014;
if(s.life<=0){SS.splice(i,1);continue;}
var gr=cx.createLinearGradient(s.x,s.y,s.x-s.vx*14,s.y-s.vy*14);
gr.addColorStop(0,"rgba(255,255,255,"+s.life*.9+")");gr.addColorStop(1,"rgba(255,255,255,0)");
cx.strokeStyle=gr;cx.lineWidth=1.4;cx.beginPath();cx.moveTo(s.x,s.y);cx.lineTo(s.x-s.vx*14,s.y-s.vy*14);cx.stroke();
}
cx.lineWidth=1;
for(i=B.length-1;i>=0;i--){
var b=B[i];
b.x+=b.vx;b.y+=b.vy;b.vx*=.95;b.vy*=.95;b.life-=.022;
if(b.life<=0){B.splice(i,1);continue;}
cx.fillStyle="rgba(255,255,255,"+b.life+")";
cx.beginPath();cx.arc(b.x,b.y,b.r,0,6.2832);cx.fill();
}
raf=requestAnimationFrame(frame);
}
function start(){if(!raf){raf=requestAnimationFrame(frame);}}
function stop(){cancelAnimationFrame(raf);raf=0;cx.clearRect(0,0,w,h);}
size();
var rt=0;
addEventListener("resize",function(){clearTimeout(rt);rt=setTimeout(size,120);});
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY;});
addEventListener("pointerdown",function(e){if(on&&!e.target.closest("a,button"))burst(e.clientX,e.clientY);});
document.addEventListener("visibilitychange",function(){if(document.hidden)stop();else if(on)start();});
function paint(){btn.textContent="частицы: "+(on?"вкл":"выкл");btn.setAttribute("aria-pressed",on);}
btn.addEventListener("click",function(){on=!on;paint();if(on)start();else stop();});
paint();
if(on)start();
})();

(function(){
var cv=document.getElementById("orb");
if(!cv||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var cx=cv.getContext("2d"),S=0,dpr=Math.min(window.devicePixelRatio||1,2);
var N=190,pts=[],links=[],i,j;
for(i=0;i<N;i++){var y=1-(i+.5)/N*2,r=Math.sqrt(1-y*y),th=i*2.399963;pts.push([Math.cos(th)*r,y,Math.sin(th)*r]);}
for(i=0;i<N;i++)for(j=i+1;j<N;j++){var dx=pts[i][0]-pts[j][0],dy=pts[i][1]-pts[j][1],dz=pts[i][2]-pts[j][2];if(dx*dx+dy*dy+dz*dz<.16)links.push([i,j]);}
var ay=0,ax=.35,tay=0,tax=.35,drag=false,lx=0,ly=0,vis=true,pr=new Array(N);
function size(){var r=cv.getBoundingClientRect();S=r.width;cv.width=S*dpr;cv.height=S*dpr;cx.setTransform(dpr,0,0,dpr,0,0);}
size();addEventListener("resize",size);
cv.addEventListener("pointerdown",function(e){drag=true;lx=e.clientX;ly=e.clientY;cv.setPointerCapture(e.pointerId);cv.style.cursor="grabbing";});
cv.addEventListener("pointermove",function(e){if(!drag)return;tay+=(e.clientX-lx)*.01;tax+=(e.clientY-ly)*.01;lx=e.clientX;ly=e.clientY;});
cv.addEventListener("pointerup",function(){drag=false;cv.style.cursor="grab";});
new IntersectionObserver(function(es){vis=es[0].isIntersecting;}).observe(cv);
var spin=.0035;
function draw(){
requestAnimationFrame(draw);
if(!vis||document.hidden)return;
tay+=spin;
ay+=(tay-ay)*.08;ax+=(tax-ax)*.08;
var ca=Math.cos(ay),sa=Math.sin(ay),cb=Math.cos(ax),sb=Math.sin(ax),R=S*.44,c=S/2;
cx.clearRect(0,0,S,S);
cx.strokeStyle="rgba(255,255,255,.1)";cx.lineWidth=1;cx.beginPath();cx.arc(c,c,R*1.02,0,6.2832);cx.stroke();
for(i=0;i<N;i++){
var p=pts[i],x=p[0]*ca+p[2]*sa,z=-p[0]*sa+p[2]*ca,y=p[1]*cb-z*sb;z=p[1]*sb+z*cb;
var f=1/(1.9-z*.55);
pr[i]=[c+x*R*f*1.5,c+y*R*f*1.5,z];
}
cx.lineWidth=1;
for(i=0;i<links.length;i++){
var a=pr[links[i][0]],b=pr[links[i][1]],d=(a[2]+b[2])/2;
cx.strokeStyle="rgba(255,255,255,"+(.04+(d+1)*.16)+")";
cx.beginPath();cx.moveTo(a[0],a[1]);cx.lineTo(b[0],b[1]);cx.stroke();
}
for(i=0;i<N;i++){
var q=pr[i];
cx.fillStyle="rgba(255,255,255,"+(.25+(q[2]+1)*.38)+")";
cx.beginPath();cx.arc(q[0],q[1],.9+(q[2]+1)*1.1,0,6.2832);cx.fill();
}
}
draw();
})();

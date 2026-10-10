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
var gh="https://github.com/VaDex-web/";
var grid=document.getElementById("grid");
W.forEach(function(w,i){
var a=document.createElement("article");
a.className="card rv";
var n=(i+1<10?"0":"")+(i+1);
a.innerHTML='<span class="n">'+n+'</span><h3></h3><p></p><span class="st"></span><div class="links"><a target="_blank" rel="noopener">демо ↗</a></div>';
a.querySelector("h3").textContent=w.t;
a.querySelector("p").textContent=w.d;
a.querySelector(".st").textContent=w.s;
var l=a.querySelectorAll(".links a");
l[0].href=w.l;l[0].setAttribute("aria-label","Демо: "+w.t);
if(w.g){var c=document.createElement("a");c.target="_blank";c.rel="noopener";c.textContent="код";c.href=gh+w.g;c.setAttribute("aria-label","Код: "+w.t);a.querySelector(".links").appendChild(c);}
grid.appendChild(a);
});
document.getElementById("y").textContent=new Date().getFullYear();

var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var phrases=["Привет, я Vadex.","Пишу код.","Делаю сайты."];
var el=document.getElementById("typed");
if(reduce){el.textContent=phrases[0]+" "+phrases[2];}
else{
var pi=0,ci=0,del=false;
(function tick(){
var p=phrases[pi];
el.textContent=p.slice(0,ci);
var wait=del?35:75;
if(!del&&ci===p.length){wait=1600;del=true;}
else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;wait=350;}
else{ci+=del?-1:1;}
setTimeout(tick,wait);
})();
}

var io=new IntersectionObserver(function(es){
es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll(".rv,.block").forEach(function(x){x.classList.add("rv");io.observe(x);});

var cv=document.getElementById("bg"),cx=cv.getContext("2d");
var P=[],w=0,h=0,dpr=Math.min(window.devicePixelRatio||1,2),mx=-9999,my=-9999,on=!reduce,raf=0;
var btn=document.getElementById("fx");
function size(){
w=innerWidth;h=innerHeight;
cv.width=w*dpr;cv.height=h*dpr;
cx.setTransform(dpr,0,0,dpr,0,0);
var n=Math.min(110,Math.round(w*h/14000));
while(P.length<n)P.push(mk());
P.length=n;
}
function mk(){
return{x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.5,a:Math.random()*.6+.25};
}
function frame(){
cx.clearRect(0,0,w,h);
var i,j,p,q,dx,dy,d;
for(i=0;i<P.length;i++){
p=P[i];
dx=p.x-mx;dy=p.y-my;d=dx*dx+dy*dy;
if(d<14400){var f=(1-Math.sqrt(d)/120)*.9;var m=Math.sqrt(d)||1;p.vx+=dx/m*f*.12;p.vy+=dy/m*f*.12;}
p.vx*=.995;p.vy*=.995;
var sp=Math.hypot(p.vx,p.vy);
if(sp<.12){p.vx+=(Math.random()-.5)*.02;p.vy+=(Math.random()-.5)*.02;}
if(sp>1.4){p.vx*=.9;p.vy*=.9;}
p.x+=p.vx;p.y+=p.vy;
if(p.x<-10)p.x=w+10;else if(p.x>w+10)p.x=-10;
if(p.y<-10)p.y=h+10;else if(p.y>h+10)p.y=-10;
cx.fillStyle="rgba(255,255,255,"+p.a+")";
cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.2832);cx.fill();
}
for(i=0;i<P.length;i++){
for(j=i+1;j<P.length;j++){
p=P[i];q=P[j];
dx=p.x-q.x;dy=p.y-q.y;d=dx*dx+dy*dy;
if(d<12100){
cx.strokeStyle="rgba(255,255,255,"+(.16*(1-d/12100))+")";
cx.lineWidth=1;
cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke();
}
}
}
raf=requestAnimationFrame(frame);
}
function start(){if(!raf){raf=requestAnimationFrame(frame);}}
function stop(){cancelAnimationFrame(raf);raf=0;cx.clearRect(0,0,w,h);}
size();
addEventListener("resize",size);
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY;});
addEventListener("pointerleave",function(){mx=my=-9999;});
document.addEventListener("visibilitychange",function(){if(document.hidden)stop();else if(on)start();});
function paint(){btn.textContent="частицы: "+(on?"вкл":"выкл");btn.setAttribute("aria-pressed",on);}
btn.addEventListener("click",function(){on=!on;paint();if(on)start();else stop();});
paint();
if(on)start();
})();

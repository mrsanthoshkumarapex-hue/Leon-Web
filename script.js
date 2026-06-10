// Reveal Animation

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".hero-card,.featured-card,.about-card"
)
.forEach(el=>{

observer.observe(el);

});

// Typing Effect

const heroTitle =
document.querySelector(
".hero-content h1"
);

if(heroTitle){

const text =
heroTitle.innerText;

heroTitle.innerText = "";

let i = 0;

function typeText(){

if(i < text.length){

heroTitle.innerHTML +=
text.charAt(i);

i++;

setTimeout(
typeText,
35
);

}

}

typeText();

}

// Floating Card

const heroCard =
document.querySelector(
".hero-card"
);

if(heroCard){

window.addEventListener(

"mousemove",

(e)=>{

let x =
(window.innerWidth / 2 - e.pageX)
/ 40;

let y =
(window.innerHeight / 2 - e.pageY)
/ 40;

heroCard.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

}

);

}

// Scroll Progress Bar

const progressBar =
document.createElement(
"div"
);

progressBar.style.position =
"fixed";

progressBar.style.top = "0";

progressBar.style.left = "0";

progressBar.style.height =
"4px";

progressBar.style.width =
"0%";

progressBar.style.zIndex =
"99999";

progressBar.style.background =
"linear-gradient(90deg,#38bdf8,#2563eb)";

document.body.appendChild(
progressBar
);

window.addEventListener(

"scroll",

()=>{

const scrollTop =
document.documentElement
.scrollTop;

const scrollHeight =
document.documentElement
.scrollHeight -
document.documentElement
.clientHeight;

const progress =
(scrollTop /
scrollHeight) * 100;

progressBar.style.width =
progress + "%";

}

);

// PWA Install

let deferredPrompt;

window.addEventListener(

"beforeinstallprompt",

(e)=>{

e.preventDefault();

deferredPrompt = e;

}

);

const installBtn =
document.getElementById(
"installBtn"
);

if(installBtn){

installBtn.addEventListener(

"click",

async()=>{

if(deferredPrompt){

deferredPrompt.prompt();

}

}

);

}

// Console Branding

console.log(
"%c🚀 LEON WEB",
"font-size:22px;color:#38bdf8;font-weight:bold;"
);

console.log(
"%cDesigned By Santhosh Kumar",
"font-size:14px;color:white;"
);
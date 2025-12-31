const links=document.querySelectorAll("nav a");
const indicator=document.querySelector(".indicator");
const sections=document.querySelectorAll(".section");
const menu=document.getElementById("menu");
const nav=document.getElementById("nav");

function moveIndicator(el){
  indicator.style.width=el.offsetWidth+"px";
  indicator.style.left=el.offsetLeft+"px";
}

links.forEach(link=>{
  link.addEventListener("click",()=>{
    links.forEach(l=>l.classList.remove("active"));
    link.classList.add("active");
    moveIndicator(link);
    nav.classList.remove("show");
  });
});

moveIndicator(document.querySelector(".active"));


const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(link=>{
        if(link.getAttribute("href")==="#"+entry.target.id){
          links.forEach(l=>l.classList.remove("active"));
          link.classList.add("active");
          moveIndicator(link);
        }
      });
      entry.target.classList.add("visible");
    }
  });
},{threshold:0.6});

sections.forEach(s=>observer.observe(s));

menu.onclick=()=>nav.classList.toggle("show");

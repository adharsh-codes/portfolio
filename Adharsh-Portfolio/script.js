const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="76px";nav.style.right="20px";nav.style.flexDirection="column";nav.style.padding="18px";nav.style.background="#0d1b2d";nav.style.border="1px solid rgba(255,255,255,.09)";nav.style.borderRadius="14px"});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<=800)nav.style.display="none"}));

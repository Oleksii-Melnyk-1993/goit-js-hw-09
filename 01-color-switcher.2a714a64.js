let e=null;const t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),a=document.querySelector("body");d.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,d.disabled=!1,e=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),d.addEventListener("click",(function(){t.disabled=!1,d.disabled=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.2a714a64.js.map

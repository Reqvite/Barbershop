!function(){var e=document.querySelector(".mobile-menu-btn"),t=document.querySelector(".navbar-mobile"),n=document.querySelector(".icon-cross");e.addEventListener("click",(function(){t.classList.toggle("is-active"),n.classList.toggle("visible"),t.classList.contains("is-active")?document.querySelector("body").style.overflow="hidden":document.querySelector("body").style.overflow="visible"}));var o,i=document.querySelectorAll(".hero-photo");o=0,setInterval((function(){3===(o+=1)&&(o=0,i[2].style.opacity="0",i[0].style.opacity="1"),i[o].style.opacity="1",0!==o&&(i[o-1].style.opacity="0")}),1e4);var l=document.querySelectorAll(".benefits-list__numbers"),c=null,r=0;function s(){var e=0;r<=3&&(c=setInterval((function(){l[r].textContent=e+=1,e>=Number(l[r].dataset.num)&&(clearInterval(c),e=0,r+=1,s())}),1))}function a(){document.documentElement.getBoundingClientRect().top<=-800&&(s(),window.removeEventListener("scroll",a))}/Android|webOS|iPhone|iPad|iPod|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)?l.forEach((function(e){e.textContent=e.dataset.num})):window.addEventListener("scroll",a)}();
//# sourceMappingURL=index.fd6ab2e9.js.map

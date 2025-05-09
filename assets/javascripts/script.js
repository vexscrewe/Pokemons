let lastScrollTop = 0;
const header = document.querySelector("header")

window.addEventListener("scroll", function (){
    let currentScroll = this.window.pageYOffset || this.document.documentElement.scrollTop;

    if(currentScroll > lastScrollTop){
        header.style.top = '-100px';
    }else{
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
})

// carousel

const container = document.getElementById("tipagem");

document.getElementById("btn-left").addEventListener("click", function(){
    container.scrollBy({ left: -580, behavior: "smooth"})
})

document.getElementById("btn-right").addEventListener("click", function(){
    container.scrollBy({ left: 580, behavior: "smooth"})
})

setInterval(() => {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if(container.scrollLeft >= maxScrollLeft){
        container.scrollTo({ left: 0, behavior: "smooth"});
    } else{
        container.scrollBy({ left: 580, behavior: "smooth"});
    }
}, 1500)

const menuBtn = document.getElementById("menu-toggle")
const nav = document.querySelector("nav")

menuBtn.addEventListener("click", function(){
    nav.classList.toggle("active")
})
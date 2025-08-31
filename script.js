function locomotive() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
}
locomotive();


function nav_anim() {
    gsap.to(".nav-btn-wrapper", {
        left: "100%",
        duration: 2,
        stagger: 0.1
    })
}

function text_animate() {
    Shery.textAnimate("#h1s h1", {
        style: 1,
        y: 10,
        delay: 0.1,
        zIndex: "10",
        ease: "elastic.out(1,0.5)",
        duration: 1,
    });
}

function hero_amin() {
    gsap.from(".hero-anim", {
        y: 40,
        scale: 0.95,
        opacity: 0,
        ease: "sine.out",
        duration: 1,
        stagger: 0.4,
    })
}

function image_effect(){
    Shery.imageEffect("#textNimg img", {
        style: 1,
        // gooey:true,
        debug: true,
      });
}

document.addEventListener("DOMContentLoaded", () => {
    nav_anim();
    hero_amin();
})

window.addEventListener("load",()=>{
    text_animate();
    image_effect();
})
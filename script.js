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


Shery.imageEffect("#textNimg img", {
    style: 3,
    config: { "uFrequencyX": { "value": 12, "range": [0, 100] }, "uFrequencyY": { "value": 13.74, "range": [0, 100] }, "uFrequencyZ": { "value": 16.03, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": "1", "range": [-9999999, 9999999] }, "aspect": { "value": 0.750010874328253 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0.05 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.5, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
    // debug:true
})

Shery.imageEffect(".img-anim img", {
    style: 5,
    // config:{}
})

document.addEventListener("DOMContentLoaded", () => {
    nav_anim();
    hero_amin();
})

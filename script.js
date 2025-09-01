function locomotive() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
// locomotive();


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

function hero_anim() {
    gsap.from(".hero-anim", {
        y: 40,
        scale: 0.95,
        opacity: 0,
        ease: "sine.out",
        duration: 1,
        stagger: 0.4,
    })
}

function image_amination() {

    Shery.imageEffect("#textNimg img", {
        style: 3,
        config: {
            "uFrequencyX": { "value": 41.22, "range": [0, 100] }, "uFrequencyY": { "value": 22.9, "range": [0, 100] }, "uFrequencyZ": { "value": 16.79, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 14.47 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.750010874328253 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.5, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }
        }
        // debug:true
    })

    Shery.imageEffect(".img-anim img", {
        style: 5,
        config: {
            "a": { "value": 2.98, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7788366777132614 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.5, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }
        }
    })

    // GOOEY EFFECT
    Shery.imageEffect("#img-div", {
        style: 6,
        gooey: true,
        // debug: true
        config: {
            "noiseDetail": { "value": 7.44, "range": [0, 100] }, "distortionAmount": { "value": 2.98, "range": [0, 10] }, "scale": { "value": 36.36, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 0.8, "range": [0.1, 5] }, "durationIn": { "value": 0.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.15, "range": [0, 10] }, "metaball": { "value": 0.12, "range": [0, 2] }, "discard_threshold": { "value": 0.34, "range": [0, 1] }, "antialias_threshold": { "value": 0.02, "range": [0, 0.1] }, "noise_height": { "value": 0.21, "range": [0, 2] }, "noise_scale": { "value": 29.01, "range": [0, 100] }
        }
    })
}

function gooey_effect() {
    var pTags = document.querySelectorAll(".p3-text");
    var img_div = document.querySelector("#img-div");
    let counter = 0;
    let num = 0;
    var p_post = [100, 0, -115, -230];
    // 

    img_div.addEventListener("click", () => {
        counter <= pTags.length - 1 ? counter : counter = 0;
        switch (counter) {
            case 0:
                gsap.to(pTags[counter], {
                    top: "-=100%",
                    duration: 0.5,
                    onComplete: function () {
                        gsap.set(pTags[counter], { top: p_post[counter] + "%" });
                        //     }
                        // })
                        counter++;
                        gsap.to(pTags[counter], {
                            top: "-=115%",
                            duration: 1,
                            ease: Expo.expoInOut
                        })
                    }
                })
                break;
            case 1:
                gsap.to(pTags[counter], {
                    top: "-=100%",
                    duration: 0.5,
                    onComplete: function () {
                        gsap.set(pTags[counter], { top: p_post[counter] + "%" });
                        //     }
                        // })
                        counter++;
                        gsap.to(pTags[counter], {
                            top: "-=115%",
                            duration: 1,
                            ease: Expo.expoInOut
                        })
                    }
                })
                break;
            case 2:
                gsap.to(pTags[counter], {
                    top: "-=100%",
                    duration: 0.5,
                    onComplete: function () {
                        gsap.set(pTags[counter], { top: p_post[counter] + "%" });
                        //     }
                        // })
                        counter++;
                        gsap.to(pTags[counter], {
                            top: "-=115%",
                            duration: 1,
                            ease: Expo.expoInOut
                        })
                    }
                })
                break;
            case 3:
                gsap.to(pTags[counter], {
                    top: "-=100%",
                    duration: 0.5,
                    onComplete: function () {
                        gsap.set(pTags[counter], { top: p_post[counter] + "%" });
                        //     }
                        // })
                        counter++;
                        gsap.to(pTags[0], {
                            top: "0%",
                            duration: 1,
                            ease: Expo.expoInOut
                        })
                    }
                })
                break;
        }
    })
}

function video_effect() {
    var btn = document.querySelector("#end-page button");
    var video_div = document.querySelector("#end-page video");
    btn.addEventListener("mouseenter", () => {
        gsap.to(video_div, {
            opacity: 1,
            duration: 0.5,
            ease: Expo.expoInOut
        })
    })

    btn.addEventListener("mouseleave", () => {
        gsap.to(video_div, {
            opacity: 0,
            duration: 0.5,
            ease: Expo.expoInOut
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    nav_anim();
    hero_anim();
})

window.addEventListener("load", () => {
    text_animate();
    image_amination();
    gooey_effect();
    video_effect();
})
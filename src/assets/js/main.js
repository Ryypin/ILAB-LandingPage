"use strict";

// <!--------------- GSAP MA GUEULE !!! ---------------!>
gsap.registerPlugin(ScrollTrigger);

gsap.to(".title__grid--one", {x:0, opacity: 1, duration:1.5})
gsap.to(".title__grid--two", {x:0, opacity: 1,  duration:1.5})
gsap.to(".title__grid--three", {x:0, opacity: 1,  duration:1.5})
gsap.to(".title__grid--four", {x:0, opacity: 1,  duration:1.5})
gsap.to(".title__grid--five", {x:0, opacity: 1,  duration:1.5})
gsap.to(".title__grid--six", {x:0, opacity: 1,  duration:1.5})
gsap.to(".title__grid--seven", {x:0, opacity: 1,  duration:1.5})

let mql = window.matchMedia('(max-width: 1200px)');
let colors = ["#4d82f6", "#ff5c00", "#783be1", "#5319b6", "#ff303b"];
let mixBlock = document.querySelector(".mix__block--one");

function TriggerDesk(e){
    if(mql.matches) {
        gsap.to(".mix__block--one", {
            scrollTrigger: {
                trigger: ".section--mix",
                start: "top bottom",
            },
            backgroundColor: "#c327fa",
            duration: 1
        });
        
        gsap.to(".mix__block--two", {
            scrollTrigger: {
                trigger: ".mix__block--two",
                start: "top bottom",
            },
            backgroundColor: "#ff5c00",
            duration: 1
        });
        
        gsap.to(".mix__block--three", {
            scrollTrigger: {
                trigger: ".mix__block--three",
                start: "top bottom",
            },
            backgroundColor: "#c327fa",
            duration: 1
        });
    }
}

TriggerDesk(mql);
mql.addListener(TriggerDesk);

gsap.to(".section--mix", {
    scrollTrigger: {
        trigger: ".section--mix",
        start: "150px bottom",
        end: "bottom bottom"
    },
    opacity: 1,
    duration: 1
});

gsap.to(".about", {
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom bottom"
    },
    y: 0,
    opacity: 1,
    ease: Power2. easeOut,
    duration: 0.5
});

gsap.to(".demo__title", {
    scrollTrigger: {
        trigger: ".section--demo",
        start: "50px bottom",
        end: "bottom bottom",
    },
    y: 0,
    opacity: 1,
    duration: 1
});

gsap.to(".demo__video", {
    scrollTrigger: {
        trigger: ".section--demo",
        start: "50px bottom",
        end: "bottom bottom",
    },
    y: 0,
    opacity: 1,
    duration: 1
});

// <!--------------- HOVER PUTE ---------------!>


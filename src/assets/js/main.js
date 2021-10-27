"use strict";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".about", {
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom bottom",
        markers: true
    },
    xPercent: 100,
    opacity: 1,
    duration: 1
});

gsap.to(".mix__block", {
    scrollTrigger: {
        trigger: ".section--mix",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        pin: true
    },
    backgroundColor: "#c327fa",
    duration: 1
});
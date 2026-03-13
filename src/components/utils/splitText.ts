import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
anim?: gsap.core.Animation;
split?: any;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
ScrollTrigger.config({ ignoreMobileResize: true });

if (window.innerWidth < 900) return;

const paras = document.querySelectorAll<ParaElement>(".para");
const titles = document.querySelectorAll<ParaElement>(".title");

paras.forEach((para) => {
para.classList.add("visible");

```
if (para.anim) {
  para.anim.progress(1).kill();
  para.split?.revert();
}

const split = new SplitText(para as HTMLElement, {
  type: "lines,words",
  linesClass: "split-line",
});

para.split = split;

para.anim = gsap.fromTo(
  split.words,
  { autoAlpha: 0, y: 80 },
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: para.parentElement?.parentElement,
      toggleActions: "play pause resume reverse",
      start: window.innerWidth <= 1024 ? "top 60%" : "20% 60%",
    },
    duration: 1,
    ease: "power3.out",
    y: 0,
    stagger: 0.02,
  }
);
```

});

titles.forEach((title) => {
if (title.anim) {
title.anim.progress(1).kill();
title.split?.revert();
}

```
const split: any = new SplitText(title, {
  type: "chars,lines",
  linesClass: "split-line",
});

title.split = split;

title.anim = gsap.fromTo(
  split.chars,
  { autoAlpha: 0, y: 80, rotate: 10 },
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: title.parentElement?.parentElement,
      toggleActions: "play pause resume reverse",
      start: window.innerWidth <= 1024 ? "top 60%" : "20% 60%",
    },
    duration: 0.8,
    ease: "power2.inOut",
    y: 0,
    rotate: 0,
    stagger: 0.03,
  }
);
```

});
}

const scroll = new LocomotiveScroll({
  el: document.querySelector(".allMighty"),
  smooth: true,
  multiplier: 0.8,
  smartphone: {
    smooth: true,
    multiplier: 0.5,
  },
  tablet: {
    smooth: true,
    multiplier: 0.6,
  },
});

const topSection = document.querySelector(".top-section");
topSection.addEventListener("wheel", (e) => e.preventDefault());
topSection.addEventListener("touchmove", (e) => e.preventDefault());

let scrollVal = topSection.scrollWidth * 0.23;
topSection.scrollLeft = scrollVal;
let pos;
let isDragging = false;

topSection.addEventListener("mousedown", (dets) => {
  pos = dets.clientX;
  isDragging = true;
  scrollVal = topSection.scrollLeft;

  topSection.addEventListener("mousemove", handleMouseMove);
});

topSection.addEventListener("mouseup", (dets) => {
  if (isDragging) {
    isDragging = false;
    topSection.removeEventListener("mousemove", handleMouseMove);
  }
});
topSection.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    topSection.removeEventListener("mousemove", handleMouseMove);
  }
});

function handleMouseMove(dets) {
  const calcScroll = Math.max(0, pos - dets.clientX + scrollVal);
  gsap.to(topSection, {
    scrollLeft: calcScroll,
    ease: Power3,
  });
}

const tl = gsap.timeline();

tl.to('.allMighty', {
  y:'10%',
  scale:0.3,
  duration:0,
})

tl.to('.allMighty', {
  y:'-30%',
  duration:1.2,
  ease:Power3.easeIn(1),
})

tl.to('.allMighty',{
  rotate:360,
  delay:0.4,
  duration:1.5,
  ease:Power3.easeIn,
  scale:1,
  y:0,
})
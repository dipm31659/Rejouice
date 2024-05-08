const page1 = document.querySelector(".page1");
let tl = gsap.timeline();

function loaderAnimation() {
  tl.from(".loader h3:nth-child(1)", {
    x: "-200",
    opacity: 0,
    duration: 1,
  }, "3")
  tl.from(".loader h3:nth-child(2)", {
    y: "200",
    opacity: 0,
    duration: 1,
  }, "3")
  tl.from(".loader h3:nth-child(3)", {
    x: "200",
    opacity: 0,
    duration: 1,
  }, "3")
  tl.to(".loader h3:nth-child(1)", {
    opacity: 0,
    x: "200",
    duration: 3,
  },"4")
  tl.to(".loader h3:nth-child(2)", {
    opacity: 0,
    y: "-200",
    duration: 3,
  },"4")
  tl.to(".loader h3:nth-child(3)", {
    opacity: 0,
    x: "-200",
    duration: 3,
  },"4")
  tl.to(".loader", {
    opacity: 0,
    scale: 0,
    duration: 2,
  },"7")
  tl.to(".loader", {
    display: "none",
  }
}
loaderAnimation();

function cursorAnimation() {
  page1.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
      transform: "translate(-50%, -50%)",
      delay: .1,
      ease: "expo",
    })
  })
  page1.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 1,
      opacity: 1,
    })
  })
  page1.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 0,
      opacity: 0,
    })
  })
  tl.from(".page1 video", {
    scale: 0.2,
    duration: 2,
  },"7")
}
cursorAnimation();

function page2Animation() {
  tl.from(".page2 .navbar2", {
    opacity: 0,
    scale: 0,
    y: "-200%",
    duration: 1,
    delay: .8,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      // markers: true,
      start: "top 55%",
      end: "top 40%",
      scrub: 2,
    }
  })
  tl.from(".page2 .navbar2 .lft h4 , .page2 .navbar2 .rght h4", {
    opacity: 0,
    scale: 0,
    y: "-200%",
    duration: .8,
    delay: .5,
    stagger: .4,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 35%",
      scrub: 2,
    }
  })
  tl.from(".page2 .information .para:nth-child(1), .page2 .information .para:nth-child(3)", {
    x: "-300%",
    opacity: 0,
    stagger: .2,
    ease: Circ,
    duration: 1,
    delay: .5,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      // markers: true,
      start: "top 40%",
      end: "top 0%",
      scrub: 2,
    }
  }, "2")
  tl.from(".page2 .information .para:nth-child(2), .page2 .information .para:nth-child(4)", {
    x: "300%",
    opacity: 0,
    stagger: .2,
    ease: Circ,
    duration: 1,
    delay: .5,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      // markers: true,
      start: "top 40%",
      end: "top 0%",
      scrub: 2,
    }
  }, "2")
}
page2Animation();

function swiperJsAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
swiperJsAnimation();


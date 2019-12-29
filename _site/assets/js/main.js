$(function() {
  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3
  });

  //  Intro animations
  sr.reveal(".intro__hello", { delay: 100 });
  sr.reveal(".intro__introduction", { delay: 300 });
  sr.reveal(".intro__get-in-touch", { delay: 900 });

  //  Background animations
  sr.reveal(".background-section h1");
  sr.reveal(".background__content p, .background__image", { viewFactor: 0.2 });

  //  Experience animations
  sr.reveal(".experience-section h1", { viewFactor: 1 });
  sr.reveal(".experience", { viewFactor: 0.2 });
});

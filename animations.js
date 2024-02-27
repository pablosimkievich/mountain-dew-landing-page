TweenMax.from(".section", 8, {
    backgroundColor: "yellow",
  });
  
  TweenMax.from(".image", 1.5, {
    delay: 1,
    y: -1500,
    ease: Bounce.easeInOut,
  });
  TweenMax.from(".text", 1.5, {
    delay: 3,
    opacity: 0,
    y: 40,
  });
  TweenMax.from(".circle-logo", 3, {
    delay: 6,
    x: -360,
    rotation: "1440deg",
  });
  TweenMax.staggerFrom(
    ".nav-items",
    0.7,
    {
      delay: 4,
      opacity: 0,
      y: -30,
    },
    0.25
  );
  TweenMax.staggerFrom(
    ".social-network",
    0.5,
    {
      delay: 5.8,
      opacity: 0,
      y: -50,
    },
    0.25
  );
  TweenMax.staggerFrom(
    ".small-cans",
    0.5,
    {
      delay: 6.8,
      opacity: 0,
      scale: 0.3,
      x: -300,
    },
    0.4
  );
  
document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('#hero-title', {
      duration: 1500,
      origin: 'top',
      distance: '50px',
      opacity: 0,
      scale: 0.9,
    });

    ScrollReveal().reveal('#hero-lead', {
      duration: 1500,
      origin: 'bottom',
      distance: '50px',
      delay: 200,
      opacity: 0,
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('#hero-btn', {
      duration: 2000,
      origin: 'bottom',
      distance: '30px',
      delay: 400,
      scale: 0.8,
      opacity: 0,
      easing: 'ease-in-out',
    });
  });

    // 
    // about
    //
    
    ``
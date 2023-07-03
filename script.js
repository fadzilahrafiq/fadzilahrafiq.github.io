window.onload = (event) => {
    setTimeout( () => {
      let floatingPrompt = document.getElementById("floating-scroll-prompt");
      floatingPrompt.classList.add("hide");
    }, 15000);

    const introObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          document.getElementById("biography-intro__profile-pic").classList.add("anim-slide-in");
          document.getElementById("biography-intro__introduction").classList.add("anim-slide-in");
        }
      });
    });

    introObserver.observe(document.querySelector('.biography-intro__introduction'));
  };
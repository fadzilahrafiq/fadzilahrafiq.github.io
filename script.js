window.onload = (event) => {
    // setTimeout( () => {
    //   let floatingPrompt = document.getElementById("floating-scroll-prompt");
    //   floatingPrompt.classList.add("hide");
    // }, 15000);

    // setTimeout( () => {
    //   document.getElementsByClassName("landing-title")[0].classList.add("reveal");
    //   document.getElementsByClassName("landing-menu")[0].classList.add("reveal");
    // }, 5000)

    const introObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          document.getElementById("biography-intro__content").classList.add("anim-slide-in");
          // document.getElementById("biography-intro__introduction").classList.add("anim-slide-in");
        }
      });
    });

    // introObserver.observe(document.querySelector('.biography-intro'));

    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          let skillBubblesText = document.getElementsByClassName("skill-bubble__title-text");
          let skillBubbles = document.getElementsByClassName("skill-bubble");
          for (let i = 0 ; i < skillBubbles.length ; i++) {
            let skillBubble = skillBubbles[i];
            let skillBubbleText = skillBubblesText[i];
            skillBubble.classList.add("show");
            skillBubbleText.classList.add("show");
          }
        }
      });
    });

    // skillObserver.observe(document.querySelector('.skill-display'));
  };

  function scrollToBiography() {
    document.getElementById("biography-section").scrollIntoView({ behavior: "smooth" });
  }

  function navigateToLanding() {
    document.getElementById("landing-section").scrollIntoView({ behavior: "smooth" });
  }

  function goToLanding() {
    document.getElementById("main-container").classList.add("fade-out");
    setTimeout( () => {
      window.location.href = "./index.html";
    }, 1000)
  }

  function navigateToContact() {
    document.getElementById("main-container").classList.add("fade-out");
    setTimeout( () => {
      window.location.href = "./contact.html";
    }, 1000)
  }

  function navigateToExperience() {
    document.getElementById("biography-section").classList.add("slide-out-left");
    setTimeout( () => {
      window.location.href = "./experience.html";
    }, 1800)
  }

  function navigateToProjects() {
    document.getElementById("biography-section").classList.add("slide-out-right");
    setTimeout( () => {
      window.location.href = "./project.html";
    }, 1800)
  }
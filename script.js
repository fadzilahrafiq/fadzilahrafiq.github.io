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

  const exp1bserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        document.getElementById("experience-one").classList.add("anim-slide-in");
        // document.getElementById("biography-intro__introduction").classList.add("anim-slide-in");
      }
    });
  });

  exp1bserver.observe(document.querySelector('#experience-one'));

  const exp2Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        document.getElementById("experience-two").classList.add("anim-slide-in");
        // document.getElementById("biography-intro__introduction").classList.add("anim-slide-in");
      }
    });
  });

  exp2Observer.observe(document.querySelector('#experience-two'));

  const exp3Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        document.getElementById("experience-three").classList.add("anim-slide-in");
        // document.getElementById("biography-intro__introduction").classList.add("anim-slide-in");
      }
    });
  });

  exp3Observer.observe(document.querySelector('#experience-three'));
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
  document.getElementById("main-container").classList.remove("fade-in");
  document.getElementById("main-container").classList.add("slide-out-left");
  setTimeout( () => {
    window.location.href = "./experience.html";
  }, 1500)
}

function navigateToProjects() {
  document.getElementById("main-container").classList.remove("fade-in");
  document.getElementById("main-container").classList.add("slide-out-right");
  setTimeout( () => {
    window.location.href = "./project.html";
  }, 1500)
}

function navigateToAboutMe() {
  document.getElementById("main-container").classList.remove("fade-in");
  document.getElementById("main-container").classList.add("slide-out-right");
  setTimeout( () => {
    window.location.href = "./index.html?goToAbout=true";
  }, 1500)
}

function goToLinkedIn() {
  window.open('https://my.linkedin.com/in/fadzilahrafiq','_blank');
}

function showEmail() {

}

function showWhatsapp() {
  window.open('https://wa.link/e01ht0','_blank');
}
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


function toggleCard(card) {
  // Optional: close all other cards when one opens:
  document.querySelectorAll(".project-card").forEach(c => {
    if (c !== card) c.classList.remove("expanded");
  });

  card.classList.toggle("expanded");
}

function toggleProject(event, btn) {
  event.preventDefault();
  event.stopPropagation();

  const card = btn.closest(".project-box");
  card.classList.toggle("expanded");
}

window.toggleProject = function(event, btn) {
  event.preventDefault();
  event.stopPropagation();
  const card = btn.closest(".project-box");
  console.log('jbt')
  card.classList.toggle("expanded");
}



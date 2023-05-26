/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*======= MENU SHOW =======*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*======= MENU HIDDEN =======*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_uozw52g', 'template_xkzk49f', '#contact-form', 'JmZ7bOXeXxm_wFEtW').then(
    function () {
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅';
      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
      // Clear input fields
      contactForm.reset();
    },
    function (error) {
      // Show sent message
      contactMessage.textContent = 'Message not sent (services error) ❌';
    },
  );
};

contactForm.addEventListener('submit', sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data, .home__network, .contact__container, .footer__container`);
sr.reveal(`.home__image`, { origin: 'bottom' });
sr.reveal(`.about__data, .skills__data`, { origin: 'left' });
sr.reveal(`.about__image, .skills__content`, { origin: 'right' });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });

/*=============== MULTIPLE TYPING TEXT ANIMATION ===============*/
const text = document.querySelector('.home__education span');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Full-Stack Developer';
  }, 0);
  // setTimeout(() => {
  //   text.textContent = 'Front-End Developer';
  // }, 4000);
  // setTimeout(() => {
  //   text.textContent = 'Back-End Developer';
  // }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

/*=============== MULTIPLE TYPING TEXT ANIMATION ===============*/
// const toggleMode = document.getElementById('toggle-mode');
// toggleMode.addEventListener('click', () => {
//   if (toggleMode.className == 'ri-sun-fill') {
//     toggleMode.classList.remove('ri-sun-fill');
//     toggleMode.classList.add('ri-moon-fill');
//   } else {
//     toggleMode.classList.remove('ri-moon-fill');
//     toggleMode.classList.add('ri-sun-fill');
//   }
// });



<<<<<<< HEAD
export default function parallaxie(selector, speed = 0.8, startPosition) {
  let elementBg = document.querySelector(selector);
  let image = elementBg.getAttribute("data-background");
  if (!image) {
    image = window.getComputedStyle(elementBg).backgroundImage;
  }
  let position = elementBg.getBoundingClientRect().top * speed;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = 'cover';
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = 'fixed';
  elementBg.style.backgroundPosition = `center ${startPosition !== undefined ? startPosition : position}px`;

  window.addEventListener('scroll', () => {
    position = elementBg.getBoundingClientRect().top * speed;
    elementBg.style.backgroundPosition = `center ${position}px`;
  });
=======
export default function parallaxie(selector, speed = 0.8, startPosition) {
  let elementBg = document.querySelector(selector);
  let image = elementBg.getAttribute("data-background");
  if (!image) {
    image = window.getComputedStyle(elementBg).backgroundImage;
  }
  let position = elementBg.getBoundingClientRect().top * speed;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = 'cover';
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = 'fixed';
  elementBg.style.backgroundPosition = `center ${startPosition !== undefined ? startPosition : position}px`;

  window.addEventListener('scroll', () => {
    position = elementBg.getBoundingClientRect().top * speed;
    elementBg.style.backgroundPosition = `center ${position}px`;
  });
>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
}
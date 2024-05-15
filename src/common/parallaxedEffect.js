<<<<<<< HEAD
export default function parallaxedEffect(e) {
  let amountMovedX = (e.clientX * -0.3 / 10);
  let amountMovedY = (e.clientY * -0.3 / 10);
  let parallaxedElements = document.getElementsByClassName("parallaxed");
  for (let i = 0; i < parallaxedElements.length; i++) {
    parallaxedElements[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
  }
=======
export default function parallaxedEffect(e) {
  let amountMovedX = (e.clientX * -0.3 / 10);
  let amountMovedY = (e.clientY * -0.3 / 10);
  let parallaxedElements = document.getElementsByClassName("parallaxed");
  for (let i = 0; i < parallaxedElements.length; i++) {
    parallaxedElements[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
  }
>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
}
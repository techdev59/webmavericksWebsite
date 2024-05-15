<<<<<<< HEAD
export default function loadBackgroudImages() {
  let backgroudImages = document.querySelectorAll("[data-background]");

  if (backgroudImages.length > 0) {
    backgroudImages.forEach(element => {
      let image = element.dataset.background;
      element.style.backgroundImage = `url('${image}')`;
    })
  }
=======
export default function loadBackgroudImages() {
  let backgroudImages = document.querySelectorAll("[data-background]");

  if (backgroudImages.length > 0) {
    backgroudImages.forEach(element => {
      let image = element.dataset.background;
      element.style.backgroundImage = `url('${image}')`;
    })
  }
>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
}
<<<<<<< HEAD
import parallaxie from '@/common/parallaxie';
import React, { useEffect } from 'react';

function SectionImage() {
  useEffect(() => {
    parallaxie('.back-image.parallaxie', 0.35);
  }, []);

  return (
    <div className="back-image bg-img parallaxie" data-background="/dark/assets/imgs/background/17.jpg" data-overlay-dark="5" />
  )
}

=======
import parallaxie from '@/common/parallaxie';
import React, { useEffect } from 'react';

function SectionImage() {
  useEffect(() => {
    parallaxie('.back-image.parallaxie', 0.35);
  }, []);

  return (
    <div className="back-image bg-img parallaxie" data-background="/dark/assets/imgs/background/17.jpg" data-overlay-dark="5" />
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default SectionImage
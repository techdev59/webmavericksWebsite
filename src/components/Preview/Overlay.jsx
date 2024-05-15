<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Overlay() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="overlay bg-img" data-background="/landing-preview/img/header/overlay.webp"></div>
  )
}

=======
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Overlay() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="overlay bg-img" data-background="/landing-preview/img/header/overlay.webp"></div>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default Overlay
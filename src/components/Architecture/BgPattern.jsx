<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function BgPattern({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/bg-lines-1.svg`}></div>
  )
}

=======
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function BgPattern({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/bg-lines-1.svg`}></div>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default BgPattern
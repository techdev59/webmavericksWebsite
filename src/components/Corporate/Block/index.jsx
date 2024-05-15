<<<<<<< HEAD
import React from 'react';
//= Components
import Values from './Values';
import Video from './Video';

function Block({ lightMode }) {
  return (
    <section className="block-sec section-padding">
      <div className="container">
        <Video lightMode={lightMode} />
        <Values />
      </div>
    </section>
  )
}

=======
import React from 'react';
//= Components
import Values from './Values';
import Video from './Video';

function Block({ lightMode }) {
  return (
    <section className="block-sec section-padding">
      <div className="container">
        <Video lightMode={lightMode} />
        <Values />
      </div>
    </section>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default Block
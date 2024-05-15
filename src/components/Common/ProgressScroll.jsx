<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Scripts
import scrollToTop from '@/common/scrollToTop';

const ProgressScroll = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="progress-wrap cursor-pointer" >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  )
}

=======
import React, { useEffect } from 'react';
//= Scripts
import scrollToTop from '@/common/scrollToTop';

const ProgressScroll = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="progress-wrap cursor-pointer" >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default ProgressScroll
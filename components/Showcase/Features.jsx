import React, { useState, useEffect } from 'react';

const Features = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresElement = document.querySelector('#features');
      if (featuresElement) {
        const { top, bottom } = featuresElement.getBoundingClientRect();
        setShowPopup(bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="features" className='relative transition-all duration-300'>
      <div className='w-full h-[90vh] mt-56 bg-black/[0.5] border border-green-500/[.2] rounded-xl p-1  z-50'>
        <iframe width="2000" className='w-full h-full rounded-xl' height="3000" src="https://www.youtube-nocookie.com/embed/vpvtZZi5ZWk?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      {/* {showPopup && (
        <div className='fixed bottom-10 right-10 transition-all duration-300 ease-in-out z-50'>
          <iframe width="2000" className='w-96 h-56 rounded-xl' height="3000" src="https://www.youtube-nocookie.com/embed/vpvtZZi5ZWk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )} */}
    </div>
  );
};

export default Features;

import React from 'react';

/* SVG */
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <ArrowIcon className="arrow left" />
    </div>
  );
}

export default LeftArrow;
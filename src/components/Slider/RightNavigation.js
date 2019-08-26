import React from 'react';

/* SVG */
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <ArrowIcon className="arrow" />
    </div>
  );
}

export default RightArrow;
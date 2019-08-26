import React from 'react';

const Pagination = (props) => {
  return (
    <div className="pagination" onClick={props.goToNextSlide}>
      pagination
    </div>
  );
}

export default Pagination;
import React from 'react';

const Pagination = ({ item, action, active }) => {

  return (
    <ul className="pagination">

      {
        item.map((item, i) => {
          return <li className={ i === active ? "pagination__item -active": "pagination__item"} onClick={() => action(i)} key={i}>
                    <button>{i}</button>
                 </li>
        })
      }
    </ul>
  );
}

export default Pagination;
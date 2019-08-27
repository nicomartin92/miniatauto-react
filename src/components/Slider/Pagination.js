import React from 'react';

const Pagination = ({ item, action }) => {

  return (
    <ul className="pagination">

      {
        item.map((item, i) => {
          return <li className="pagination__item" onClick={() => action(i)}>
            {i}
          </li>
        })
      }
    </ul>
  );
}

export default Pagination;
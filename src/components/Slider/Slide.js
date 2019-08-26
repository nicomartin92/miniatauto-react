import React from 'react';

const Slide = ({item}) => {
  const styles = {
    backgroundImage: `url()`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }

  return (
    <div className="slide" style={styles}>
      <img src={item.image} alt=""/>
    </div>
  )
}

export default Slide
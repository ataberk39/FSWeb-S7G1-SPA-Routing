import React from 'react'

const TrendMoviesDetail = (props) => {
    const {image,original_title}=props
    console.log(image);
  return (
    <div className='trend' >
        <h1>{original_title}</h1>
        <img src={image}/>
    </div>
  )
}

export default TrendMoviesDetail
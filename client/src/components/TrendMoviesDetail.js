import React from 'react'

const TrendMoviesDetail = (props) => {
    const {image,original_title,overview,popularity}=props
    const baseUrl = "https://image.tmdb.org/t/p/";
    const imageSize = "w300";
    
    const fullImageUrl = `${baseUrl}${imageSize}${image}`;  
    
  return (
    <div className='trend' >
        <h1>{original_title}</h1>
        <img src={fullImageUrl}/>
        <h3 className='tv-overwiew'>{overview} </h3>
        <h3>Popularity : {popularity} </h3>
    </div>
  )
}

export default TrendMoviesDetail
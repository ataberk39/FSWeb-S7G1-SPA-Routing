import React from 'react'

const TrendTvDetail = ({original_title,image,overview,popularity,vote_average}) => {

  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w300";
  
  const fullImageUrl = `${baseUrl}${imageSize}${image}`;   

  return (
    <div className='trend'>
        
        <h1>{original_title}</h1>
        <img src={fullImageUrl}/>
        <h3 className='tv-overwiew'>{overview} </h3>
        <h3>Popularity : {popularity}</h3>
        <h3>Vote Average : {vote_average}</h3>

    </div>
  )
}

export default TrendTvDetail
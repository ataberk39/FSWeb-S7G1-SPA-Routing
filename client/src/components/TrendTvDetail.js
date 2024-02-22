import React from 'react'

const TrendTvDetail = ({original_title,image,overview,popularity,vote_average}) => {
  return (
    <div className='trend'>
        
        <h1>{original_title}</h1>
        <img src={image}/>
        <h3>{overview} </h3>
        <h3>{popularity}</h3>
        <h3>{vote_average}</h3>

    </div>
  )
}

export default TrendTvDetail
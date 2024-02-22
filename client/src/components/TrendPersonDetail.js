import React from 'react'

const TrendPersonDetail = ({original_title,image,popularity,department}) => {

  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w300";
  
  const fullImageUrl = `${baseUrl}${imageSize}${image}`;   

  return (
    <div className="trend">
        <h1>{original_title}</h1>
        <img src={fullImageUrl}/>
        <h3>Follower : {popularity}</h3>
        <h3>Department : {department} </h3>
    </div>
  )
}

export default TrendPersonDetail
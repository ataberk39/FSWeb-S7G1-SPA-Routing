import React from 'react'

const TrendPersonDetail = ({original_title,image,popularity,department}) => {
  return (
    <div className="trend">
        <h1>{original_title}</h1>
        <img src={image}/>
        <h3>{popularity}</h3>
        <h3>{department} </h3>
    </div>
  )
}

export default TrendPersonDetail
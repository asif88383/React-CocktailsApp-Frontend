import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, info, id, glass}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3 className='cocktail-title'>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className='btn btn-primary'>
          View cocktail
        </Link>
      </div>
    </article>
  )
}

export default Cocktail

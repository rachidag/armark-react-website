import React from 'react';
import { Link } from 'react-router-dom';
import './text_image.scss';

const TextImage = ({ title, subtitle, image, link, imageRight, children }) => {
  return (
    <div className='text-image'>
      <div className="container">
        <div className={`row${imageRight ? '' : ' row--reverse'}`}>

          <div className='col-md-6 col-12'> 
              <span>{subtitle}</span>
              <h2>{title}</h2>
              <div className='text-image__body'>
                  {children}
              </div>
              <Link to={link} className="btn">See mor details</Link>
          </div>

          <div className='col-md-6  col-12'>
            <div className='text-image__img'>
              <img src={image} alt={title} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TextImage;
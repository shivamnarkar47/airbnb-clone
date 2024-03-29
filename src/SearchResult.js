import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <hr className="dash" />
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchresult__stars">
            ⭐<strong>{star}</strong>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

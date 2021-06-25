import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p> 62 Stays . 26 August to 30 August . 2 guest</p>
        <h1>Stay Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://www.thatscandinavianfeeling.com/wp-content/uploads/2018/10/scandinavian_apartment_prague_airbnb_bedroom.jpg"
        location="Mumbai,India"
        title="Independent Natural Seaside House"
        description="1 guest . 1 Bed . 1.5 Shared Bedroom . Near SeaShore . Free Parking . TV . Free Wifi"
        star={4.73}
        price="$30/night"
        total="$700 total"
      />
      <SearchResult
        img="https://a0.muscache.com/pictures/5fcbb0af-ace5-47bb-b251-eba6ada69681.jpg"
        location="Chennai,India"
        title="Spacious Night-based Urban Studio"
        description="2 guest . 1 Bed . 1.5 Shared Bedroom . Near Urban City . Free Parking . TV . Free Wifi"
        star={4.93}
        price="$75/night"
        total="$1500 total"
      />
      <SearchResult
        img="https://d262ilb51hltx0.cloudfront.net/max/800/0*D3BBy-BAnTpAgnac."
        location="Thiruvanathpuram,India"
        title="Seasonal Oceanside House"
        description="4 guest . 2 Bed . 1.5 Shared Bedroom . Near SeaShore . Free Parking . Free Wifi . Fish Food"
        star={4.73}
        price="$45/night"
        total="$900 total"
      />
    </div>
  );
}

export default SearchPage;

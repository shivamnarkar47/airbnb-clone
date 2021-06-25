import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/pictures/5fcbb0af-ace5-47bb-b251-eba6ada69681.jpg"
          title="High Quality Services"
          description="A business with high service quality will meet or exceed customer expectations whilst remaining economically competitive. Evidence from empirical studies suggests that improved service quality increases profitability and long term economic competitiveness."
          price="$75/hour"
        />
        <Card
          src="https://static.trip101.com/main_pics/4585/medium.jpg"
          title="Beach Houses"
          description="It doesn't matter who owns the property fronting the beach—up to the mean high tide line, all beaches in California are, by law, public beaches. ... When the only access points that lead to the sand are privatized and getting to the beach is impossible, legal skirmishes can erupt."
          price="$25/hour"
        />
        <Card
          src="https://devittosilveira.adv.br/wp-content/uploads/2019/06/airbnb-hotels-one-year.png"
          title="Golden Arrangements"
          description="Puerto Morelos, a small fishing village located 25 minutes south of Cancun boasts Excellence Riviera Cancun, Secrets Silversands and two Desire resorts (clothing optional) for adults and couples."
          price="$125/hour"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.cntraveler.com/photos/5e7cd4bf1185400008f5b3e7/master/pass/airbnb-courtesy-austin.jpeg"
          title="Nice Interiors"
          description="Like most design terms, “luxury” is hard to define. However, most luxury spaces have a few common elements that unite them. Luxury homes focus on comfort, elegance, and custom touches to embody the highest pedigree of interior design. Basically, you know it when you see it."
          price="$35/hour"
        />
        <Card
          src="https://www.etax.com.au/wp-content/uploads/2018/03/Airbnb-Tax-Information.jpg"
          title="High Comfort"
          description="Some people instinctively think that the softer the mattress is, the better. So, they think a Comfort Scale rating of 10 is the best, but that isn't quite how it works. Few people actually prefer a Comfort Scale of 10 or a Comfort Scale rating of 1. Most people do best with a comfort level somewhere in-between."
          price="$87/hour"
        />
        <Card
          src="https://furnishr.com/wp-content/uploads/white-minimal-bedroom.jpeg"
          title="Great Hospitability"
          description="The hospitality industry is a broad category of fields within the service industry that includes lodging, food and drink service, event planning, recreation, leisure, applied nutrition theme parks, travel and tourism. It includes hotels, tourism agencies, restaurants and bars."
          price="$105/hour"
        />
      </div>
    </div>
  );
}

export default Home;

import { useState } from 'react';
import { type Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  cardType?: 'cities' | 'near-places';
};

function OffersList({ offers, cardType = 'cities' }: OffersListProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const listClassName = cardType === 'near-places'
    ? 'near-places__list places__list'
    : 'cities__places-list places__list tabs__content';

  return (
    <div className={listClassName}>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          cardType={cardType}
          key={offer.id}
          isActive={offer.id === activeOfferId}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;

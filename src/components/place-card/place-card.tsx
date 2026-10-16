import { Link } from 'react-router-dom';
import { type Offer } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  cardType?: 'cities' | 'favorites' | 'near-places';
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function PlaceCard({
  offer,
  cardType = 'cities',
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}: PlaceCardProps) {
  const cardClassByType = {
    cities: 'cities__card',
    favorites: 'favorites__card',
    'near-places': 'near-places__card',
  };
  const imageWrapperClassByType = {
    cities: 'cities__image-wrapper',
    favorites: 'favorites__image-wrapper',
    'near-places': 'near-places__image-wrapper',
  };
  const cardClass = cardClassByType[cardType];
  const imageWrapperClass = imageWrapperClassByType[cardType];
  const infoClass = cardType === 'favorites' ? 'favorites__card-info' : '';
  const ratingWidth = Math.round(offer.rating) * 20;
  const offerTypeLabel = `${offer.type[0].toUpperCase()}${offer.type.slice(1)}`;

  return (
    <article
      className={`${cardClass} place-card`}
      data-active={isActive || undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={`/markup/img/${offer.previewImage}`}
            width={cardType === 'favorites' ? '150' : '260'}
            height={cardType === 'favorites' ? '110' : '200'}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={`${infoClass} place-card__info`.trim()}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${offer.isFavorite ? ' place-card__bookmark-button--active' : ''} button`}
            type="button"
            aria-label={offer.isFavorite ? 'Remove from bookmarks' : 'Add to bookmarks'}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }} />
            <span className="visually-hidden">Rating: {offer.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name"><Link to={`/offer/${offer.id}`}>{offer.title}</Link></h2>
        <p className="place-card__type">{offerTypeLabel}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

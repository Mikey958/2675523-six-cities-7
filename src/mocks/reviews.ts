import { type Review } from '../types/review';

const reviews: Review[] = [
  {
    id: 'review-paris-luxury-max',
    offerId: 'paris-luxury-apartment',
    user: { name: 'Max', avatarUrl: 'avatar-max.jpg' },
    rating: 4,
    comment: 'A quiet cozy and picturesque apartment near the river in Amsterdam. The building is green and dates back to the 18th century.',
    date: '2019-04-24',
  },
  {
    id: 'review-paris-room-angelina',
    offerId: 'paris-wood-and-stone',
    user: { name: 'Angelina', avatarUrl: 'avatar-angelina.jpg' },
    rating: 5,
    comment: 'A lovely room in a peaceful neighborhood. The apartment was clean, comfortable, and close to public transport.',
    date: '2020-05-14',
  },
  {
    id: 'review-amsterdam-canal-oliver',
    offerId: 'amsterdam-canal-view',
    user: { name: 'Oliver', avatarUrl: 'avatar-max.jpg' },
    rating: 4,
    comment: 'We enjoyed the canal view and the convenient location. Shops, restaurants, and the historic center were easy to reach.',
    date: '2021-08-02',
  },
  {
    id: 'review-cologne-castle-max',
    offerId: 'cologne-white-castle',
    user: { name: 'Max', avatarUrl: 'avatar-max.jpg' },
    rating: 5,
    comment: 'A spacious apartment with everything we needed. The host was welcoming and the city center was nearby.',
    date: '2022-03-19',
  },
];

export default reviews;

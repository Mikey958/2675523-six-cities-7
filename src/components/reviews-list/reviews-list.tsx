import { type Review as ReviewType } from '../../types/review';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: ReviewType[];
};

function ReviewsList({ reviews }: ReviewsListProps) {
  const sortedReviews = [...reviews].sort((first, second) => Date.parse(second.date) - Date.parse(first.date));

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <Review review={review} key={review.id} />)}
      </ul>
    </>
  );
}

export default ReviewsList;

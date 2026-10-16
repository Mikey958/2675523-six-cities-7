import { Fragment, useState, type FormEvent } from 'react';

const ratings = [
  { value: 5, title: 'perfect', id: '5-stars' },
  { value: 4, title: 'good', id: '4-stars' },
  { value: 3, title: 'not bad', id: '3-stars' },
  { value: 2, title: 'badly', id: '2-stars' },
  { value: 1, title: 'terribly', id: '1-star' },
];

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const isSubmitDisabled = rating === 0 || review.length < 50 || review.length > 300;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map(({ value, title, id }) => (
          <Fragment key={id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={id}
              type="radio"
              checked={rating === value}
              onChange={() => setRating(value)}
            />
            <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
        value={review}
        onChange={(event) => setReview(event.currentTarget.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;

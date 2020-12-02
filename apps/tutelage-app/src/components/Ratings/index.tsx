import React from 'react';

interface Props {
  levelRating: number;
}
const Ratings = (props: Props) => {
  const { levelRating } = props;

  const showRating = (levelRating: number) => {
    const rating = [];

    for (let i = 0; i < levelRating; i++) {
      rating.push(<em key={i} className="ic-star-02" />);
    }

    if (5 - levelRating > 0) {
      for (let i = 0; i < 5 - levelRating; i++) {
        rating.push(<em key={5 + i} className="ic-star-01" />);
      }
    }

    return rating;
  };

  return <div>{showRating(levelRating)}</div>;
};

export default Ratings;

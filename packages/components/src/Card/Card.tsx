import '../../tailwind.css';
import '../css/style.comp.css';

import React, { FC, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  username: string;
  image: string;
  rate: string;
  date: string;
  review: string;
}
export const Card: FC<CardProps> = function ({
  username,
  image,
  rate,
  date,
  review,
}) {
  return (
    <div className="user-reviews rounded-md  border-2 border-y-gray-400">
      <figure className="review">
        <blockquote className="review__text">{review}</blockquote>
        <figcaption className="review__user">
          <img src={image} alt="User 1" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">{username}</p>
            <p className="review__user-date">{date}</p>
          </div>
          <div className="review__rating">{rate}</div>
        </figcaption>
      </figure>
    </div>
  );
};

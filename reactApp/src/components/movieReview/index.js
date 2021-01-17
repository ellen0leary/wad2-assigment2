import React from "react";

export default ({ review }) => {
  return (
    <>
      <p>Review By: {review.authorName} </p>
      <p>{review.description} </p>
    </>
  );
};
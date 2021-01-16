import React, {useContext } from "react";
import "./reviewForm.css";
import useForm from "react-hook-form";
import {MoviesContext} from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";

const ReviewForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = data => {
    context.addReview(movie, data)
    history.push("/movies/favorites");
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add your review</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={movie.review ? movie.review.authorName : ""}
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <textarea
          rows="1"
          type="number"
          className="form-control"
          placeholder="Give a rating"
          defaultValue={movie.review ? movie.review.rating : ""}
          name="rating"
          ref={register({
            required: "No rating given",
            minLength: { value: 0, message: "Review is too short" }
          })}
        />
      </div>
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={movie.review ? movie.review.description : ""}
          name="content"
          ref={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default withRouter(ReviewForm);
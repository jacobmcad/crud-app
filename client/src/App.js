import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/get").then((response) => {
      setMovieReviewList(response.data.reverse());
    });
  }, [movieReviewList]);

  const submitReview = () => {
    Axios.post("http://localhost:8080/api/insert", {
      movieName: movieName,
      movieReview: review,
    });
    setMovieName("");
    setReview("");
  };

  return (
    <div className="App">
      <h1>Crud App</h1>
      <div className="form">
        <label htmlFor="movieName">Movie Name:</label>
        <input
          type="text"
          name="movieName"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />

        <label htmlFor="review">Review:</label>
        <input
          type="text"
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <button onClick={submitReview}>Submit</button>
      </div>
      <div>
        {movieReviewList.map((val) => (
          <div>
            <h1>Movie name: {val.movieName}</h1>
            <h3>Movie Review: {val.movieReview}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

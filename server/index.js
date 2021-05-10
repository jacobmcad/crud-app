const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudApp",
});

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  const sqlSelect = "select * from movie_reviews";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInster =
    "insert into movie_reviews (movieName, movieReview) values (?,?)";
  db.query(sqlInster, [movieName, movieReview], (error, result) => {
    res.send(result);
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

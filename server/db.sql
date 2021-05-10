create database crudApp;
use crudApp;

create table movie_reviews (
    id integer primary key AUTO_INCREMENT,
    movieName varchar(255),
    movieReview varchar(255)
);
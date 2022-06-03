// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map(film => {
    return film.director;
  });

  cleanDirectors = [...new Set(directors)]

  return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaMoviesSpilberg = movies.filter(films => films.director === "Steven Spielberg" && (films.genre).includes("Drama"));

  return dramaMoviesSpilberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if(movies.length <= 0) {
    return 0;
  }

  let averageScores = movies.reduce((acc, element) => {
    if(element.hasOwnProperty("score")) return acc + element.score;
    return acc;
  }, 0);

  return Number((averageScores / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(movies.length <= 0) {
    return 0;
  }

  let counter = 0;

  let averageScores = movies.reduce((acc, element) => {
    if((element.genre).includes("Drama")) {
      counter++;
      return acc + element.score;
    } 
    return acc;
  }, 0);

  if(counter === 0) {
    return 0;
  }

  return Number((averageScores / counter).toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  if(movies.length <= 0) {
    return 0;
  }

  let moviesOrdered = movies.sort((first, second) => {
    if(first.year > second.year) {
      return 1;
    } else {
      return -1;
    }
  });

  return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let newArray = JSON.parse(JSON.stringify(movies));

  let moviesOrderedAlphabeticaly = newArray.sort((first, second) => {
    if(first.title > second.title) {
      return 1;
    } else if (first.title < second.title){
      return -1;
    } else {
      return 0;
    }
  });

  
  let result = moviesOrderedAlphabeticaly.map(movie => {
    return movie.title;
  });

  let newResult = result.slice(0, 20);
  
  return newResult;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  let newMovies = JSON.parse(JSON.stringify(movies));

  newMovies.forEach(movie => {

    movie.duration = movie["duration"].split(" ");
    movie.duration[0] = movie["duration"][0].slice(0, movie["duration"][0].length - 1);
    movie.duration[1] = movie["duration"][1].slice(0, movie["duration"][1].length - 3);

    movie.duration = (Number(movie.duration[0]) * 60) + Number(movie.duration[1]);

    console.log(newMovies);


  });

  return newMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

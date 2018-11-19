function canTwoMoviesFillFlight(movieLengths, flightLength) {

  debugger;
  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}


console.log(canTwoMoviesFillFlight([1,2,3,4,5,6,7,8,9,10], 18));

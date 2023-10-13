
// a) Constructor for the class Movie:

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
// b) Constructor with default rating "PG":

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}


// c) Method getPG:

class Movie {
    // ... (constructor)

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}


// d) Code to create an instance of the class Movie with the title "Casino Royale," the studio "Eon Productions," and the rating "PG-13":

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

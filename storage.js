class Storage{
    addMovieToStorage = function(newMovie){
        let movies = this.getMoviesFromStorage();

        movies.push(newMovie);

        localStorage.setItem('movies', JSON.stringify(movies));
    };

    getMoviesFromStorage = function(){
        let movies;

        if(localStorage.getItem('movies') == null){
            movies = [];
        }else{
            movies = JSON.parse(localStorage.getItem('movies'));
        }

        return movies;
    };

    deleteMovieFromStorage = function(title){
        let movies = this.getMoviesFromStorage();

        movies.forEach((movie, index) =>{
            if(movie.title == title){
                movies.splice(index,1);
            };
        });

        localStorage.setItem('movies', JSON.stringify(movies));
    };

    clearAllMoviesFromStorage = function(){
        localStorage.removeItem('movies');
    };
};
class UI{
    addMovieToUI = function(newMovie){
        const movieList = document.querySelector('#movies');
        movieList.innerHTML += `
        <tr class="movie-item">
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id="delete-movie" class = "btn btn-danger">Delete Movie</a></td>
        </tr>
        `;
    };

    clearInputs = function(name,director,poster){
        name.value = "";
        director.value = "";
        poster.value = "";
    };

    infoMessages = function(message,type){
        const alertEl = document.createElement('div');
        alertEl.innerText = message;
        alertEl.classList = `alert alert-${type}`;
        alertEl.style.opacity = '1';
        alertEl.style.transition = 'opacity 400ms ease-out';

        const cardBody = document.querySelectorAll('.card-body')[0];
        cardBody.appendChild(alertEl);

        setTimeout(() => {
            setTimeout(() =>{ 
                alertEl.remove();
            },500);
            alertEl.style.opacity = '0';
        }, 1500);

    };

    displayMovies = function(movies){
        const movieList = document.querySelector('#movies');
        movies.forEach((movie) =>{
            movieList.innerHTML +=   `
            <tr class="movie-item">
                <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
                <td>${movie.title}</td>
                <td>${movie.director}</td>
                <td><a href="#" id="delete-movie" class = "btn btn-danger">Delete Movie</a></td>
            </tr>
            `;
        });
    };

    deleteMovieFromUI = function(element){
        element.parentElement.parentElement.remove();
    };

    clearAllMoviesFromUI = function(){
        const movieList = document.querySelectorAll('#movies');

        if(document.querySelectorAll('.movie-item').length){
            document.querySelectorAll('.movie-item').forEach((element) =>{
                element.remove();
            });
        };  
    };
};


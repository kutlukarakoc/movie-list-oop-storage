class Movie {
    constructor(title, director, url) {
        this.title = title;
        this.director = director;
        this.url = url;
    };
};

const form = document.querySelector('#movie-form');
const titleEl = document.querySelector('#title');
const directorEl = document.querySelector('#director');
const urlEl = document.querySelector('#url');
const movieCards = document.querySelectorAll('.card-body')[1];
const clear = document.querySelector('#clear-movies');

const ui = new UI();
const storage = new Storage();

form.addEventListener('submit', function (e) {
    const title = titleEl.value;
    const director = directorEl.value;
    const url = urlEl.value;

    if(!document.querySelectorAll('.alert-danger').length && !document.querySelectorAll('.alert-success').length){
        if (!title.length) {
            ui.infoMessages('Movie name can not be left empty.', 'danger');
        }
        else if (!director.length) {
            ui.infoMessages('Director can not be left empty.', 'danger');
        }
        else if (!url.length) {
            ui.infoMessages('Url of movie poster can not be left empty.', 'danger');
        }
        else {
            const newMovie = new Movie(title, director, url);
    
            storage.addMovieToStorage(newMovie);
    
            ui.addMovieToUI(newMovie);
            ui.infoMessages('Movie added to list successfully.', 'success');
        }
    };

    ui.clearInputs(titleEl, directorEl, urlEl);

    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function(){
    let movies = storage.getMoviesFromStorage();

    ui.displayMovies(movies);
});

movieCards.addEventListener('click', function(e){
    if(e.target.id == 'delete-movie'){
        ui.deleteMovieFromUI(e.target);

        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);

        ui.infoMessages('Movie delete from list successfully.', 'success');
    };
});

clear.addEventListener('click', function(){
    if(confirm('Are you sure to clear your list?')){
        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
        ui.infoMessages('Movie list successfully cleared.', 'success');
    };   
});
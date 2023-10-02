const overlay = document.getElementById("modal-overlay");
const background = document.getElementById("modal-background");
const modalContainer = document.getElementById("modal-container");

let currentMovie = {};

overlay.classList.add("open");

function backgroundClickHandler() {
  overlay.classList.remove("open");
}

function addCurrentMovieToList() {
  addToList(currentMovie);
  updateUI(currentMovie);
  closeModal();
}

function createModal(data) {
  currentMovie = data;
  modalContainer.innerHTML = `
  <h2 id="movie-title">${data.Title} - ${data.Year}</h2> <!-- Missing closing </h2> tag -->
  <section id="modal-body">
    <img
      id="movie-poster"
      src=${data.Poster}
      alt="Poster do Filme."
    />
    <div id="movie-info">
      <h3 id="movie-plot">
        ${data.Plot}
      </h3>
      <div id="movie-cast">
        <h4>Elenco:</h4>
        <h5> ${data.Actors}</h5>
      </div>
      <div id="movie-genre">
        <h4>Gênero:</h4>
        <h5> ${data.Genre}</h5>
      </div>
    </div>
  </section>
  <section id="modal-footer">
    <button id="add-to-list" onclick= '{addCurrentMovieToList()}'>Adicionar à Lista</button>
  </section>`;
}

function closeModal() {
  overlay.classList.remove("open");
}

background.addEventListener("click", backgroundClickHandler);

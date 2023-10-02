const searchButton = document.getElementById("search-button");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");

async function searchButtonClickHandler() {
  try {
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGenerator()}${movieYearParameterGenerator()}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    if (data.Error) {
      throw new Error("Filme não Encontrado!");
    }
    createModal(data);
    overlay.classList.add("open");
  } catch (error) {
    notie.alert({ type: "error", text: error.message });
  }
}

function movieNameParameterGenerator() {
  if (movieName.value === "") {
    throw new Error("O nome do filme deve ser informado");
  }
  return movieName.value.split(" ").join("+");
}

function movieYearParameterGenerator() {
  if (movieYear.value === "") {
    return "";
  }
  if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
    throw new Error("Ano do Filme invalido");
  }
  return `&y=${movieYear.value}`;
}

searchButton.addEventListener("click", searchButtonClickHandler);

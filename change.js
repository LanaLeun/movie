
const poster = document.getElementById('poster');
const title = document.getElementById('title');
const description = document.getElementById('description');
const movie = document.querySelector('movie');

movie.addEventListener('change', () => {
    const selectedMovie = movie.value;

    if (selectedMovie === "Ladi Bag") {
        title.innerHTML = "Леди баг и Супер кот"
        description.innerHTML = "Мультфильм где, два подростка с помощью своих талисманов спасают Париж."
        poster.src = "covers/1.jpg"
        poster.alt = "Обложка мультфильма «Леди баг и Супер кот»"
    } else if (selectedMovie === "Shariki") {
        title.innerHTML = "Смешарики"
        description.innerHTML = "Мультфильм о приключениях круглых зверятах, живущих в уютной Ромашковой долине."
        poster.src = "covers/2.jpg"
        poster.alt = "Обложка мультфильма «Смешарики»"
    } else if (selectedMovie === "Zootown"){
        title.innerHTML = "Зверополис"
        description.innerHTML = "Мультфильм, где маленькая крольчиха-полицейский и хитрый лис объединяются, чтобы раскрыть крупный городской заговор."
        poster.src = "covers/3.jpg"
        poster.alt = "Обложка мультфильма «Зверополис»"
    }
});
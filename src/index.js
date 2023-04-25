import Notiflix from "notiflix";
import axios from "axios";

const input = document.querySelector('.search-form');
const submit = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.btn-load');
const buttonArea = document.querySelector('.button-area');
const moreGallery = document.querySelector('.more-gallery');

let value;
let page = 1;


input.addEventListener('input', (event) => {
    value = event.target.value;
    console.log(value);
    if (value.length < 1){
        gallery.innerHTML = '';
        loadMore.classList.add('hidden');
        Notiflix.Notify.warning('Результати пошуку скинуто')
    }
})


submit.addEventListener('submit', (event) => {
    event.preventDefault();
    gallery.innerHTML = '';
    page = 1;
    console.log(value);
    fetch(`https://pixabay.com/api/?key=35499078-ae1aac6b87ed3c45ca8fde2a7&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`)
    .then(response => response.json())
    .then(pictures => {
        if (pictures.total === 0) {
          loadMore.classList.add('hidden');
          Notiflix.Notify.failure('Вибачте, але за вашим пошуковим запитом не знайдено зображень. Спробуйте ще раз')
        }
        else {
            Notiflix.Notify.success(`Пошук здійснено! Знайдено ${pictures.totalHits} зображень`);
            console.log(pictures);
            renderImagesGallery(pictures);
            loadMore.classList.remove('hidden');
        }
        }
        )
    
    .catch(error => console.log(error));
    
})


loadMore.addEventListener('click', () => {
  page +=1
  fetch(`https://pixabay.com/api/?key=35499078-ae1aac6b87ed3c45ca8fde2a7&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
    .then(response => response.json())
    .then(pictures => {
        if (pictures.total === 0) {
            Notiflix.Notify.failure('Вибачте, але за вашим пошуковим запитом не знайдено зображень. Спробуйте ще раз')
        }
        else if (pictures.hits.length === pictures.totalHits){
          Notiflix.Notify.failure('Вибачте, але ліміт запитів вичерпано');
        }
        else {
            console.log(pictures);
            renderImagesGallery(pictures);
            loadMore.classList.remove('hidden');
        }
        }
        )
    
    .catch(error => console.log(error));
})


function renderImagesGallery(pictures){
   const markup = pictures.hits.map((hit) => {
    return `
    <div class='all-cards'>
    <div class="photo-card">
    <img src='${hit.webformatURL}' alt="${hit.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Вподобань: </b>
        <br>
        ${hit.likes}
      </p>
      <p class="info-item">
        <b>Переглядів: </b>
        <br>
        ${hit.views}
      </p>
      <p class="info-item">
        <b>Коментарів: </b>
        <br>
        ${hit.comments}
      </p>
      <p class="info-item">
        <b>Завантажень: </b>
        <br>
        ${hit.downloads}
      </p>
    </div>
  </div>
  </div>`
   })
   .join("");
   gallery.insertAdjacentHTML('beforeend', markup);
}




function Notify() {
    Notiflix.Notify.info('Програма готова!');
}

Notify();
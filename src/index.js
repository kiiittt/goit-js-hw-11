import './css/styles.css';
import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import NewsApiService from './new-api-service';
import NewsApiService from './new-api-service';

const formSearch = document.querySelector('.search-form');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const gallery = document.querySelector(".gallery");
const newsApiService = new NewsApiService();

let searchQuery = ' ';

formSearch.addEventListener('submit', onSearch);
function onSearch(e) {
    e.preventDefault();

    searchQuery = input.value;

    newsApiService.fetchArticles(searchQuery);
}

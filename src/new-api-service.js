export default class NewsApiService {
    constructor() { }
        fetchArticles(searchQuery) {
const options = {
        key: '35608947-610c9b6115dfc02f74fb03340'
    }

    const url = `https://pixabay.com/api/?key=35608947-610c9b6115dfc02f74fb03340&q=${searchQuery}&image_type=photo&pretty=true&per_page=40`;
    
    fetch(url, options)
        .then(r => r.json())
        .then(console.log);
        }
    }

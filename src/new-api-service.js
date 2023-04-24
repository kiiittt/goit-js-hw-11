// export default class NewsApiService {
//     constructor() {
//         this.searchQuery = ' ';
//         this.page = 1;
//     }
//         fetchArticles(searchQuery) {
// const options = {
//         key: '35608947-610c9b6115dfc02f74fb03340'
//     }

//     const url = `https://pixabay.com/api/?key=35608947-610c9b6115dfc02f74fb03340&q=${searchQuery}&image_type=photo&pretty=true&per_page=40&page=${this.page}`;
    
//     return fetch(url, options)
//         .then(r => r.json())
//         .then(data => {
//             this.page += 1;
//             return data.hits;
//         });
//         }   
//     get query (){
//         return this.searchQuery;
//     }

// resetPage(){
//     this.page = 1;
// }

//     set query(newQuery){
//         this.searchQuery = newQuery;
//     }    
//     }



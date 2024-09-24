const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

function getData() {
    fetch(url)
     .then((res) => res.json())
     .then((data) => {
        console.log(data);
     })
}
    getData();

const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const pictures = document.querySelector('.pictures');

function getData() {
    fetch('https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
     .then((res) => res.json())
     .then((data) => {
        console.log(data);
    })
}  
 

/* async function getData() {
    const data = await fetch(url);
    const reversData = await data.json();
    console.log(data);
} */
 getData();

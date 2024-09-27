const url = 'Rdo9rHMrwWcBnTDIwzUYthfkiVTJ65wg4Rl7hP-AnQs';
const pictures = document.querySelector('.pictures');

function getData() {
    fetch(`https://api.unsplash.com/search/photos?query=phone&per_page=30&orientation=landscape&client_id=${url}`)
     .then((res) => res.json())
     .then((data) => {
       /*  data.forEach((photo, index) => {
            console.log(photo)
        }) */
        console.log(data);
           pictures.src = data.results[0].urls.regular;
        //    pictures[index].parentElement.appendChild()
        console.log(pictures)
    }) .catch ((err) => {
       console.log(err);
      }
    )
}  
 

/* async function getData() {
    const data = await fetch(url);
    const reversData = await data.json();
    console.log(data);
} */
 getData();

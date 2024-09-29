const url = "Rdo9rHMrwWcBnTDIwzUYthfkiVTJ65wg4Rl7hP-AnQs";
const pictures = document.querySelector(".pictures");
const input = document.querySelector(".input");
const buttonSubmit = document.querySelector(".button-submit");

buttonSubmit.addEventListener("click", () => {
    let number = input.value;
    getData(number);
});

function getData(index) {
    fetch(
        `https://api.unsplash.com/search/photos?extras=url_s&query=summer&per_page=30&orientation=landscape&client_id=${url}`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let img = document.querySelector(`.img-${index}`);
            img.src = data.results[index].urls.regular;
        })
        .catch((err) => {
            console.log(err);
        });
}

for (let i = 0; i < 6; i++) {
    getData(i);
}

function autoFocus() {
    input.focus();
}
autoFocus();

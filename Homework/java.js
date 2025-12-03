const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
console.log(article.dataset.columns);

const button = document.querySelector("#electric-cars button");

button.addEventListener("click", function () {
  console.log(article.dataset.model, article.dataset.car);
});

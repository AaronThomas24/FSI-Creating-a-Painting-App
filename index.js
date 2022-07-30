const painting = document.querySelector(".painting");
painting.addEventListener("click", function () {
  console.log("testing, testing, 123");
});
painting.addEventListener("click", function (e) {
  console.log("testing, testing, 123");
});
painting.addEventListener("click", function (e) {
  console.log(e.target);
});
painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "blue";
});
let selectedColor = "blue";
painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = selectedColor;
});

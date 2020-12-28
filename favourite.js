
let favourite = document.querySelectorAll(".favourites-btn");

favourite.forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        item.classList.toggle("active-favourite-btn");
    });
});
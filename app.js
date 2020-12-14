let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".to-cart-btn");
console.log(addToCartBtns);

for (i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        // let prevProductsCount = +productsCountEl.textContent;
        // productsCountEl.textContent = prevProductsCount + 1;
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
};

let favourite = document.getElementsByClassName("favourites-btn");
console.log(favourite);

for (q = 0; q < favourite.length; q++) {
    favourite[q].addEventListener("click", changeFavouriteBg());
};

function changeFavouriteBg() {
    for (x = 0; x < favourite.length; x++) {
        let activeFavourite;
        favourite[x].addEventListener("click", e => {
            activeFavourite = e.target;
            e.target.style.backgroundColor = "#2c71b8";
            e.target.style.backgroundImage = "url('images/icon\ \(7\).png')";
    
            if (e.target.style.backgroundColor === "rgb(44, 113, 184)") {
                let inActiveFavourite;
                e.target.addEventListener("click", a => {
                    inActiveFavourite = a.target;
                    a.target.style.backgroundColor = "transparent";
                    a.target.style.backgroundImage = "url('images/icon\ \(5\).png')";

                    // if (a.target.style.backgroundColor === "transparent") {
                    //     changeFavouriteBg();
                    // };
                });
            };
        });
    };
};
















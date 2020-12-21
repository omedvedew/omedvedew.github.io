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

let moreDetailsBtns = document.querySelectorAll(".details-btn");
console.log(moreDetailsBtns);
let modal = document.querySelector(".modal");
console.log(modal);
let closeBtn = document.querySelector(".btn-close");
console.log(closeBtn);

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", openModal)
});

closeBtn.addEventListener("click", closeModal);




















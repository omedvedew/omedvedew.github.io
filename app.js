let productsCountEl = document.getElementById("products-count");


let addToCartBtns = document.querySelectorAll(".to-cart-btn");


for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        // let prevProductsCount = +productsCountEl.textContent;
        // productsCountEl.textContent = prevProductsCount + 1;
        productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
        quantityValue[i].value = 1;
    });
};

let moreDetailsBtns = document.querySelectorAll(".details-btn");

let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".btn-close");


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

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        closeModal();
    };
});

function showModalByScroll() {
    if (window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal();
    };
};

window.addEventListener("scroll", showModalByScroll, {once:true});


// prod-count

let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");

let minCount = 1;
let maxCount = 5;

quantityValue.forEach((item, i) => {
    let currentCount = +quantityValue[i].value;
    toggleButtonState(currentCount, decrementButtons[i], incrementButtons[i])
})

// function decrementButtonsState(count) {
//     if (count <= 1) {
//         decrementButtons.disabled = true;
//     } else {
//         decrementButtons.disabled = false;
//     };
// };

function toggleButtonState(count, decrementButton, incrementButton) {
    decrementButton.disabled = count <= minCount;
    incrementButton.disabled = count >= maxCount;
};

// decrementButtonsState(quantityValue.value);

quantityValue.forEach((item, i) => {
    incrementButtons[i].addEventListener("click", function() {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount + 1;
        quantityValue[i].value = nextCount;
        toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i]);
        // decrementButtonsState(quantityValue.value);
    });
})

quantityValue.forEach((item, i) => {
    decrementButtons[i].addEventListener("click", function() {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount - 1;
        quantityValue[i].value = nextCount;
        toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i]);
        // decrementButtonsState(quantityValue.value);
    });
})


















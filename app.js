let productsCountEl = document.getElementById("products-count");


let addToCartBtns = document.querySelectorAll(".to-cart-btn");


for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        // let prevProductsCount = +productsCountEl.textContent;
        // productsCountEl.textContent = prevProductsCount + 1;
        productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
        quantityValue[i].value = 1;
        incrementButtons[i].disabled = false;
        incrementButtons[i].classList.remove("button-disabled");
        decrementButtons[i].disabled = true;
        decrementButtons[i].classList.add("button-disabled");
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

// let minCount = 1;
// let maxCount = 5;

// quantityValue.forEach((item, i) => {
//     let currentCount = +quantityValue[i].value;
//     toggleButtonState(currentCount, decrementButtons[i], incrementButtons[i])
// })

// // function decrementButtonsState(count) {
// //     if (count <= 1) {
// //         decrementButtons.disabled = true;
// //     } else {
// //         decrementButtons.disabled = false;
// //     };
// // };

// function toggleButtonState(count, decrementButton, incrementButton) {
//     decrementButton.disabled = count <= minCount;
//     incrementButton.disabled = count >= maxCount;
// };

// // decrementButtonsState(quantityValue.value);

// quantityValue.forEach((item, i) => {
//     incrementButtons[i].addEventListener("click", function() {
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount + 1;
//         quantityValue[i].value = nextCount;
//         toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i]);
//         // decrementButtonsState(quantityValue.value);
//     });
// })

// quantityValue.forEach((item, i) => {
//     decrementButtons[i].addEventListener("click", function() {
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount - 1;
//         quantityValue[i].value = nextCount;
//         toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i]);
//         // decrementButtonsState(quantityValue.value);
//     });
// })

// function Calculator (a,b) {
//     this.a = a;
//     this.b = b;

//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// };

// const calc = new Calculator(2, 15);
// const calc2 = new Calculator(15, 15);

// console.log(calc.sum());
// console.log(calc2.sum());

// function hi(surname) {
//     console.log(this.name + surname);
// };

// const user = {
//     name: "Ivan"
// };

// const obj = {
//     name: "Petro"
// }

// hi.call(user, "Ivanow");
// hi.call(obj);
// hi.apply(user, ["Petrow"]);

// let test = hi.bind(user, "test");
// test()



// OOP

function Counter(incrementButton, decrementButton, inputField, defaultValue = 1, minCount, maxCount) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    };
    console.log(this);
    this.toggleButtonState = function() {
        let count = +this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        if (this.domRefs.decrementButton.disabled) {
            this.domRefs.decrementButton.classList.add("button-disabled");
        } else {
            this.domRefs.decrementButton.classList.remove("button-disabled");
        };
        if (this.domRefs.incrementButton.disabled) {
            this.domRefs.incrementButton.classList.add("button-disabled");
        } else {
            this.domRefs.incrementButton.classList.remove("button-disabled");
        };
    }
    this.toggleButtonState();
    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState();
    };
    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState();
    };
    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
};

let counters = [];
quantityValue.forEach((count, i) => {
    counters[i] = new Counter(incrementButtons[i], decrementButtons[i], quantityValue[i], 1, 1, 5);
});















let favourite = document.querySelectorAll(".favourites-btn");
console.log(favourite);

for (i = 0; i <favourite.length; i++) {
    let activeFavourite = favourite[i];
    favourite[i].addEventListener("click", function() {
        activeFavourite.classList.add("active-favourite-btn");
        if (activeFavourite.hasAttribute("class", "active-fafourite-btn")) {
            activeFavourite.addEventListener("click", function() {
                activeFavourite.classList.remove("active-favourite-btn");
                // changeFavStatus();
            });
        };
    });
};

// function changeFavStatus() {
//     for (i = 0; i <favourite.length; i++) {
//         let activeFavourite = favourite[i];
//         favourite[i].addEventListener("click", function() {
//             activeFavourite.classList.add("active-favourite-btn");
//             if (activeFavourite.hasAttribute("class", "active-fafourite-btn")) {
//                 activeFavourite.addEventListener("click", function() {
//                     activeFavourite.classList.remove("active-favourite-btn");
//                     changeFavStatus();
//                 });
//             };
//         });
//     };
// };




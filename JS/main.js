const ratings = document.querySelector('.ratings');
const ratingBtn = document.querySelector('.rating-btn');
const box2 = document.querySelector('.box2');
const showRating = document.querySelector('.show-rating');

// function showcase() {
//     console.log(ratings.children[0].textContent);
// }

// showcase();

ratings.addEventListener('click', function(e) {

    if (e.target && e.target.nodeName == "A") {

        value = e.target.textContent;
        showRating.textContent = value;

    }
}, false);

ratingBtn.addEventListener('click', function() {
    box2.classList.remove('moved');
});
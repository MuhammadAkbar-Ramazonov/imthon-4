var elOpenBtn = document.querySelector(".js-header-btn");
var elSiteNav = document.querySelector(".site-nav");


// elOpenBtn.addEventListener("click", function(){
//     elSiteNav.classList.toggle("show-block");
// });

const hamburgerButton = document.querySelector(".burger")

hamburgerButton.addEventListener("click", () => {
    document.body.toggleAttribute("no-scroll")
    if (elSiteNav.classList.contains("show")) {
        elSiteNav.classList.add("closing");
        elSiteNav.addEventListener("animationend", () => {
            elSiteNav.classList.remove("show", "closing")
        }, { once: true })
        return
    }
    elSiteNav.classList.add("show")
})

console.log(123);


$(document).ready(function(){
    $(".site-list").slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        easing: 'easy',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
    });
});
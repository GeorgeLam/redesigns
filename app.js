//Navbar bg color switch on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


//Int Observer for slide-in on scroll
let options = {rootMargin: "0px"}
let scr = 0

let cont2 = [...$('.fader')];

let obs = new IntersectionObserver((entry, obs) => {
    entry.forEach(ent => {
        console.log(ent)
        if(ent.isIntersecting == true && scr == 0){
            scr = 1;
            //$("#img2").css('visibility', 'visible')
            $(ent.target).fadeOut(10).fadeIn(2000);
        }
    })
}, options)

let cont = document.querySelector("#img2")

cont2.forEach(item => {
    obs.observe(item);
})

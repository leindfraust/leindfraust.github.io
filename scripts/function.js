//global var

let seeMore = $(".seeMore");
let closeSeeMore = $(".closeSeeMore");
let moreAbout = $(".moreAbout")
let introAbout = $(".introAbout");

// jquery + animate.style css

$(seeMore).click(function () {
    $(seeMore).addClass("animate__animated animate__tada");
    $(introAbout).addClass("animate__animated animate__backOutLeft");
    $(moreAbout).removeClass("animate__animated animate__backOutLeft");
});

$(seeMore).bind("animationend", function () {
    $(seeMore).addClass("is-hidden");
    $(closeSeeMore).removeClass("is-hidden");
    $(introAbout).addClass("is-hidden");
    $(moreAbout).removeClass("is-hidden");
    $(moreAbout).addClass("animate__animated animate__backInLeft");
});

$(closeSeeMore).click(function () {
    $(closeSeeMore).addClass("animate__animated animate__tada");
    $(moreAbout).addClass("animate__animated animate__backOutLeft");
});

$(closeSeeMore).bind("animationend", function () {
    $(closeSeeMore).removeClass("animate__animated animate__tada");
    $(closeSeeMore).addClass("is-hidden");
    $(seeMore).removeClass("is-hidden");
    $(seeMore).removeClass("animate__animated animate__tada");
    $(moreAbout).removeClass("animate__animated animate__backInRight");
    $(moreAbout).addClass("is-hidden");
    $(introAbout).removeClass("animate__animated animate__backOutLeft");
    $(introAbout).addClass("animate__animated animate__backInLeft")
    $(introAbout).removeClass("is-hidden");
});

//waypoints

let waypointMyWorksImg = $(".myWorksImg").waypoint(function (direction) {
    $(".myWorksImg").removeClass("is-invisible");
    $(".myWorksImg").addClass("animate__animated animate__bounceIn");

}, {
    offset: '30%'
});

if(window.matchMedia("(max-width: 767px").matches) {
    let waypointMyWorksImg = $(".myWorksImg").waypoint(function (direction) {
        $(".myWorksImg").removeClass("is-invisible");
        $(".myWorksImg").addClass("animate__animated animate__bounceIn");
    }, {
        offset: '90%'
    });
}
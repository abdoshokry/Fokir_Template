$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 800) {

        $("#btnup").fadeIn(500);
    } else {

        $("#btnup").fadeOut(500);
    }


})

$("#btnup").click(function() {
    $("body, html").animate({ scrollTop: 0 }, 1000)
})





let profilOfset = $("#About").offset().top;


$(window).scroll(function() {

    console.log($("#About").offset().top)

    console.log($(window).scrollTop())


    let scrollTop = $(window).scrollTop();
    if (scrollTop > (profilOfset - 5)) {

        $("nav").css("background-color", "rgba(0,0,0,0.8)")
    } else {
        $("nav").css("background-color", "transparent")
    }
})

$("a").click(function() {
    let Hraf = $(this).attr("href");
    let webs = $(Hraf).offset().top;
    $("body,html").animate({ scrollTop: webs }, 1000)
})
$(document).ready(function () {

    // carousel
    const $links = $(".recommendation-link");
    const $prevBtn = $(".carousel-btn.prev");
    const $nextBtn = $(".carousel-btn.next");
    let currentIndex = 0;

    function showSlide(index) {
        $links.removeClass("active");
        $links.eq(index).addClass("active");
    }

    $prevBtn.on("click", function () {
        currentIndex = (currentIndex - 1 + $links.length) % $links.length;
        showSlide(currentIndex);
    });

    $nextBtn.on("click", function () {
        currentIndex = (currentIndex + 1) % $links.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);

    // accordion
    $(".acc-header").click(function() {
        const $content = $(this).next(".acc-content");
        const isOpen = $content.hasClass("open");

        $(".acc-content").removeClass("open");
        $(".acc-header").removeClass("active");

        if (!isOpen) {
        $content.addClass("open");
        $(this).addClass("active");
        }
    });

    // card content
    function showMobileInline($card) {
        if ($(window).width() < 768) {
            var contentId = $card.data("content");
            $(".card-content-mobile-inline").remove();
            var $clone = $("#" + contentId)
                .clone()
                .removeAttr("id")
                .removeClass("card-content")
                .addClass("card-content-mobile-inline col-12");
            $card.after($clone);
        }
    }

    $(".res-card").click(function() {
        var contentId = $(this).data("content");

        $(".res-card").removeClass("active");
        $(this).addClass("active");

        $(".card-content").removeClass("active");
        $("#" + contentId).addClass("active");

        showMobileInline($(this));
    });

    // Initialize mobile inline for the default active card
    showMobileInline($(".res-card.active").first());

    $(window).on("resize", function() {
        if ($(window).width() >= 768) {
            $(".card-content-mobile-inline").remove();
        }
    });


    $(".explore-button").click(function() {
        var target = $("#"+$(this).data("target"));
        var targetOffset = target.offset().top;
        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        });
    });

});

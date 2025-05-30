$(function () {
    "use strict";
    var wind = $(window);
    $.scrollIt({ upKey: 38, downKey: 40, easing: "swing", scrollTime: 600, activeClass: "active", onPageChange: null, topOffset: -70 });
    $("#preloader").fadeOut(500);
    $(".preloader-bg").delay(500).fadeOut(500);
    var wind = $(window);
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr("src", "img/logo.png");
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr("src", "img/logo.png");
        }
    });
    $(".navbar-nav .dropdown-item a").on("click", function () {
        $(".navbar-collapse").removeClass("show");
    });
    $(function () {
        var navMain = $(".scroll-init");
        navMain.on("click", "a", null, function () {
            navMain.collapse("hide");
        });
    });
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    $(document).ready(function () {
        var owl = $(".header .owl-carousel");
        $(".slider .owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            autoplay: !1,
            autoplayTimeout: 5000,
            nav: !0,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            responsiveClass: !0,
            responsive: { 0: { dots: !1 }, 600: { dots: !1 }, 1000: { dots: !1 } },
        });
        $(".slider-fade .owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            autoplay: !1,
            autoplayTimeout: 5000,
            animateOut: "fadeOut",
            nav: !0,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        });
        owl.on("changed.owl.carousel", function (event) {
            var item = event.item.index - 2;
            $("h6").removeClass("animated fadeInUp");
            $("h1").removeClass("animated fadeInUp");
            $("h2").removeClass("animated fadeInUp");
            $("h5").removeClass("animated fadeInUp");
            $("p").removeClass("animated fadeInUp");
            $(".car-features").removeClass("animated fadeInRight");
            $(".button-1").removeClass("animated fadeInUp");
            $(".button-2").removeClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(item).find("h6").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(item).find("h1").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(item).find("h2").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(item).find("h5").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(item).find("p").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(item).find(".car-features").addClass("animated fadeInRight");
            $(".owl-item").not(".cloned").eq(item).find(".button-1").addClass("animated fadeInUp");
            $(".owl-item").not(".cloned").eq(item).find(".button-2").addClass("animated fadeInUp");
        });
    });
    $(".team .owl-carousel").owlCarousel({
        loop: !0,
        margin: 20,
        mouseDrag: !0,
        autoplay: !0,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: !1,
        nav: !1,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        autoplayHoverPause: !0,
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(".portfolio .owl-carousel").owlCarousel({
        loop: !0,
        margin: 20,
        mouseDrag: !0,
        autoplay: !1,
        dots: !0,
        autoplayHoverPause: !0,
        nav: !1,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(".portfolio-home-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        autoHeight: !1,
        autoplayTimeout: 5000,
        dots: !1,
        nav: !0,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        responsiveClass: !0,
        responsive: { 0: { dots: !1, items: 1 }, 600: { dots: !1, items: 1 }, 1000: { dots: !1, items: 1 } },
    });
    $(".services .owl-carousel").owlCarousel({
        loop: !0,
        margin: 20,
        mouseDrag: !0,
        autoplay: !1,
        dots: !0,
        autoplayHoverPause: !0,
        nav: !1,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(".services2 .owl-carousel").owlCarousel({
        loop: !0,
        margin: 20,
        mouseDrag: !0,
        autoplay: !1,
        dots: !0,
        autoplayHoverPause: !0,
        nav: !1,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(".testimonials .owl-carousel").owlCarousel({
        loop: !0,
        margin: 20,
        mouseDrag: !0,
        autoplay: !1,
        autoplayTimeout: 5000,
        dots: !0,
        nav: !1,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(".blog .owl-carousel").owlCarousel({
        loop: !0,
        margin: 20,
        mouseDrag: !0,
        autoplay: !1,
        dots: !0,
        autoplayHoverPause: !0,
        nav: !1,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(".img-zoom").magnificPopup({ type: "image", closeOnContentClick: !0, mainClass: "mfp-fade", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] } });
    $(".magnific-youtube, .magnific-vimeo, .magnific-custom").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 300, preloader: !1, fixedContentPos: !1 });
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }
    $(".gallery-items").imagesLoaded(function () {
        $(".gallery-filter li").on("click", function () {
            $(".gallery-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
            $(".gallery-items").isotope({ filter: selector, animationOptions: { duration: 750, easing: "linear", queue: !1 } });
            return !1;
        });
        $(".gallery-items").isotope({ itemSelector: ".single-item", layoutMode: "masonry" });
    });
    var contentWayPoint = function () {
        var i = 0;
        $(".animate-box").waypoint(
            function (direction) {
                if (direction === "down" && !$(this.element).hasClass("animated")) {
                    i++;
                    $(this.element).addClass("item-animate");
                    setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (k) {
                            var el = $(this);
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect");
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated");
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated");
                                    } else if (effect === "fadeInRight") {
                                        el.addClass("fadeInRight animated");
                                    } else {
                                        el.addClass("fadeInUp animated");
                                    }
                                    el.removeClass("item-animate");
                                },
                                k * 200,
                                "easeInOutExpo"
                            );
                        });
                    }, 100);
                }
            },
            { offset: "85%" }
        );
    };
    $(function () {
        contentWayPoint();
    });
    $("a.vid").YouTubePopUp();
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".progress-wrap").addClass("active-progress");
        } else {
            jQuery(".progress-wrap").removeClass("active-progress");
        }
    });
    jQuery(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return !1;
    });
    $('#navbarOffcanvas')
        .on('show.bs.offcanvas', function () {
            $('.progress-wrap').hide();
        })
        .on('hidden.bs.offcanvas', function () {
            $('.progress-wrap').show();
    });
});

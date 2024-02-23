const isScrolledIntoView = (el, fullyVisibleRequired = false) =>  {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    let isVisible;
    if (fullyVisibleRequired == false) {
        isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    } else {
        isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    }
    return isVisible;
}
const numberAnimation = () => {
    $('.counters-item-number span').each(function () {
        if (isScrolledIntoView(this) && !$(this).hasClass("animated")) {
            $(this).addClass("animated");
            var $this = $(this),
                countTo = $this.attr('data-count');
        
            var animation = {
                countNum: countTo
            };
        
            $({ countNum: $this.text() }).animate(animation, {
                duration: 2500,
                step: function (now, fx) {
                    $this.text(Math.floor(this.countNum).toLocaleString('en'));
                    if (fx.pos > 0.5) {
                        $(this).stop();
                        $(this).animate(animation, {
                            duration: 250,
                            step: function () {
                                $this.text(Math.floor(this.countNum).toLocaleString('en'));
                            },
                            complete: function () {
                                $this.text(Math.floor(this.countNum).toLocaleString('en'));
                            }
                        });
                    }
                }
            });
        }
    });
};

$(document).ready(function () {

    Fancybox.bind("[data-fancybox]", {});

    document.querySelector('.navbar-toggler').addEventListener('click', function () {

        document.querySelector('.navbar-toggler').classList.toggle('open');

    });

    
    var acc = document.getElementsByClassName("filters-item-header");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("activated");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    const owlHome = $('.homepage-banner-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 13 8" width="13" height="8"><g id="Menu-top"><path id="-e-icon-arrow-default" class="s0" d="m7 7.4l5-4.9c0.4-0.4 0.4-1.1 0-1.5-0.4-0.4-1.1-0.4-1.5 0l-4.2 4.2-4.3-4.2c-0.4-0.4-1-0.4-1.4 0-0.3 0.2-0.4 0.5-0.4 0.7 0 0.3 0.1 0.6 0.4 0.8l4.9 4.9c0.2 0.2 0.5 0.3 0.8 0.3 0.2 0 0.5-0.1 0.7-0.3z"/></g></svg>'],
        margin:1,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
    });

    const owlNews = $('.news-owl').owlCarousel({
        items:4,
        loop:false,
        rewind:false,
        navText:['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 15" width="8" height="15"><g id="Top"><path id="-e-arrow-slider" class="s0" d="m0.1 13.5l7.1-7 0.7 0.7-7.1 7zm7.8-6.3l-7.1-7.1-0.7 0.7 7.1 7.1z"/></g></svg>', '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 15" width="8" height="15"><g id="Top"><path id="-e-arrow-slider" class="s0" d="m0.1 13.5l7.1-7 0.7 0.7-7.1 7zm7.8-6.3l-7.1-7.1-0.7 0.7 7.1 7.1z"/></g></svg>'],
        margin:1,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            993: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1500: {
                items: 4,
            }
        }
    });

    const owlProducts = $('.products-owl, .categories-owl').owlCarousel({
        items:4,
        loop:false,
        rewind:false,
        navText:['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 15" width="8" height="15"><g id="Top"><path id="-e-arrow-slider" class="s0" d="m0.1 13.5l7.1-7 0.7 0.7-7.1 7zm7.8-6.3l-7.1-7.1-0.7 0.7 7.1 7.1z"/></g></svg>', '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 15" width="8" height="15"><g id="Top"><path id="-e-arrow-slider" class="s0" d="m0.1 13.5l7.1-7 0.7 0.7-7.1 7zm7.8-6.3l-7.1-7.1-0.7 0.7 7.1 7.1z"/></g></svg>'],
        margin:16,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });

    const owlProductImages = $('.productImages-owl').owlCarousel({
        items:3,
        loop:false,
        rewind:false,
        navText:['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 15" width="8" height="15"><g id="Top"><path id="-e-arrow-slider" class="s0" d="m0.1 13.5l7.1-7 0.7 0.7-7.1 7zm7.8-6.3l-7.1-7.1-0.7 0.7 7.1 7.1z"/></g></svg>', '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 15" width="8" height="15"><g id="Top"><path id="-e-arrow-slider" class="s0" d="m0.1 13.5l7.1-7 0.7 0.7-7.1 7zm7.8-6.3l-7.1-7.1-0.7 0.7 7.1 7.1z"/></g></svg>'],
        margin:1,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        }
    });

    numberAnimation();

    $(".page-product-main-button").click(function (e) { 
        e.preventDefault();
        const targetID = $(this).attr("data-target");
        $(".page-product-main-button, .page-product-main-item").removeClass("active");
        $(".page-product-main-button[data-target="+targetID+"]").addClass("active");
        $(".page-product-main-item[data-id="+targetID+"]").addClass("active");
        document.querySelector(".page-product-main-header-dropdown .filters-item-header").innerHTML = $(this).html();
        if ($(window).width() < 993) {
            $(".page-product-main-header-dropdown .filters-item-header").removeClass("activated");
            document.querySelector(".page-product-main-header-dropdown .filters-item-content").style.maxHeight = null;
        }
    });

});

$(window).scroll(function () { 

    numberAnimation();

});

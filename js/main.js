window.onload = function() {
    alert("For maximum experience, please view full screen in Chrome!");
}

$(function() {
    $('.wow:not([data-wow-delay])').attr('data-wow-delay', '0.3s');
    new WOW().init({ offset: 50 });
    
    //smooth scrolling for links
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    //animate header on scroll
    var bScrolledHeader = false,
        nChangeHeaderAfter = 300;
    $(window).on('scroll', function(_oEvent) {
        if(!bScrolledHeader) {
            bScrolledHeader = true;
            window.setTimeout(function() {
                if($(window).scrollTop() >= nChangeHeaderAfter) {
                    $('.navbar-fixed-top').addClass('navbar-shrink');
                } else {
                    $('.navbar-fixed-top').removeClass('navbar-shrink');
                }
                bScrolledHeader = false;
            }, 250);
        }
    });
    
    //modals
    $('a.portfolio-link[href="#modal_tmpl"]').on('click', function(_oEvent) {
        _oEvent.preventDefault();
        $('#modal_tmpl .modal-body h2').text($(this).data('title'));
        $('#modal_tmpl .modal-body p:not(.text-muted)').html($(this).find('p.hide').html());
        var oImgLink = $(this).find('img').get(0),
            oImgModal = $('#modal_tmpl .modal-body img').get(0);
        oImgModal.src = oImgLink.src;
        oImgModal.alt = oImgLink.alt;
        $('#modal_tmpl .modal-body p.text-muted em').text(oImgLink.alt);
        $('#modal_tmpl').modal();
        return false;
    });
    
    //tooltips
    $('.tooltips').tooltip();
    
    $('input').on('mouseover',function(e) {
        e.preventdefault();
    });

    var brain = document.getElementById('brainimage');

    $("#brainimage_blue").on("mouseenter", function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage_blue.png' usemap='#map' id='brainimage'>";
    });

    $("#brainimage_blue").on("mouseleave",function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage.png' usemap='#map' id='brainimage'>";
    });

    $("#brainimage_green").on("mouseenter", function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage_green.png' usemap='#map' id='brainimage'>";
    });
    $("#brainimage_green").on("mouseleave",function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage.png' usemap='#map' id='brainimage'>";
    });

    $("#brainimage_yellow").on("mouseenter", function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage_yellow.png' usemap='#map' id='brainimage'>";
    });
    $("#brainimage_yellow").on("mouseleave",function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage.png' usemap='#map' id='brainimage'>";
    });

    $("#brainimage_red").on("mouseenter", function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage_red.png' usemap='#map' id='brainimage'>";
    });
    $("#brainimage_red").on("mouseleave",function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage.png' usemap='#map' id='brainimage'>";
    });

    $("#brainimage_pink").on("mouseenter", function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage_pink.png' usemap='#map' id='brainimage'>";
    });
    $("#brainimage_pink").on("mouseleave",function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage.png' usemap='#map' id='brainimage'>";
    });

    $("#brainimage_teal").on("mouseenter", function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage_teal.png' usemap='#map' id='brainimage'>";
    });
    $("#brainimage_teal").on("mouseleave",function(){
        brain = document.getElementById('brainimage');
        brain.parentNode.removeChild(document.getElementById('brainimage'));
        document.getElementById('img1').innerHTML = "<img src='img/brainimage.png' usemap='#map' id='brainimage'>";
    });
});

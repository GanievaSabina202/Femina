$(document).ready(function() {
    $('.subline').click(function(event) {
        console.log('wqehjk')
        $(this).find('.dropdown-menu').toggleClass('show')
    });
    // slider
    $('.slider').owlCarousel({ 
        loop: true,
        lazyLoad:true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 700,
        dots: false,
        nav: false,
        items: 1,
        animateOut: 'fadeOut'
    });


    // floor tooltip svg

    var myPolygon = $('.floor-svg .hover-me');
    var myTooltip = $('.floor-tooltip-wrapper');
    var w = $(window);

    function checkWidth() {
        if (w.width() < 990.91) {
            $('.floor-tooltip-wrapper').addClass('mob-position');
        } else {
            $('.floor-tooltip-wrapper').removeClass('mob-position');
        }
    }
    
    window.onload = function() {
      checkWidth();
    };
    
    w.resize(checkWidth);

    myPolygon.mousemove(function(e) {
        var floorN = $(this).parent().data('floor');
        var blockN = $(this).parent().data('block');
        $('.floor-tooltip-wrapper').html('');
        $('.floor-tooltip-wrapper').append('<div class="tooltip-box"><div class="number-b"><span class="title">Blok</span><span class="number">' + blockN + '</span></div><div class="number-f"><span class="title">Mərtəbə</span><span class="number">' + floorN + '</span></div></div>');
        myTooltip.css('transform', 'translate('+ e.clientX + 'px' + ',' + e.clientY + 'px' +')');
        $('.mob-position').css('transform', 'none');
        myTooltip.css('opacity', '1');
    });

    myPolygon.mouseout(function(e) {
        myTooltip.css('opacity', '0');
    });


     // flat tooltip svg

     var myPolygon1 = $('.flat-svg .hover-me');
     var myTooltip1 = $('.flat-tooltip-wrapper');
 
     myPolygon1.mousemove(function(e) {
         var roomN = $(this).parent().data('room');
         var areaN = $(this).parent().data('area');
         myTooltip1.find('.room-flat .number').text(roomN);
         myTooltip1.find('.area-flat .number').text(areaN);
     });

     myPolygon1.mouseout(function(e) {
        myTooltip1.find('.room-flat .number').text('-');
         myTooltip1.find('.area-flat .number').text('-');
    });


    // popup notification for scroll mob

    setTimeout(function() {
        $('.mob-scroll-notification').addClass('hide');
    }, 2000);

    $('body').click(function(e) {
        $('.mob-scroll-notification').addClass('hide');
        if($('.menu-icon').hasClass('close')) {
            $('.menu-icon').removeClass('close', 300);
            $('#menu').slideUp(300);
        }
        $('.dropdown-menu-wrap').removeClass('show');
        $('.modal-wrapper').hide();
        $('.modal-wrapper .modal-wrap').hide();
    });

    $('.navbar-nav').click(function(e) {
        $('.dropdown-menu-wrap').removeClass('show');
    });


    // hamburger menu
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        if(!($(this).hasClass('close'))) {
            $(this).addClass('close', 300);
            $('#menu').slideDown(300);
        } else {
            $(this).removeClass('close', 300);
            $('#menu').slideUp(300);
        }
    });
    $('#menu').click(function(e) {
        e.stopPropagation();
    });

    $('.dropdown-menu-wrap').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('show').siblings().removeClass('show');
    });

    // modals
    $('.open-modal').click(function(e) {
        e.stopPropagation();
        var modalL= $(this).data('href');
        $('.modal-wrapper').show();
        $('.modal-wrapper .modal-wrap').filter(function() {
            if(modalL === $(this).data('modal')) {
                $(this).show();
            } 
        });
    });

    $('.modal-wrapper .modal-wrap').click(function(e) {
        e.stopPropagation();
    });

    $('.close-modal').click(function() {
        $('.modal-wrapper').hide();
        $('.modal-wrapper .modal-wrap').hide();
    });


    // input, textarea focus effect 
    $(".input-group .effect").val("");
    
    $(".input-group .effect").focusout(function() {
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    });

    $(".input-group .effect").change(function() {
        $(".input-group .effect").focusout(function() {
            if($(this).val() != ""){
                $(this).addClass("has-content");
            }else{
                $(this).removeClass("has-content");
            }
        });
    });
});








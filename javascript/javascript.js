$(document).ready(function () {

    $('.fa-shopping-bag').hover(function () {
        $('.d-child-shopping').css('display', 'flex');

    }, function () {
        var close_hover = setTimeout(function () {
            $('.d-child-shopping').css('display', 'none');

        }, 2000);
        $('.d-child-shopping').hover(function () {
            clearTimeout(close_hover);
            $('.d-child-shopping').css('display', 'flex');
        }, function () {
            setTimeout(function () {
                $('.d-child-shopping').css('display', 'none');

            }, 2000);
        });
    });
    
    $('.li-brandha').hover(function () {
        $('.brandha').css('display', 'flex');
        $('.before5').css('display', 'flex');
        
    }, function () {
        $('.brandha').css('display', 'none');
        $('.before5').css('display', 'none');

        $('.brandha').hover(function () {
            $('.brandha').css('display', 'flex');
            $('.before5').css('display', 'flex');
        }, function () {
            $('.brandha').css('display', 'none');
            $('.before5').css('display', 'none');

        });
    });
    
    $('.li-zibaii-salamat').hover(function () {
        $('#zibaii-salamat').css('display', 'flex');
        $('.before4').css('display', 'flex');
        $('#sec1-li-arayesh').css('display', 'flex');
        $('.li-atr').css('border-color','#1bb4d8');
    }, function () {
        $('#zibaii-salamat').css('display', 'none');
        $('.before4').css('display', 'none');
        $('.li-atr').css('border-color','#fff');

        $('#zibaii-salamat').hover(function () {
            $('#zibaii-salamat').css('display', 'flex');
            $('.before4').css('display', 'flex');
        }, function () {
            $('#zibaii-salamat').css('display', 'none');
            $('.before4').css('display', 'none');

        });
    });

    $('.li-atr').hover(function () {
        $(this).css('border-color','#1bb4d8');
        $('#sec1-li-arayesh').css('display', 'flex');
        $('#sec2-li-arayesh').css('display', 'none');
        $('#sec3-li-arayesh').css('display', 'none');
        $('#sec4-li-arayesh').css('display', 'none');
        $('#sec5-li-arayesh').css('display', 'none');

    }, function () {
        $('#sec1-li-arayesh').css('display', 'none');
        $(this).css('border-color','#fff');

        $('#sec1-li-arayesh').hover(function () {
            $('#sec1-li-arayesh').css('display', 'flex');
        }, function () {
            $('#sec1-li-arayesh').css('display', 'none');
        });
    });

    $('.li-arayesh').hover(function () {
        $('#sec1-li-arayesh').css('display', 'none');
        $('#sec2-li-arayesh').css('display', 'flex');
        $('#sec3-li-arayesh').css('display', 'none');
        $('#sec4-li-arayesh').css('display', 'none');
        $('#sec5-li-arayesh').css('display', 'none');

    }, function () {
        $('#sec2-li-arayesh').css('display', 'none');

        $('#sec2-li-arayesh').hover(function () {
            $('#sec2-li-arayesh').css('display', 'flex');
        }, function () {
            $('#sec2-li-arayesh').css('display', 'none');
        });
    });

    $('.li-post').hover(function () {
        $('#sec1-li-arayesh').css('display', 'none');
        $('#sec2-li-arayesh').css('display', 'none');
        $('#sec3-li-arayesh').css('display', 'flex');
        $('#sec4-li-arayesh').css('display', 'none');
        $('#sec5-li-arayesh').css('display', 'none');

    }, function () {
        $('#sec3-li-arayesh').css('display', 'none');

        $('#sec3-li-arayesh').hover(function () {
            $('#sec3-li-arayesh').css('display', 'flex');
        }, function () {
            $('#sec3-li-arayesh').css('display', 'none');
        });
    });

    $('.li-mo').hover(function () {
        $('#sec1-li-arayesh').css('display', 'none');
        $('#sec2-li-arayesh').css('display', 'none');
        $('#sec3-li-arayesh').css('display', 'none');
        $('#sec4-li-arayesh').css('display', 'flex');
        $('#sec5-li-arayesh').css('display', 'none');

    }, function () {
        $('#sec4-li-arayesh').css('display', 'none');

        $('#sec4-li-arayesh').hover(function () {
            $('#sec4-li-arayesh').css('display', 'flex');
        }, function () {
            $('#sec4-li-arayesh').css('display', 'none');
        });
    });

    $('.li-shakhsi').hover(function () {
        $('#sec1-li-arayesh').css('display', 'none');
        $('#sec2-li-arayesh').css('display', 'none');
        $('#sec3-li-arayesh').css('display', 'none');
        $('#sec4-li-arayesh').css('display', 'none');
        $('#sec5-li-arayesh').css('display', 'flex');

    }, function () {
        $('#sec5-li-arayesh').css('display', 'none');

        $('#sec5-li-arayesh').hover(function () {
            $('#sec5-li-arayesh').css('display', 'flex');
        }, function () {
            $('#sec5-li-arayesh').css('display', 'none');
        });
    });

    
    $('#i-slider-header-left').click(function () {
        if ($('#bg-header1').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '1');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', '#000');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header2').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '1');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', '#000');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header3').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '1');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', '#000');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header4').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '1');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', '#000');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header5').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '1');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', '#000');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header6').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '1');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', '#000');
        } else if ($('#bg-header7').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '1');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', '#000');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        }
    });
    $('#i-slider-header-right').click(function () {
        if ($('#bg-header1').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '1');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', '#000');
        } else if ($('#bg-header7').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '1');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', '#000');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header6').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '1');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', '#000');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header5').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '1');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', '#000');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header4').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '1');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', '#000');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header3').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '0');
            $('#bg-header2').css('opacity', '1');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', 'transparent');
            $('#p2-btns-slider').css('background-color', '#000');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        } else if ($('#bg-header2').css('opacity') == '1') {
            $('#bg-header1').css('opacity', '1');
            $('#bg-header2').css('opacity', '0');
            $('#bg-header3').css('opacity', '0');
            $('#bg-header4').css('opacity', '0');
            $('#bg-header5').css('opacity', '0');
            $('#bg-header6').css('opacity', '0');
            $('#bg-header7').css('opacity', '0');
            $('#p1-btns-slider').css('background-color', '#000');
            $('#p2-btns-slider').css('background-color', 'transparent');
            $('#p3-btns-slider').css('background-color', 'transparent');
            $('#p4-btns-slider').css('background-color', 'transparent');
            $('#p5-btns-slider').css('background-color', 'transparent');
            $('#p6-btns-slider').css('background-color', 'transparent');
            $('#p7-btns-slider').css('background-color', 'transparent');
        }
    });


});

function show_search() {
    document.querySelector('.sec-search').style.top = 0;
}

function close_search() {
    document.querySelector('.sec-search').style.top = '-100%';
}
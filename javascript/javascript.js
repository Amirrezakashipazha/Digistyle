$(document).ready(function () {

    $('.fa-shopping-bag').hover(function () {
        $('.d-child-shopping').css('display', 'inline');
    }, function () {
        setTimeout(function () {
            $('.d-child-shopping').css('display', 'none');

        }, 2000);
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

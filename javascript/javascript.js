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


    $('.li-brandha').hover(function () { //ایتم نوبار برندها بدون زیرمجموعه 
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



    $('.li-zibaii-salamat').hover(function () { //آیتم نوبار زیبایی سلامت با 5 زیرمجموعه
        $('#zibaii-salamat').css('display', 'flex');
        $('.before4').css('display', 'flex');
        $('#sec1-li-arayesh').css('display', 'flex');
        $('.li-atr').css('border-color', '#1bb4d8');
        $('.li-arayesh').css('border-color', '#fff');
        $('.li-post').css('border-color', '#fff');
        $('.li-mo').css('border-color', '#fff');
        $('.li-shakhsi').css('border-color', '#fff');

    }, function () {
        $('#zibaii-salamat').css('display', 'none');
        $('.before4').css('display', 'none');
        $('#sec1-li-arayesh').css('display', 'none');

        $('.li-atr').css('border-color', '#fff');

        $('#zibaii-salamat').hover(function () {
            $('#zibaii-salamat').css('display', 'flex');
            $('.before4').css('display', 'flex');
        }, function () {
            $('#zibaii-salamat').css('display', 'none');
            $('.before4').css('display', 'none');

        });
    });

    $('.li-atr').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');
        $(this).css('border-color', '#1bb4d8');
        $('#sec1-li-arayesh').css('display', 'flex');
        $('.li-arayesh').css('border-color', '#fff');
        $('.li-post').css('border-color', '#fff');
        $('.li-mo').css('border-color', '#fff');
        $('.li-shakhsi').css('border-color', '#fff');
    }, function () {
        $('#sec1-li-arayesh').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec1-li-arayesh').hover(function () {
            $('#sec1-li-arayesh').css('display', 'flex');
            $('.li-atr').css('border-color', '#1bb4d8');

        }, function () {
            // $('#sec1-li-arayesh').css('display', 'none');
            // $('.li-atr').css('border-color', '#fff');

            $('#zibaii-salamat').hover(function () {
                $('#sec1-li-arayesh').css('display', 'flex');
            }, function () {
                $('#sec1-li-arayesh').css('display', 'none');
            });
        });



    });

    $('.li-arayesh').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $(this).css('border-color', '#1bb4d8');
        $('#sec2-li-arayesh').css('display', 'flex');
        $('.li-atr').css('border-color', '#fff');
        $('.li-post').css('border-color', '#fff');
        $('.li-mo').css('border-color', '#fff');
        $('.li-shakhsi').css('border-color', '#fff');
    }, function () {
        $('#sec2-li-arayesh').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec2-li-arayesh').hover(function () {
            $('#sec2-li-arayesh').css('display', 'flex');
            $('.li-arayesh').css('border-color', '#1bb4d8');
        }, function () {
            // $('#sec2-li-arayesh').css('display', 'none');
            // $('.li-arayesh').css('border-color', '#fff');

            $('#zibaii-salamat').hover(function () {
                $('#sec2-li-arayesh').css('display', 'flex');
            }, function () {
                $('#sec2-li-arayesh').css('display', 'none');
            });
        });
    });

    $('.li-post').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $(this).css('border-color', '#1bb4d8');

        $('#sec3-li-arayesh').css('display', 'flex');
        $('.li-atr').css('border-color', '#fff');
        $('.li-arayesh').css('border-color', '#fff');
        $('.li-mo').css('border-color', '#fff');
        $('.li-shakhsi').css('border-color', '#fff');

    }, function () {
        $('#sec3-li-arayesh').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec3-li-arayesh').hover(function () {
            $('#sec3-li-arayesh').css('display', 'flex');
            $('.li-post').css('border-color', '#1bb4d8');

        }, function () {
            // $('#sec3-li-arayesh').css('display', 'none');
            // $('.li-post').css('border-color', '#fff');

            $('#zibaii-salamat').hover(function () {
                $('#sec3-li-arayesh').css('display', 'flex');
            }, function () {
                $('#sec3-li-arayesh').css('display', 'none');
            });
        });
    });

    $('.li-mo').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $(this).css('border-color', '#1bb4d8');

        $('#sec4-li-arayesh').css('display', 'flex');
        $('.li-atr').css('border-color', '#fff');
        $('.li-arayesh').css('border-color', '#fff');
        $('.li-post').css('border-color', '#fff');
        $('.li-shakhsi').css('border-color', '#fff');

    }, function () {
        $('#sec4-li-arayesh').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec4-li-arayesh').hover(function () {
            $('#sec4-li-arayesh').css('display', 'flex');
            $('.li-mo').css('border-color', '#1bb4d8');

        }, function () {
            // $('#sec4-li-arayesh').css('display', 'none');
            // $('.li-mo').css('border-color', '#fff');

            $('#zibaii-salamat').hover(function () {
                $('#sec4-li-arayesh').css('display', 'flex');
            }, function () {
                $('#sec4-li-arayesh').css('display', 'none');
            });
        });
    });

    $('.li-shakhsi').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $(this).css('border-color', '#1bb4d8');

        $('#sec5-li-arayesh').css('display', 'flex');
        $('.li-atr').css('border-color', '#fff');
        $('.li-arayesh').css('border-color', '#fff');
        $('.li-post').css('border-color', '#fff');
        $('.li-mo').css('border-color', '#fff');
    }, function () {
        $('#sec5-li-arayesh').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec5-li-arayesh').hover(function () {
            $('#sec5-li-arayesh').css('display', 'flex');
            $('.li-shakhsi').css('border-color', '#1bb4d8');

        }, function () {
            // $('#sec5-li-arayesh').css('display', 'none');
            // $('.li-shakhsi').css('border-color', '#fff');

            $('#zibaii-salamat').hover(function () {
                $('#sec5-li-arayesh').css('display', 'flex');
            }, function () {
                $('#sec5-li-arayesh').css('display', 'none');
            });
        });
    });



    $('.li-bachegane').hover(function () { //آیتم نوبار بچگانه با 3 زیرمجموعه
        $('#bachegane').css('display', 'flex');
        $('#sec1-li-bachegane').css('display', 'flex');
        $('.before3').css('display', 'flex');
        $('.li-lebas-bachegane').css('border-color', '#1bb4d8');
        $('.li-kafsh-bachegane').css('border-color', '#fff');
        $('.li-aksesori-bachegane').css('border-color', '#fff');

    }, function () {
        $('#bachegane').css('display', 'none');
        $('#sec1-li-bachegane').css('display', 'none');
        $('.before3').css('display', 'none');
        $('.li-lebas-bachegane').css('border-color', '#fff');

        $('#bachegane').hover(function () {
            $(this).css('display', 'flex');
            $('.before3').css('display', 'flex');

        }, function () {
            $(this).css('display', 'none');
            $('.before3').css('display', 'none');

        });
    });

    $('.li-lebas-bachegane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec1-li-bachegane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-kafsh-bachegane').css('border-color', '#fff');
        $('.li-aksesori-bachegane').css('border-color', '#fff');
    }, function () {
        $('#sec1-li-bachegane').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec1-li-bachegane').hover(function () {
            $('#sec1-li-bachegane').css('display', 'flex');
            $('.li-lebas-bachegane').css('border-color', '#1bb4d8');

        }, function () {
            // $('#sec1-li-bachegane').css('display', 'none');
            // $('.li-lebas-bachegane').css('border-color', '#fff');

            $('#bachegane').hover(function () {
                $('#sec1-li-bachegane').css('display', 'flex');
            }, function () {
                $('#sec1-li-bachegane').css('display', 'none');
            });
        });
    });

    $('.li-kafsh-bachegane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec2-li-bachegane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-lebas-bachegane').css('border-color', '#fff');
        $('.li-aksesori-bachegane').css('border-color', '#fff');
    }, function () {
        $('#sec2-li-bachegane').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec2-li-bachegane').hover(function () {
            $('#sec2-li-bachegane').css('display', 'flex');
            $('.li-kafsh-bachegane').css('border-color', '#1bb4d8');

        }, function () {
            // $('#sec2-li-bachegane').css('display', 'none');
            // $('.li-kafsh-bachegane').css('border-color', '#fff');

            $('#bachegane').hover(function () {
                $('#sec1-li-bachegane').css('display', 'flex');
            }, function () {
                $('#sec1-li-bachegane').css('display', 'none');
            });
        });
    });

    $('.li-aksesori-bachegane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec3-li-bachegane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-lebas-bachegane').css('border-color', '#fff');
        $('.li-kafsh-bachegane').css('border-color', '#fff');
    }, function () {
        $('#sec3-li-bachegane').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec3-li-bachegane').hover(function () {
            $('#sec3-li-bachegane').css('display', 'flex');
            $('.li-aksesori-bachegane').css('border-color', '#1bb4d8');

        }, function () {
            // $('#sec3-li-bachegane').css('display', 'none');
            // $('.li-aksesori-bachegane').css('border-color', '#fff');

            $('#bachegane').hover(function () {
                $('#sec1-li-bachegane').css('display', 'flex');
            }, function () {
                $('#sec1-li-bachegane').css('display', 'none');
            });
        });
    });




    $('.li-mardane').hover(function () { //آیتم نوبار مردانه با 5 زیرمجموعه
        $('#mardane').css('display', 'flex');
        $('#sec1-li-mardane').css('display', 'flex');
        $('.before2').css('display', 'flex');
        $('.li-lebas-mardane').css('border-color', '#1bb4d8');
        $('.li-varzeshi-mardane').css('border-color', '#fff');
        $('.li-kif-mardane').css('border-color', '#fff');
        $('.li-kafsh-mardane').css('border-color', '#fff');
        $('.li-aksesori-mardane').css('border-color', '#fff');
    }, function () {
        $('#mardane').css('display', 'none');
        $('#sec1-li-mardane').css('display', 'none');
        $('.before2').css('display', 'none');
        $('.li-lebas-mardane').css('border-color', '#fff');

        $('#mardane').hover(function () {
            $(this).css('display', 'flex');
            $('.before2').css('display', 'flex');

        }, function () {
            $(this).css('display', 'none');
            $('.before2').css('display', 'none');

        });

    });

    $('.li-lebas-mardane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec1-li-mardane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-mardane').css('border-color', '#fff');
        $('.li-kif-mardane').css('border-color', '#fff');
        $('.li-kafsh-mardane').css('border-color', '#fff');
        $('.li-aksesori-mardane').css('border-color', '#fff');
    }, function () {
        $('#sec1-li-mardane').css('display', 'none');
        $(this).css('border-color', '#fff');


        $('#sec1-li-mardane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-lebas-mardane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-lebas-mardane').css('border-color', '#fff');

            $('#maedane').hover(function () {
                $('#sec1-li-maedane').css('display', 'flex');
            }, function () {
                $('#sec1-li-maedane').css('display', 'none');
            });
        });
    });

    $('.li-kif-mardane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec2-li-mardane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-mardane').css('border-color', '#fff');
        $('.li-lebas-mardane').css('border-color', '#fff');
        $('.li-kafsh-mardane').css('border-color', '#fff');
        $('.li-aksesori-mardane').css('border-color', '#fff');
    }, function () {
        $('#sec2-li-mardane').css('display', 'none');
        $(this).css('border-color', '#fff');


        $('#sec2-li-mardane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-kif-mardane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-kif-mardane').css('border-color', '#fff');

            $('#maedane').hover(function () {
                $('#sec1-li-maedane').css('display', 'flex');
            }, function () {
                $('#sec1-li-maedane').css('display', 'none');
            });
        });
    });

    $('.li-kafsh-mardane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec3-li-mardane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-mardane').css('border-color', '#fff');
        $('.li-lebas-mardane').css('border-color', '#fff');
        $('.li-kif-mardane').css('border-color', '#fff');
        $('.li-aksesori-mardane').css('border-color', '#fff');
    }, function () {
        $('#sec3-li-mardane').css('display', 'none');
        $(this).css('border-color', '#fff');


        $('#sec3-li-mardane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-kafsh-mardane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-kafsh-mardane').css('border-color', '#fff');

            $('#maedane').hover(function () {
                $('#sec1-li-maedane').css('display', 'flex');
            }, function () {
                $('#sec1-li-maedane').css('display', 'none');
            });
        });
    });

    $('.li-aksesori-mardane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec4-li-mardane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-mardane').css('border-color', '#fff');
        $('.li-lebas-mardane').css('border-color', '#fff');
        $('.li-kif-mardane').css('border-color', '#fff');
        $('.li-kafsh-mardane').css('border-color', '#fff');
    }, function () {
        $('#sec4-li-mardane').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec4-li-mardane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-aksesori-mardane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-aksesori-mardane').css('border-color', '#fff');

            $('#maedane').hover(function () {
                $('#sec1-li-maedane').css('display', 'flex');
            }, function () {
                $('#sec1-li-maedane').css('display', 'none');
            });

        });
    });

    $('.li-varzeshi-mardane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec5-li-mardane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-lebas-mardane').css('border-color', '#fff');
        $('.li-kif-mardane').css('border-color', '#fff');
        $('.li-kafsh-mardane').css('border-color', '#fff');
        $('.li-aksesori-mardane').css('border-color', '#fff');
    }, function () {
        $('#sec5-li-mardane').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec5-li-mardane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-varzeshi-mardane').css('border-color', '#1bb4d8');
        }, function () {
            // $(this).css('display', 'none');
            // $('.li-varzeshi-mardane').css('border-color', '#fff');

            $('#maedane').hover(function () {
                $('#sec1-li-maedane').css('display', 'flex');
            }, function () {
                $('#sec1-li-maedane').css('display', 'none');
            });
        });
    });



    $('.li-zanane').hover(function () { //آیتم نوبار زنانه با 5 زیرمجموعه
        $('#zanane').css('display', 'flex');
        $('.before1').css('display', 'flex');
        $('.li-lebas-zanane').css('border-color', '#1bb4d8');
        $('#sec1-li-zanane').css('display', 'flex');
        $('.li-varzeshi-zanane').css('border-color', '#fff');
        $('.li-kif-zanane').css('border-color', '#fff');
        $('.li-kafsh-zanane').css('border-color', '#fff');
        $('.li-aksesori-zanane').css('border-color', '#fff');
    }, function () {
        $('#zanane').css('display', 'none');
        $('.before1').css('display', 'none');
        $('.li-lebas-zanane').css('border-color', '#1bb4d8');
        $('#sec1-li-zanane').css('display', 'none');

        $('#zanane').hover(function () {
            $(this).css('display', 'flex');
            $('.before1').css('display', 'flex');

        }, function () {
            $(this).css('display', 'none');
            $('.before1').css('display', 'none');

        });

    });

    $('.li-lebas-zanane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec1-li-zanane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-zanane').css('border-color', '#fff');
        $('.li-kif-zanane').css('border-color', '#fff');
        $('.li-kafsh-zanane').css('border-color', '#fff');
        $('.li-aksesori-zanane').css('border-color', '#fff');
    }, function () {

        $('#sec1-li-zanane').css('display', 'none');
        $(this).css('border-color', '#fff');




        $('#sec1-li-zanane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-lebas-zanane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-lebas-zanane').css('border-color', '#fff');

            $('#zanane').hover(function () {
                $('#sec1-li-zanane').css('display', 'flex');

            }, function () {
                $('#sec1-li-zanane').css('display', 'none');
            });
        });


    });

    $('.li-kif-zanane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');
        $('#sec2-li-zanane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-zanane').css('border-color', '#fff');
        $('.li-lebas-zanane').css('border-color', '#fff');
        $('.li-kafsh-zanane').css('border-color', '#fff');
        $('.li-aksesori-zanane').css('border-color', '#fff');
    }, function () {
        $('#sec2-li-zanane').css('display', 'none');
        $(this).css('border-color', '#fff');


        $('#sec2-li-zanane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-kif-zanane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-kif-zanane').css('border-color', '#fff');

            $('#zanane').hover(function () {
                $('#sec1-li-zanane').css('display', 'flex');
            }, function () {
                $('#sec1-li-zanane').css('display', 'none');
            });
        });

    });

    $('.li-kafsh-zanane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec3-li-zanane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-zanane').css('border-color', '#fff');
        $('.li-lebas-zanane').css('border-color', '#fff');
        $('.li-kif-zanane').css('border-color', '#fff');
        $('.li-aksesori-zanane').css('border-color', '#fff');
    }, function () {
        $('#sec3-li-zanane').css('display', 'none');
        $(this).css('border-color', '#fff');


        $('#sec3-li-zanane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-kafsh-zanane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-kafsh-zanane').css('border-color', '#fff');

            $('#zanane').hover(function () {
                $('#sec1-li-zanane').css('display', 'flex');
            }, function () {
                $('#sec1-li-zanane').css('display', 'none');
            });
        });

    });

    $('.li-aksesori-zanane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec4-li-zanane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-varzeshi-zanane').css('border-color', '#fff');
        $('.li-lebas-zanane').css('border-color', '#fff');
        $('.li-kif-zanane').css('border-color', '#fff');
        $('.li-kafsh-zanane').css('border-color', '#fff');

    }, function () {
        $('#sec4-li-zanane').css('display', 'none');
        $(this).css('border-color', '#fff');


        $('#sec4-li-zanane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-aksesori-zanane').css('border-color', '#1bb4d8');

        }, function () {
            // $(this).css('display', 'none');
            // $('.li-aksesori-zanane').css('border-color', '#fff');

            $('#zanane').hover(function () {
                $('#sec1-li-zanane').css('display', 'flex');
            }, function () {
                $('#sec1-li-zanane').css('display', 'none');
            });
        });

    });

    $('.li-varzeshi-zanane').hover(function () {
        $('.sec-main-bakhshbandiha').css('display', 'none');

        $('#sec5-li-zanane').css('display', 'flex');
        $(this).css('border-color', '#1bb4d8');
        $('.li-lebas-zanane').css('border-color', '#fff');
        $('.li-kif-zanane').css('border-color', '#fff');
        $('.li-kafsh-zanane').css('border-color', '#fff');
        $('.li-aksesori-zanane').css('border-color', '#fff');

    }, function () {
        $('#sec5-li-zanane').css('display', 'none');
        $(this).css('border-color', '#fff');


        // $('#sec1-li-zanane').css('display', 'none');
        $(this).css('border-color', '#fff');

        $('#sec5-li-zanane').hover(function () {
            $(this).css('display', 'flex');
            $('.li-varzeshi-zanane').css('border-color', '#1bb4d8');
        }, function () {
            // $(this).css('display', 'none');
            // $('.li-varzeshi-zanane').css('border-color', '#fff');

            $('#zanane').hover(function () {
                $('#sec1-li-zanane').css('display', 'flex');
            }, function () {
                $('#sec1-li-zanane').css('display', 'none');
            });
        });

    });



    //اسلایدر بک گراند هدر
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
    //اسلایدر بک گراند هدر


    //grid-zanane-mardane-bachegane-zibaii salamat
    $('.img1-grid').hover(function () {
        $('.img1-grid img').css({
            'transform': 'scale(1.04)',
            'transition': 'transform .7s ease-out'
        });
    }, function () {
        $('.img1-grid img').css({
            'transform': 'scale(1)',
            'transition': 'transform .7s ease-out'
        });
    });

    $('.img2-grid').hover(function () {
        $('.img2-grid img').css({
            'transform': 'scale(1.04)',
            'transition': 'transform .7s ease-out'
        });
    }, function () {
        $('.img2-grid img').css({
            'transform': 'scale(1)',
            'transition': 'transform .7s ease-out'
        });
    });

    $('.img3-grid').hover(function () {
        $('.img3-grid img').css({
            'transform': 'scale(1.04)',
            'transition': 'transform .7s ease-out'
        });
    }, function () {
        $('.img3-grid img').css({
            'transform': 'scale(1)',
            'transition': 'transform .7s ease-out'
        });
    });

    $('.img4-grid').hover(function () {
        $('.img4-grid img').css({
            'transform': 'scale(1.04)',
            'transition': 'transform .7s ease-out'
        });
    }, function () {
        $('.img4-grid img').css({
            'transform': 'scale(1)',
            'transition': 'transform .7s ease-out'
        });
    });

    $('.img5-grid').hover(function () {
        $('.img5-grid img').css({
            'transform': 'scale(1.04)',
            'transition': 'transform .7s ease-out'
        });
    }, function () {
        $('.img5-grid img').css({
            'transform': 'scale(1)',
            'transition': 'transform .7s ease-out'
        });
    });

    $('.li-grid-mardane').click(function () {
        $(this).css('border-color', '#000');
        $('.li-grid-zanane').css('border-color', '#f5f5f5');
        $('.li-grid-bachegane').css('border-color', '#f5f5f5');
        $('.li-grid-zibaii-salamat').css('border-color', '#f5f5f5');

        $('#sec-grid-mardane').css('display', 'grid');
        $('#sec-grid-zanane').css('display', 'none');
        $('#sec-grid-bachegane').css('display', 'none');
        $('#sec-grid-zibaiisalamat').css('display', 'none');
    });

    $('.li-grid-zanane').click(function () {
        $(this).css('border-color', '#000');
        $('.li-grid-mardane').css('border-color', '#f5f5f5');
        $('.li-grid-bachegane').css('border-color', '#f5f5f5');
        $('.li-grid-zibaii-salamat').css('border-color', '#f5f5f5');

        $('#sec-grid-mardane').css('display', 'none');
        $('#sec-grid-zanane').css('display', 'grid');
        $('#sec-grid-bachegane').css('display', 'none');
        $('#sec-grid-zibaiisalamat').css('display', 'none');
    });

    $('.li-grid-bachegane').click(function () {
        $(this).css('border-color', '#000');
        $('.li-grid-mardane').css('border-color', '#f5f5f5');
        $('.li-grid-zanane').css('border-color', '#f5f5f5');
        $('.li-grid-zibaii-salamat').css('border-color', '#f5f5f5');

        $('#sec-grid-mardane').css('display', 'none');
        $('#sec-grid-zanane').css('display', 'none');
        $('#sec-grid-bachegane').css('display', 'grid');
        $('#sec-grid-zibaiisalamat').css('display', 'none');
    });

    $('.li-grid-zibaii-salamat').click(function () {
        $(this).css('border-color', '#000');
        $('.li-grid-mardane').css('border-color', '#f5f5f5');
        $('.li-grid-zanane').css('border-color', '#f5f5f5');
        $('.li-grid-bachegane').css('border-color', '#f5f5f5');

        $('#sec-grid-mardane').css('display', 'none');
        $('#sec-grid-zanane').css('display', 'none');
        $('#sec-grid-bachegane').css('display', 'none');
        $('#sec-grid-zibaiisalamat').css('display', 'grid');
    });
    //grid-zanane-mardane-bachegane-zibaii salamat


});

var bg1 = document.getElementById('bg-header1');
var bg2 = document.getElementById('bg-header2');
var bg3 = document.getElementById('bg-header3');
var bg4 = document.getElementById('bg-header4');
var bg5 = document.getElementById('bg-header5');
var bg6 = document.getElementById('bg-header6');
var bg7 = document.getElementById('bg-header7');
var btn1 = document.getElementById('p1-btns-slider');
var btn2 = document.getElementById('p2-btns-slider');
var btn3 = document.getElementById('p3-btns-slider');
var btn4 = document.getElementById('p4-btns-slider');
var btn5 = document.getElementById('p5-btns-slider');
var btn6 = document.getElementById('p6-btns-slider');
var btn7 = document.getElementById('p7-btns-slider');

bg1.style.opacity = 1;
bg2.style.opacity = 0;
bg3.style.opacity = 0;
bg4.style.opacity = 0;
bg5.style.opacity = 0;
bg6.style.opacity = 0;
bg7.style.opacity = 0;
btn1.style.backgroundColor = '#000';
btn2.style.backgroundColor = 'transparent';
btn3.style.backgroundColor = 'transparent';
btn4.style.backgroundColor = 'transparent';
btn5.style.backgroundColor = 'transparent';
btn6.style.backgroundColor = 'transparent';
btn7.style.backgroundColor = 'transparent';

setTimeout(function () {
    bg1.style.opacity = 0;
    bg2.style.opacity = 1;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
    bg6.style.opacity = 0;
    bg7.style.opacity = 0;
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = '#000';
    btn3.style.backgroundColor = 'transparent';
    btn4.style.backgroundColor = 'transparent';
    btn5.style.backgroundColor = 'transparent';
    btn6.style.backgroundColor = 'transparent';
    btn7.style.backgroundColor = 'transparent';
}, 5000);
setTimeout(function () {
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 1;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
    bg6.style.opacity = 0;
    bg7.style.opacity = 0;
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = '#000';
    btn4.style.backgroundColor = 'transparent';
    btn5.style.backgroundColor = 'transparent';
    btn6.style.backgroundColor = 'transparent';
    btn7.style.backgroundColor = 'transparent';
}, 10000);
setTimeout(function () {
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 1;
    bg5.style.opacity = 0;
    bg6.style.opacity = 0;
    bg7.style.opacity = 0;
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'transparent';
    btn4.style.backgroundColor = '#000';
    btn5.style.backgroundColor = 'transparent';
    btn6.style.backgroundColor = 'transparent';
    btn7.style.backgroundColor = 'transparent';
}, 15000);
setTimeout(function () {
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 1;
    bg6.style.opacity = 0;
    bg7.style.opacity = 0;
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'transparent';
    btn4.style.backgroundColor = 'transparent';
    btn5.style.backgroundColor = '#000';
    btn6.style.backgroundColor = 'transparent';
    btn7.style.backgroundColor = 'transparent';
}, 20000);
setTimeout(function () {
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
    bg6.style.opacity = 1;
    bg7.style.opacity = 0;
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'transparent';
    btn4.style.backgroundColor = 'transparent';
    btn5.style.backgroundColor = 'transparent';
    btn6.style.backgroundColor = '#000';
    btn7.style.backgroundColor = 'transparent';
}, 25000);
setTimeout(function () {
    bg1.style.opacity = 0;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
    bg6.style.opacity = 0;
    bg7.style.opacity = 1;
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'transparent';
    btn4.style.backgroundColor = 'transparent';
    btn5.style.backgroundColor = 'transparent';
    btn6.style.backgroundColor = 'transparent';
    btn7.style.backgroundColor = '#000';
}, 30000);

setInterval(function () {
    var bg1 = document.getElementById('bg-header1');
    var bg2 = document.getElementById('bg-header2');
    var bg3 = document.getElementById('bg-header3');
    var bg4 = document.getElementById('bg-header4');
    var bg5 = document.getElementById('bg-header5');
    var bg6 = document.getElementById('bg-header6');
    var bg7 = document.getElementById('bg-header7');
    var btn1 = document.getElementById('p1-btns-slider');
    var btn2 = document.getElementById('p2-btns-slider');
    var btn3 = document.getElementById('p3-btns-slider');
    var btn4 = document.getElementById('p4-btns-slider');
    var btn5 = document.getElementById('p5-btns-slider');
    var btn6 = document.getElementById('p6-btns-slider');
    var btn7 = document.getElementById('p7-btns-slider');

    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
    bg3.style.opacity = 0;
    bg4.style.opacity = 0;
    bg5.style.opacity = 0;
    bg6.style.opacity = 0;
    bg7.style.opacity = 0;
    btn1.style.backgroundColor = '#000';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'transparent';
    btn4.style.backgroundColor = 'transparent';
    btn5.style.backgroundColor = 'transparent';
    btn6.style.backgroundColor = 'transparent';
    btn7.style.backgroundColor = 'transparent';

    setTimeout(function () {
        bg1.style.opacity = 0;
        bg2.style.opacity = 1;
        bg3.style.opacity = 0;
        bg4.style.opacity = 0;
        bg5.style.opacity = 0;
        bg6.style.opacity = 0;
        bg7.style.opacity = 0;
        btn1.style.backgroundColor = 'transparent';
        btn2.style.backgroundColor = '#000';
        btn3.style.backgroundColor = 'transparent';
        btn4.style.backgroundColor = 'transparent';
        btn5.style.backgroundColor = 'transparent';
        btn6.style.backgroundColor = 'transparent';
        btn7.style.backgroundColor = 'transparent';
    }, 5000);
    setTimeout(function () {
        bg1.style.opacity = 0;
        bg2.style.opacity = 0;
        bg3.style.opacity = 1;
        bg4.style.opacity = 0;
        bg5.style.opacity = 0;
        bg6.style.opacity = 0;
        bg7.style.opacity = 0;
        btn1.style.backgroundColor = 'transparent';
        btn2.style.backgroundColor = 'transparent';
        btn3.style.backgroundColor = '#000';
        btn4.style.backgroundColor = 'transparent';
        btn5.style.backgroundColor = 'transparent';
        btn6.style.backgroundColor = 'transparent';
        btn7.style.backgroundColor = 'transparent';
    }, 10000);
    setTimeout(function () {
        bg1.style.opacity = 0;
        bg2.style.opacity = 0;
        bg3.style.opacity = 0;
        bg4.style.opacity = 1;
        bg5.style.opacity = 0;
        bg6.style.opacity = 0;
        bg7.style.opacity = 0;
        btn1.style.backgroundColor = 'transparent';
        btn2.style.backgroundColor = 'transparent';
        btn3.style.backgroundColor = 'transparent';
        btn4.style.backgroundColor = '#000';
        btn5.style.backgroundColor = 'transparent';
        btn6.style.backgroundColor = 'transparent';
        btn7.style.backgroundColor = 'transparent';
    }, 15000);
    setTimeout(function () {
        bg1.style.opacity = 0;
        bg2.style.opacity = 0;
        bg3.style.opacity = 0;
        bg4.style.opacity = 0;
        bg5.style.opacity = 1;
        bg6.style.opacity = 0;
        bg7.style.opacity = 0;
        btn1.style.backgroundColor = 'transparent';
        btn2.style.backgroundColor = 'transparent';
        btn3.style.backgroundColor = 'transparent';
        btn4.style.backgroundColor = 'transparent';
        btn5.style.backgroundColor = '#000';
        btn6.style.backgroundColor = 'transparent';
        btn7.style.backgroundColor = 'transparent';
    }, 20000);
    setTimeout(function () {
        bg1.style.opacity = 0;
        bg2.style.opacity = 0;
        bg3.style.opacity = 0;
        bg4.style.opacity = 0;
        bg5.style.opacity = 0;
        bg6.style.opacity = 1;
        bg7.style.opacity = 0;
        btn1.style.backgroundColor = 'transparent';
        btn2.style.backgroundColor = 'transparent';
        btn3.style.backgroundColor = 'transparent';
        btn4.style.backgroundColor = 'transparent';
        btn5.style.backgroundColor = 'transparent';
        btn6.style.backgroundColor = '#000';
        btn7.style.backgroundColor = 'transparent';
    }, 25000);
    setTimeout(function () {
        bg1.style.opacity = 0;
        bg2.style.opacity = 0;
        bg3.style.opacity = 0;
        bg4.style.opacity = 0;
        bg5.style.opacity = 0;
        bg6.style.opacity = 0;
        bg7.style.opacity = 1;
        btn1.style.backgroundColor = 'transparent';
        btn2.style.backgroundColor = 'transparent';
        btn3.style.backgroundColor = 'transparent';
        btn4.style.backgroundColor = 'transparent';
        btn5.style.backgroundColor = 'transparent';
        btn6.style.backgroundColor = 'transparent';
        btn7.style.backgroundColor = '#000';
    }, 30000);
}, 35000);

function show_search() {
    document.querySelector('.sec-search').style.top = 0;
}

function close_search() {
    document.querySelector('.sec-search').style.top = '-100%';
}
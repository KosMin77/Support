/**
 * @file Implementation of the info block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the info block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here

    $('.info__slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        draggable: false,
        nextArrow: '.slick-next',
        prevArrow: '.slick-prev'
    });

    $('.slick-prev').css('display', 'none');

    $('.info__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-prev').css('display', nextSlide ? 'block' : 'none');
    });

    $('.slick-next').on('click', function() {
        console.log($('#email').val().length);
        if (($('#email').val().length > 0) && ($('#email').val().match(/.+?\@.+/g) || []).length !== 1) {
            console.log('invalid')
            return false;
        } else {
            console.log(123);
        }
    });

    $('#info__series').mask('SS', {
        'translation': {
            S: {
                pattern: /[A-Za-z]/
            }
        }
    });
    $('#info__numb').mask('000000');
    $('#info__ssn').mask('000000000000');
    $('#info__pasNumb').mask('000000000');

    $('#phone').mask("+38 (000) 000 00 00");

    $('#email').on('blur', function() {
        let email = $(this).val();

        if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
            if ($('.info__slider').slick('slickCurrentSlide') == 5) {
                console.log('invalid')
            }

        } else {
            console.log('valid');
            //   alert('Вы ввели корректный e-mail!');
        }

    });

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
}
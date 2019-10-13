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

    $('#info__name').mask('SSSSSSSSSSSSSS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я]/
            }
        }
    });

    $('#info__lastName').mask('SSSSSSSSSSSSSS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я-]/
            }
        }
    });
    $('#info__middleName').mask('SSSSSSSSSSSSSS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я]/
            }
        }
    });

    $('#info__series').mask('SS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я]/
            }
        }
    });

    $('#info__numb').mask('000000');
    $('#info__ssn').mask('000000000000');
    $('#info__pasNumb').mask('000000000');

    $('#info__city').mask('SSSSSSSSSSSSSSSSSSSSSSSS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я]/
            }
        }
    });
    $('#info__region').mask('SSSSSSSSSSSSSSSSSSSSSSSS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я-]/
            }
        }
    });
    $('#info__locality').mask('SSSSSSSSSSSSSSSSSSSSSSSS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я-]/
            }
        }
    });
    $('#info__street').mask('SSSSSSSSSSSSSSSSSSSSSSSS', {
        'translation': {
            S: {
                pattern: /[А-Яа-я-]/
            }
        }
    });
    $('#info__houseNumb').mask('YYYYYYYYYYYYYYYYYYYYYYY', {
        'translation': {
            Y: {
                pattern: /[0-9]/
            }
        }
    });

    $('#phone').mask('+38 (000) 000 00 00');

    $('#email').on('blur', function () {

        const email = $(this).val();

        if (email.length && (email.match('@') || []).length !== 1) {
            if ($('.info__slider').slick('slickCurrentSlide') === 5) {
                $('.slick-next').css('display', 'none');
            }

        } else {
            $('.slick-next').css('display', 'block');
        }

    });

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
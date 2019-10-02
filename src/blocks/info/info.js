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

    $(document).ready(function () {
        $('.info__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
          });
    })
    
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};

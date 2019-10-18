function initBlock() {
    const toggleSlides = () => {
        const btns = document.querySelectorAll('.js-btn');
        const classHidden = 'is-hidden';
        const classError = 'box-error';

        Array.from(btns).forEach((btn) => {
            btn.addEventListener('click', function() {
                const currentSlide = document.querySelector(`[data-slide="${btn.dataset.current}"]`);
                const nextSlide = document.querySelector(`[data-slide="${btn.dataset.next}"]`);
                const action = btn.dataset.action;

                const changeSlide = () => {
                    currentSlide.classList.add(classHidden);
                    nextSlide.classList.remove(classHidden);
                };

                const addErrorBox = () => {
                    const boxError = currentSlide.querySelector(`.${classError}`);

                    if (!boxError) {
                        const boxError = document.createElement('div');

                        boxError.className = classError;
                        boxError.innerText = 'Будьласка, заповніть усі форми.';
                        currentSlide.append(boxError);
                    }
                };

                const removeErrorBox = () => {
                    const boxError = currentSlide.querySelector(`.${classError}`);

                    if (boxError) {
                        boxError.remove();
                    }
                };

                if (action === 'check') {
                    const inputs = currentSlide.querySelectorAll('input');
                    const statusArray = [];

                    Array.from(inputs).forEach((input) => {
                        const type = input.dataset.type;
                        const control = input.dataset.control;
                        const minValue = input.dataset.min ? input.dataset.min : 1;
                        const maxValue = input.dataset.max ? input.dataset.max : 100;

                        if (type === 'text') {
                            if (control === 'length') {
                                if (input.value.length >= minValue && input.value.length <= maxValue) {
                                    statusArray.push('true');
                                } else {
                                    statusArray.push('false');
                                }
                            }
                        }
                    });

                    if (statusArray.length && !statusArray.includes('false')) {
                        removeErrorBox();
                        changeSlide();
                    } else {
                        addErrorBox();
                    }

                } else {
                    removeErrorBox();
                    changeSlide();
                }
            });
        });
    };

    toggleSlides();

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
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock
};
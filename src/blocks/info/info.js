function initBlock() {
    const toggleSlides = () => {
        const btns = document.querySelectorAll('.js-btn');
        const classHidden = 'is-hidden';
        const classError = 'box-error';
        const maskPhoneBefore = /[/!@#$%^&*/|_=`.~;":'a-zA-Zа-яА-Я]/;
        const maskPhoneAfter = /[/!@#$%^&*+()/|_=`.~;":'a-zA-Zа-яА-Я]/;
        const maskEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        Array.from(btns).forEach((btn) => {
            btn.addEventListener('click', function() {
                const currentSlide = document.querySelector(`[data-slide="${btn.dataset.current}"]`);
                const nextSlide = document.querySelector(`[data-slide="${btn.dataset.next}"]`);
                const action = btn.dataset.action;

                const getTypeLabel = () => {
                    if (btn.dataset.current === 'first') {
                        const radioBtns = currentSlide.querySelectorAll('input[type="radio"]');

                        Array.from(radioBtns).forEach((radioBtn) => {
                            if (radioBtn.checked) {
                                const lastSlide = document.querySelector('[data-slide="sixth"]');
                                const typeLabel = lastSlide.querySelector('.js-label-type');

                                typeLabel.innerText = radioBtn.parentElement.querySelector('.info__choice').innerText;
                            }
                        });
                    }
                };

                getTypeLabel();

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
                        const thisValue = input.value;
                        const type = input.dataset.type;
                        const control = input.dataset.control;
                        const minValue = input.dataset.min ? input.dataset.min : 1;
                        const maxValue = input.dataset.max ? input.dataset.max : 100;
                        const minValuePhone = input.dataset.min ? input.dataset.min : 6;
                        const maxValuePhone = input.dataset.max ? input.dataset.max : 12;

                        if (type === 'text') {
                            if (control === 'length') {
                                if (input.value.length >= minValue && input.value.length <= maxValue) {
                                    statusArray.push('true');
                                } else {
                                    statusArray.push('false');
                                }
                            }
                        } else if (type === 'phone') {
                            if (control === 'length') {
                                thisValue.replace(maskPhoneAfter, '');

                                if (thisValue.length >= minValuePhone && thisValue.length <= maxValuePhone) {
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

        const inputsPhone = document.querySelectorAll('input[data-type="phone"]');

        Array.from(inputsPhone).forEach((input) => {
            const checkPhone = (input) => {
                const type = input.dataset.type;
                const control = input.dataset.control;

                if (type === 'phone' && control === 'length') {
                    input.value = input.value.replace(maskPhoneBefore, '');
                }
            };

            input.addEventListener('keyup', function() {
                checkPhone(this);
            });

            input.addEventListener('change', function() {
                checkPhone(this);
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

}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock
};
let buttonContinue1 = document.querySelector('.buttonContinue1');
let buttonContinue2 = document.querySelector('.buttonContinue2');
let buttonContinue3 = document.querySelector('.buttonContinue3');
let text1 = document.querySelector('.after__text1');
let text2 = document.querySelector('.after__text2');
let text3 = document.querySelector('.after__text3');
buttonContinue1.addEventListener("click", function () {
    text1.classList.remove('overflow');
    buttonContinue1.classList.add('hidden');
});

buttonContinue2.addEventListener("click", function () {
    text2.classList.remove('overflow');
    buttonContinue2.classList.add('hidden');
});

buttonContinue3.addEventListener("click", function () {
    text3.classList.remove('overflow');
    buttonContinue3.classList.add('hidden');
});
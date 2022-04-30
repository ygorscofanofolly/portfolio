let button = document.querySelectorAll('.button');
let textInfo = document.querySelectorAll('.info_text');
textInfo[0].classList.add('activeIndexInfo');
button[0].classList.add('activeLight');
function changeIndex(index) {
    button.forEach(element => {
        element.classList.remove('activeLight');
    });
    button[index].classList.add('activeLight');
    textInfo.forEach(element => {
        element.classList.remove('activeIndexInfo');
    });
    textInfo[index].classList.add('activeIndexInfo');
};
button.forEach((element, index) => {
    element.addEventListener('click', function() {
        changeIndex(index);
    });
});
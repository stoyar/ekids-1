const firstImage = document.querySelector('.first-image');
const leftButton = document.querySelector('#left_button');
const rightButton = document.querySelector('#right_button');

let leftMargin = 0;

leftButton.onclick = () => {
    leftMargin = leftMargin - 300;
    firstImage.style.marginLeft = leftMargin + 'px';
}

rightButton.onclick = () => {
    leftMargin = leftMargin + 300;
    firstImage.style.marginLeft = leftMargin + 'px';
}
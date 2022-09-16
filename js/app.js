const imges = [
    'img/img-1.png',
    'img/img-2.png',
    'img/img-3.png',
    'img/img-4.png',
    'img/img-5.png'
];
document.getElementById('carousel').style.textAlign = 'center';

let imgIndex = 0;
const img = document.getElementById('img-carousel');

setInterval(() => {
    if (imgIndex === imges.length) {
        imgIndex = 0;
    }
    const imgLink = imges[imgIndex]

    img.setAttribute('src', imgLink)
    imgIndex++;
}, 1000);

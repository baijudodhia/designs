window.onload = function () {
    let carousel = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < carousel.length; i++) {
        carousel[i].firstElementChild.setAttribute("src", `https://source.unsplash.com/${carousel[i].offsetWidth * 2}x${carousel[i].offsetHeight * 2}`);
    }
    loadMore();
}

function createImageElement() {
    let galleryItem = document.createElement('div');
    let galleryPhoto = document.createElement('img');
    let galleryShadow = document.createElement('div');

    galleryItem.classList.add('gallery-item')

    galleryPhoto.classList.add('gallery-photo');
    galleryPhoto.setAttribute("src", `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 10)}`);

    galleryShadow.classList.add('gallery-shadow');

    galleryItem.appendChild(galleryPhoto);
    galleryItem.appendChild(galleryShadow);

    return galleryItem;
}

function loadMore() {
    let gallery = document.getElementById('gallery');
    let plus = document.getElementById('loadmore-plus');
    let spinner = document.getElementById('loadmore-spinner');

    plus.removeAttribute("class");
    spinner.setAttribute("class", 'show');

    setTimeout(function () {
        for (let i = 0; i < 5; i++) {
            gallery.appendChild(createImageElement().cloneNode(true));
        }
    }, 100);

    setTimeout(function () {
        plus.setAttribute("class", 'show');
        spinner.removeAttribute("class");
    }, 500);
}

function previous() {
    let carousel = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("carousel-dots");
    let findIndex;
    for (let i = 0; i < carousel.length; i++) {
        if (carousel[i].classList.contains("carousel-active")) {
            findIndex = i;
            break;
        }
    }
    if (findIndex === 0) {
        carousel[carousel.length - 1].classList.add('carousel-active');
        carousel[carousel.length - 1].firstElementChild.setAttribute("src", `https://source.unsplash.com/${carousel[carousel.length - 1].offsetWidth * 2}x${carousel[carousel.length - 1].offsetHeight * 2}`);
        dots[dots.length - 1].classList.add('dot-active');
    } else {
        carousel[findIndex - 1].classList.add('carousel-active');
        dots[findIndex - 1].classList.add('dot-active');
        carousel[findIndex - 1].firstElementChild.setAttribute("src", `https://source.unsplash.com/${carousel[findIndex - 1].offsetWidth * 2}x${carousel[findIndex - 1].offsetHeight * 2}`);
    }
    carousel[findIndex].classList.remove('carousel-active');
    dots[findIndex].classList.remove('dot-active');
}

function next() {
    let carousel = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("carousel-dots");
    let findIndex;
    for (let i = 0; i < carousel.length; i++) {
        if (carousel[i].classList.contains("carousel-active")) {
            findIndex = i;
            break;
        }
    }
    if (findIndex === carousel.length - 1) {
        carousel[0].classList.add('carousel-active');
        carousel[0].firstElementChild.setAttribute("src", `https://source.unsplash.com/${carousel[0].offsetWidth * 2}x${carousel[0].offsetHeight * 2}`);
        dots[0].classList.add('dot-active');
    } else {
        carousel[findIndex + 1].classList.add('carousel-active');
        dots[findIndex + 1].classList.add('dot-active');
        carousel[findIndex + 1].firstElementChild.setAttribute("src", `https://source.unsplash.com/${carousel[findIndex + 1].offsetWidth * 2}x${carousel[findIndex + 1].offsetHeight * 2}`);
    }
    carousel[findIndex].classList.remove('carousel-active');
    dots[findIndex].classList.remove('dot-active');
}

function changeImageOnDot(index) {
    let carousel = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("carousel-dots");
    let findIndex;
    for (let i = 0; i < carousel.length; i++) {
        if (carousel[i].classList.contains("carousel-active")) {
            findIndex = i;
            break;
        }
    }
    carousel[findIndex].classList.remove('carousel-active');
    dots[findIndex].classList.remove('dot-active');
    carousel[index].classList.add('carousel-active');
    dots[index].classList.add('dot-active');
}
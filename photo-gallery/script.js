const baseUrl = 'https://source.unsplash.com';

window.onload = async function () {
    let carousel = document.getElementsByClassName("carousel-item");
    let spinner = document.getElementsByClassName("carousel-spinner-container")[0];
    spinner.setAttribute('data-show', 'true');
    let srcUrl = `${baseUrl}/${carousel[0].offsetWidth * 2}x${carousel[0].offsetHeight * 2}/?wallpaper`;
    let actualUrl = await fetchImageUrl(srcUrl);
    var url = new URL(actualUrl);
    url.searchParams.set("w", carousel[0].offsetWidth);
    url.searchParams.set("h", carousel[0].offsetHeight);
    actualUrl = url.href;
    carousel[0].setAttribute("onclick", `fullscreen('${actualUrl}');`);
    carousel[0].firstElementChild.setAttribute("src", `${actualUrl}`);

    // Create a new observer
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            // Log if the element and if it's in the viewport
            if (entry.isIntersecting) {
                setTimeout(loadMore(), 1000);
            }
        });
    });

    // The element to observe
    let app = document.querySelector('#pageend');

    // Attach it to the observer
    observer.observe(app);
    spinner.setAttribute('data-show', 'false');
}

// dec2hex :: Integer -> String
// i.e. 0-255 -> '00'-'ff'
function dec2hex(dec) {
    return dec.toString(16).padStart(2, "0")
}

// generateId :: Integer -> String
function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

function removeImage(id) {
    document.getElementById(`${id}`).remove();
}

async function createImageElement() {
    let galleryItem = document.createElement('div');
    let galleryPhoto = document.createElement('img');
    let galleryShadow = document.createElement('div');
    let galleryRemove = document.createElement('button');

    let unsplashId = Math.floor(Math.random() * 100);
    let id = generateId(16);

    let srcUrl = `${baseUrl}/random?sig=${unsplashId}/?wallpaper`;
    let actualUrl = await fetchImageUrl(srcUrl);

    galleryItem.classList.add('gallery-item');
    galleryItem.setAttribute('id', `${id}`);

    galleryPhoto.classList.add('gallery-photo');
    galleryPhoto.setAttribute("src", actualUrl);

    var text = document.createTextNode('−');
    galleryRemove.appendChild(text);
    galleryRemove.classList.add('gallery-remove');
    galleryRemove.setAttribute("onclick", `removeImage('${id}');`);

    galleryShadow.classList.add('gallery-shadow');
    galleryShadow.setAttribute("onclick", `fullscreen('${actualUrl}');`);

    galleryItem.appendChild(galleryPhoto);
    galleryItem.appendChild(galleryRemove);
    galleryItem.appendChild(galleryShadow);

    return galleryItem;
}
function closeFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreen.removeAttribute('class');
}

async function fetchImageUrl(url) {
    const response = await fetch(url);
    return response.url;
}

function fullscreen(actualUrl) {
    let fullscreen = document.getElementById('fullscreen');
    let fullscreenImg = document.getElementById('fullscreen-img');
    let galleryAnchorDownload = document.getElementById('fullscreen-download');

    galleryAnchorDownload.setAttribute("href", actualUrl);
    galleryAnchorDownload.setAttribute("download", actualUrl);

    fullscreenImg.setAttribute('src', actualUrl);
    fullscreen.setAttribute('class', 'show');
}

function loadMore() {
    let gallery = document.getElementById('gallery');
    let plus = document.getElementById('loadmore-plus');
    let spinner = document.getElementById('loadmore-spinner');

    plus.removeAttribute("class");
    spinner.setAttribute("class", 'show');

    setTimeout(async function () {
        for (let i = 0; i < 1; i++) {
            const ele = await createImageElement();
            gallery.appendChild(ele);
        }
    }, 100);

    setTimeout(function () {
        plus.setAttribute("class", 'show');
        spinner.removeAttribute("class");
    }, 500);
}

async function previous() {
    let carousel = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("carousel-dots");
    let spinner = document.getElementsByClassName("carousel-spinner-container")[0];
    spinner.setAttribute('data-show', 'true');
    let findIndex;
    let srcUrl = `${baseUrl}/${carousel[carousel.length - 1].offsetWidth * 2}x${carousel[carousel.length - 1].offsetHeight * 2}/?wallpaper`;
    let actualUrl = await fetchImageUrl(srcUrl);
    for (let i = 0; i < carousel.length; i++) {
        if (carousel[i].classList.contains("carousel-active")) {
            findIndex = i;
            break;
        }
    }
    const url = new URL(actualUrl);
    const h = url.searchParams.get("h");
    const w = url.searchParams.get("w");
    if (h < 5 || w < 5) {
        url.searchParams.set("w", carousel[findIndex].offsetWidth);
        url.searchParams.set("h", carousel[findIndex].offsetHeight);
    }
    actualUrl = url.href;
    if (findIndex === 0) {
        carousel[carousel.length - 1].classList.add('carousel-active');
        carousel[carousel.length - 1].setAttribute("onclick", `fullscreen('${actualUrl}');`);
        carousel[carousel.length - 1].firstElementChild.setAttribute("src", actualUrl);
        dots[dots.length - 1].classList.add('dot-active');
    } else {
        carousel[findIndex - 1].classList.add('carousel-active');
        carousel[findIndex - 1].setAttribute("onclick", `fullscreen('${actualUrl}');`);
        dots[findIndex - 1].classList.add('dot-active');
        carousel[findIndex - 1].firstElementChild.setAttribute("src", actualUrl);
    }
    carousel[findIndex].classList.remove('carousel-active');
    dots[findIndex].classList.remove('dot-active');
    spinner.setAttribute('data-show', 'false');
}

async function next() {
    let carousel = document.getElementsByClassName("carousel-item");
    let spinner = document.getElementsByClassName("carousel-spinner-container")[0];
    spinner.setAttribute('data-show', 'true');
    let dots = document.getElementsByClassName("carousel-dots");
    let findIndex;
    let srcUrl = `${baseUrl}/${carousel[0].offsetWidth * 2}x${carousel[0].offsetHeight * 2}/?wallpaper`;
    let actualUrl = await fetchImageUrl(srcUrl);
    for (let i = 0; i < carousel.length; i++) {
        if (carousel[i].classList.contains("carousel-active")) {
            findIndex = i;
            break;
        }
    }
    const url = new URL(actualUrl);
    const h = url.searchParams.get("h");
    const w = url.searchParams.get("w");
    if (h < 5 || w < 5) {
        url.searchParams.set("w", carousel[findIndex].offsetWidth);
        url.searchParams.set("h", carousel[findIndex].offsetHeight);
    }
    actualUrl = url.href;
    if (findIndex === carousel.length - 1) {
        carousel[0].classList.add('carousel-active');
        carousel[0].setAttribute("onclick", `fullscreen('${actualUrl}');`);
        carousel[0].firstElementChild.setAttribute("src", actualUrl);
        dots[0].classList.add('dot-active');
    } else {
        carousel[findIndex + 1].classList.add('carousel-active');
        carousel[findIndex + 1].setAttribute("onclick", `fullscreen('${actualUrl}');`);
        dots[findIndex + 1].classList.add('dot-active');
        carousel[findIndex + 1].firstElementChild.setAttribute("src", actualUrl);
    }
    carousel[findIndex].classList.remove('carousel-active');
    dots[findIndex].classList.remove('dot-active');
    spinner.setAttribute('data-show', 'false');
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
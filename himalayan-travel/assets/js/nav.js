function setActive() {
    for (
        aObj = document.getElementById("navul").getElementsByTagName("a"), i = 0;
        i < aObj.length;
        i++
    )
        document.location.href.indexOf(aObj[i].href) >= 0 &&
            (aObj[i].className += " active");
}
(document.getElementById("navigation").innerHTML = `
<div class="fixed-top" style="padding: 12px">
    <nav class="shadow navbar navbar-expand-lg navbar-dark bg-dark rounded shadow" style="max-height:60px;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-brand p-0 m-0 mr-auto" style="max-height: 100%">
            <div class="d-flex justify-content-between">
                <div class="align-self-center mr-5">
                    <a href="./index.html">
                        <img src="./assets/img/logo/travel.png" alt="Travel" style="max-height: 48px"
                            class="rounded" />
                    </a>
                    <span>Travel Website</span>
                </div>
            </div>
        </div>
        <div class="bg-dark px-3 py-2 collapse navbar-collapse" id="navbarSupportedContent"
            style="border-radius:0px 0px 10px 10px;">
            <ul class="navbar-nav ml-auto" id="navul">
                <li class="nav-item mx-1">
                    <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="rooms.html">Rooms</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="dining.html">Dining</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="gallery.html">Gallery</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="booking.html">Booking</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
`, (window.onload = setActive));

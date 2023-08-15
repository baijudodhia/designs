function show(restaurant) {
    var i;
    var x = document.getElementsByClassName("resto");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(restaurant).style.display = "block";
}
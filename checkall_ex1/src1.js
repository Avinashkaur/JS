function check(value) {
    var i, colors = document.getElementsByClassName("color");
    for (i = 0; i < colors.length; i++) {
        colors[i].checked = value;
    }
}

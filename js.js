var colorslist = document.querySelectorAll(".product> .colorproduct> img")
for (var i = 0; i < colorslist.length; i++) {
    colorslist[i].onclick = function () {
        var mainImg = document.getElementsByClassName("main")[0];
        mainImg.src = this.src;
    }
}

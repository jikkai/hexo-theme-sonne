(function () {
    var img = document.querySelectorAll('.content img');
    if (img.length > 0) {
        var div = document.createElement('div');
        div.className = 'imgMask';
        div.onclick = function () {
            this.style.display = 'none';
        };
        document.body.appendChild(div);

        for (var i = 0; i < img.length; i++) {
            var alt = document.createElement('span');
            alt.innerHTML = img[i].alt;
            alt.className = 'alt';
            img[i].parentNode.appendChild(alt);
            img[i].onclick = function () {
                div.innerHTML = '<div>' +
                                    '<img src="' + this.src + '">' +
                                '</div>';
                div.style.display = 'flex';
            };
        }
    }
})();

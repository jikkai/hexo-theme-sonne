(function () {
    var code = document.querySelectorAll('.code');
    for (var i = 0; i < code.length; i++) {
        hljs.highlightBlock(code[i]);
    }

    var img = document.querySelectorAll('.content img');
    for (var i = 0; i < img.length; i++) {
        var alt = document.createElement('span');
        alt.innerHTML = img[i].alt;
        alt.className = 'alt';
        alt.onclick = function () {
            
        };
        img[i].parentNode.appendChild(alt);
    }
})();

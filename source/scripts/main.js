(function () {
    var code = document.querySelectorAll('.code');
    for (var i = 0; i < code.length; i++) {
        hljs.highlightBlock(code[i]);
    }
})();

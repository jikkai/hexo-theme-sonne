(function () {
    var func = {
        init: function () {
            var figure = document.querySelectorAll('figure'),
                length = figure.length;

            this.createLangName(length, figure);
        },
        appendLangName: function (element) {
            var lang = element.className.replace(/(highlight)|\s/g, ''),
                label = document.createElement('label');

            label.innerText = lang;
            label.style.cssText = 'position: absolute;' +
                                  'top: 0;' +
                                  'left: 50%;'+
                                  'margin-left: -' + lang.length / 4 + 'em;' +
                                  'color: #2B2B2B;' +
                                  'text-transform: uppercase;' +
                                  'font-family: Courier, "Courier New", monospace;' +
                                  'line-height: 38px;';
            element.appendChild(label);
        },
        createLangName: function (length, figure) {
            for (var i = 0; i < length; i++) {
                this.appendLangName(figure[i]);
            }
        }
    };

    func.init();

})();

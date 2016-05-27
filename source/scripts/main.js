(function () {
    'use strict';

    var factory = {
        create: function (length, element) {
            for (var i = 0; i < length; i++) {
                this.append(element[i]);
            }
        }
    };

    /**
     * 代码区域编程语言名称展示
     */
    var language = {
        init: function () {
            var figure = document.querySelectorAll('figure'),
                length = figure.length;

            factory.create.bind(this)(length, figure);
        },
        append: function (element) {
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
        }
    };

    /**
     * 图片区域描述文字展示 & 大图预览
     */
    var preview = {
        init: function () {
            var img = document.querySelectorAll('img'),
                length = img.length;

            factory.create.bind(this)(length, img);
        },
        append: function (element) {
            var alt = element.alt;
            var src = element.src;

            element.addEventListener('click', function () {
                var div = document.createElement('div');
                div.style.cssText = 'position: fixed;' +
                                    'top: 0;' +
                                    'left: 0;' +
                                    'width: 100%;' +
                                    'height: 100%;' +
                                    'background: rgba(0, 0, 0, 0.8);' +
                                    'cursor: zoom-out;' +
                                    'display: flex;' +
                                    'align-items: center;' +
                                    'transition: opacity .4s;' +
                                    'animation: fadeIn .4s;';

                var fixDocumentHandler = function (e) {
                    e.preventDefault();
                };

                div.addEventListener('click', function () {
                    div.style.opacity = '0';
                    setTimeout(function () {
                        document.body.removeChild(div);
                        document.body.removeEventListener('mousewheel', fixDocumentHandler, false);
                        document.body.removeEventListener('touchmove', fixDocumentHandler, false);
                    }, 400);
                }, false);

                document.body.addEventListener('mousewheel', fixDocumentHandler, false);
                document.body.addEventListener('touchmove', fixDocumentHandler, false);

                document.body.appendChild(div);

                var img = document.createElement('img');
                img.src = src;
                img.style.cssText = 'max-width: 90%;' +
                                    'max-height: 94%;' +
                                    'margin: auto;' +
                                    'display: block;';
                div.appendChild(img);
            }, false);

            var label = document.createElement('label');
            label.innerText = alt;
            label.style.cssText = 'margin-top: 8px;' +
                                  'color: #808080;' +
                                  'font-size: 14px;' +
                                  'display: flex;' +
                                  'justify-content: center;';
            element.parentNode.appendChild(label);
        }
    };

    language.init();
    preview.init();

})();

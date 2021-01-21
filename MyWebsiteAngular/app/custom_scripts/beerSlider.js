"use strict";
/*Based on:
BeerSlider

The MIT License (MIT)

Copyright 2018 PeHaa Hetman*/
Object.defineProperty(exports, "__esModule", { value: true });
var BeerSlider = /** @class */ (function () {
    function BeerSlider(element, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.start, start = _c === void 0 ? '50' : _c, _d = _b.prefix, prefix = _d === void 0 ? 'beer' : _d;
        this.start = parseInt(start) ? Math.min(100, Math.max(0, parseInt(start))) : 50;
        this.prefix = prefix;
        if (!element || element.children.length !== 2) {
            return;
        }
        this.element = element;
        this.revealContainer = this.element.children[1];
        if (this.revealContainer.children.length < 1) {
            return;
        }
        this.revealElement = this.revealContainer.children[0];
        this.range = this.addElement('input', {
            type: 'range',
            class: this.prefix + "-range",
            'aria-label': 'Percent of revealed content',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            'aria-valuenow': this.start,
            value: this.start,
            min: '0',
            max: '100'
        });
        this.handle = this.addElement('span', {
            class: this.prefix + "-handle"
        });
        this.onImagesLoad();
    }
    BeerSlider.prototype.init = function () {
        this.element.classList.add(this.prefix + "-ready");
        this.setImgWidth();
        this.move(null);
        this.addListeners();
    };
    BeerSlider.prototype.loadingImg = function (src) {
        return new Promise(function (resolve, reject) {
            if (!src) {
                resolve();
            }
            var img = new Image();
            img.onload = function () { return resolve(); };
            img.onerror = function () { return reject(); };
            img.src = src;
        });
    };
    BeerSlider.prototype.loadedBoth = function () {
        var mainImageSrc = this.element.children[0].src || this.element.children[0].getAttribute("data-" + this.prefix + "-src");
        var revealImageSrc = this.revealElement.src || this.revealElement.getAttribute("data-" + this.prefix + "-src");
        return Promise.all([this.loadingImg(mainImageSrc), this.loadingImg(revealImageSrc)]);
    };
    BeerSlider.prototype.onImagesLoad = function () {
        var _this = this;
        if (!this.revealElement) {
            return;
        }
        this.loadedBoth().then(function () {
            _this.init();
        }, function () {
            console.error('Some errors occurred and images are not loaded.');
        });
    };
    BeerSlider.prototype.addElement = function (tag, attributes) {
        var el = document.createElement(tag);
        Object.keys(attributes).forEach(function (key) {
            el.setAttribute(key, attributes[key]);
        });
        this.element.appendChild(el);
        return el;
    };
    BeerSlider.prototype.setImgWidth = function () {
        this.revealElement.style.width = getComputedStyle(this.element)['width'];
    };
    BeerSlider.prototype.addListeners = function () {
        var _this = this;
        var eventTypes = ['input', 'change', 'mousemove'];
        eventTypes.forEach(function (i) {
            _this.range.addEventListener(i, function ($event) { _this.move($event); });
        });
        window.addEventListener('resize', function () { _this.setImgWidth(); });
    };
    BeerSlider.prototype.move = function ($event) {
        if ($event) {
            var containerWidth = this.range.clientWidth;
            var widthChange = $event.offsetX;
            var newWidth = widthChange * 100 / containerWidth;
            //snapping
            //if (newWidth < 10) {
            //    newWidth = 0;
            //}
            //
            //if (newWidth > 90) {
            //    newWidth = 100
            //}
            this.revealContainer.style.width = newWidth + "%";
            this.handle.style.left = newWidth + "%";
            this.range.setAttribute('aria-valuenow', newWidth);
        }
    };
    BeerSlider.prototype.reveal = function (direction) {
        var newWidth = 0;
        if (direction === 2) {
            newWidth = 100;
        }
        this.revealContainer.style.width = newWidth + "%";
        this.handle.style.left = newWidth + "%";
        this.range.setAttribute('aria-valuenow', newWidth);
    };
    return BeerSlider;
}());
exports.BeerSlider = BeerSlider;
//# sourceMappingURL=beerSlider.js.map
"use strict";
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_count, _state) {
        this._count = _count;
        this._state = _state;
    }
    Object.defineProperty(Like.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Like count can not be negative');
            }
            this._count = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (toggle) {
            this._state = toggle;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;

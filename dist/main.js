'use strict';

var _lib = require('./libs/lib');

var _lamemachine = require('./machines/lamemachine');

var _lamemachine2 = _interopRequireDefault(_lamemachine);

var _supersimplemachine = require('./machines/supersimplemachine');

var _supersimplemachine2 = _interopRequireDefault(_supersimplemachine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function square(n) {
    console.log("ignore :" + n);
}

console.log((0, _lib.square)(5));
var _lame = new _lamemachine2.default();
var _supersimple = new _supersimplemachine2.default();
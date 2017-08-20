'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simplemath = require('./simplemath');

Object.keys(_simplemath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simplemath[key];
    }
  });
});
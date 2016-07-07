'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getViewPort = exports.getViewPort = function getViewPort(context) {
  var viewport = 1600;
  if (context.tablet) viewport = 900;
  if (context.phone) viewport = 600;
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};
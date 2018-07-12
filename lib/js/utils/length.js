"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = length;
/**
 * Calculate the absolute difference between two numbers
 * @ignore
 * @param {number} numA
 * @param {number} numB
 * @param {number} precision
 * @return {number}
 */
function length(numA, numB, precision) {
  return Math.abs(numA - numB).toFixed(precision);
}
module.exports = exports["default"];
//# sourceMappingURL=length.js.map
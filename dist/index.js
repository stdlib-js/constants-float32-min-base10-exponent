/** @license Apache-2.0 */

'use strict';

/**
* The minimum base 10 exponent for a normal single-precision floating-point number.
*
* @module @stdlib/constants-float32-min-base10-exponent
* @type {integer32}
*
* @example
* var FLOAT32_MIN_BASE10_EXPONENT = require( '@stdlib/constants-float32-min-base10-exponent' );
* // returns -37
*/


// MAIN //

/**
* The minimum base 10 exponent for a normal single-precision floating-point number.
*
* @constant
* @type {integer32}
* @default -37
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MIN_BASE10_EXPONENT = -37|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MIN_BASE10_EXPONENT;

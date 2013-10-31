if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        var bitwise = str.split('').reverse().join('');
        var base10 = 0;

        for (var i = 0; i < bitwise.length; i++) {
            if (bitwise.charAt(i) === '1') {
                base10 = base10 + Math.pow(2, i);
            }
        }

        return base10;
    },

    convertToBinary: function(num) {
        var maxCol = 1,
            remaining = num,
            bitwise = '';

        for (var i = 0; maxCol < num; i++) {
            maxCol = Math.pow(2, i);
        }

        for (; maxCol >= 1; maxCol = maxCol / 2) {
            if (maxCol <= remaining) {
                remaining = remaining - maxCol;
                bitwise = bitwise + '1';
            } else {
                bitwise = bitwise + '0';
            }
        }

        return bitwise;
    },

    multiply: function(a, b) {

    }
  };
});

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        return (/([a-z])\1+/i).test(str);
    },

    endsWithVowel : function(str) {
        return (/[aeiou]$/i).test(str);
    },

    captureThreeNumbers : function(str) {
        var matched = str.match(/(\d){3}/);
        return matched ? matched[0] : false;
    },

    matchesPattern : function(str) {
        var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        return phonePattern.test(str);
    },
    isUSD : function(str) {
        var USDPattern = /^\$(([1-9]\d{0,2})([,]\d{3})*|[0])(\.\d{2})?$/
        return USDPattern.test(str);
    }
  };
});

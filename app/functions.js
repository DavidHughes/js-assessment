if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {
        var squareMaker = function(x) {
            return function() {
                return fn(x);
            };
        };

        var closures = [];

        for (var i = 0; i < arr.length ; i++) {
            closures.push(squareMaker(arr[i]));
        }

        return closures;
    },

    partial : function(fn, str1, str2) {
        return function(suffix) {
            return fn(str1, str2, suffix);
        };
    },

    useArguments : function() {
        var sum = 0;
        for (var i = arguments.length - 1; i >= 0; i--) {
            sum = sum +  arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return this.argsAsArray(fn, args);
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});

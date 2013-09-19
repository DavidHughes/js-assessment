if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum : function(arr) {
        var count = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            count = count + arr[i];
        }

        return count;
    },

    remove : function(arr, item) {
        while (this.indexOf(arr, item) !== -1) {
            arr.splice(this.indexOf(arr, item), 1);
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var orig = arr;

        this.remove(arr, item);

        return orig;
    },

    append : function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate : function(arr) {
        arr.pop();

        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);

        return arr;
    },

    curtail : function(arr) {
        arr.shift();

        return arr;
    },

    concat : function(arr1, arr2) {
        var joined = arr1.concat(arr2);

        return joined;
    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});

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

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

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

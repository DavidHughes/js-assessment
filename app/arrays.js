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
        var head = arr.slice(0, index);
        var tail = arr.slice(index, arr.length);

        head = this.append(head, item);
        var arrWithItem = this.concat(head, tail);

        return arrWithItem;
    },

    count : function(arr, item) {
        var record = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                record++;
            }
        }

        return record;
    },

    duplicates : function(arr) {
        var arrDuplicates = [];

        for (var i = arr.length - 1; i >= 0; i--) {
            if (this.count(arr, arr[i]) > 1 && this.indexOf(arrDuplicates, arr[i]) === -1) {
                arrDuplicates = this.append(arrDuplicates, arr[i]);
            }
        }

        return arrDuplicates;
    },

    square : function(arr) {
        var squares = arr;

        for (var i = arr.length - 1; i >= 0; i--) {
            squares[i] = arr[i] * arr[i];
        };

        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var allOccurences = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === target) {
                allOccurences = this.append(allOccurences, i);
            }
        }
        return allOccurences;
    }
  };
});

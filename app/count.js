if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;
      function next() {
        console.log(start++);
        if (start <= end) {
          timeout = setTimeout(next, 100, start, end);
        }
      }

      next();

      return {
        cancel: function() {
          if (timeout) {
            clearTimeout(timeout);
          }
        }
      };
    }
  };
});
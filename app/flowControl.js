if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      if (typeof num !== 'number') {
        return false;
      }

      var fizzbuzz = [(num % 3 === 0), (num % 5 === 0)];
      
      if (fizzbuzz[0] || fizzbuzz[1]) {
        return (fizzbuzz[0] ? 'fizz' : '') + (fizzbuzz[1] ? 'buzz' : '');
      }

      return num;
    }
  };
});

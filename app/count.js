if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var timer = setInterval(function() {
            for(var i = start; i < end; i++) {
                console.log(i);
            }
        }, 600);

        function stop() {
            clearInterval(timer);
        }
    }
  };
});
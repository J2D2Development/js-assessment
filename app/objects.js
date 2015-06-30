if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        this.name = obj.name;
        this.greeting = obj.greeting;

        obj.sayIt = function() {
            return this.greeting + ', ' + this.name + '!';
        }

        return obj.sayIt();
    },

    alterObjects : function(constructor, greeting)
    {


    },

    iterate : function(obj) {
        var arr = [];
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                arr.push(key + ': ' + obj[key]);
            };
        }
        return arr;

        //below should work, but instead it stops after first key?  used 'push to array' method above to fix problem
        // for(var o in obj) {
        //     if(obj.hasOwnProperty(o)) {
        //         return o + ': ' + obj[o];
        //     }
        // }
    }
  };
});

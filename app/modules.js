if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        this.greeting = str1;
        this.name = str2;

        this.sayIt = function() {
            return this.greeting + ', ' + this.name;
        };

        //this line tripped me up big time.  never seen a circumstance where returning 'this' is necessary, but we're 15 levels deep for the stupid testing program, so it's something good to remember.  if a module is returning 'undefined' but looks fine, try returning it at the end of the function!
        return this;
    }
  };
});


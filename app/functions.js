if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(fn, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(s) {
            return str + ', ' + s;
        }
    },

    //this works, but one of the tests is to make sure the result from funcs === result from square on each array element.  trouble with version below is that it just returns the result from each function, not the function iteslf- find a way to get it to return a
    makeClosures : function(arr, fn) {
        return arr.map(fn);
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
        var ag = Array.prototype.slice.call(arguments);
        return ag.reduce(function(x, y) {
            return x + y;
        });
    },

    callIt : function(fn) {
        var ag = Array.prototype.slice.call(arguments);
        var rest = ag.slice(1);
        return fn.apply(fn, rest);
    },

    partialUsingArguments : function(fn) {

    },

    //this is a terrible answer, as it depends on knowing how many arguments are being passed to the original fn.  tried to use array slice method to turn arguments into array and pass to fn, but couldn't figure out how to get the arguments off the passed in function (fn)
    curryIt : function(fn) {
        return function(x) {
            return function(y) {
                return function(z) {
                    return fn(x,y,z);
                }
            }
        }
    }
  };
});

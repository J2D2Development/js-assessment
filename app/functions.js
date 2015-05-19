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

    makeClosures : function(arr, fn) {
        return arr.forEach(fn(n));
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

    curryIt : function(fn) {

    }
  };
});

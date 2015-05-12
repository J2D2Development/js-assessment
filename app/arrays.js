if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(x,y) {
            return x + y;
        });
    },

    remove : function(arr, item) {

    },

    removeWithoutCopy : function(arr, item) {

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
        arr.shift(item);
        return arr;
    },

    curtail : function(arr) {
        return arr.slice(1);
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
        return arr.map(function(x) {
            return x * x;
        });
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});

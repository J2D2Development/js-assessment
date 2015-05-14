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
        for(var i = 0, l = arr.length; i < l; i+=1) {
            if(arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        arr.forEach(function(x) {
            if(arr[x] === item) {
                arr.splice(x, 1);
            }
        });
        return arr;
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
        return arr.slice(1);
    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(x) {
            if(x === item) {
                count += 1;
            }
        });
        return count;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        return arr.map(function(x) {
            return x * x;
        });
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        for(var i = 0, l = arr.length; i < l; i += 1) {
            if(arr[i] === target) {
                result.push(i);
            }
        }
        return result;
    }
  };
});

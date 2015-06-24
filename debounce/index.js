module.exports = function(fn, millisec) {
  var times = 1;
  var id;
  var that;
  var arg;

  return function() {
    that = this;
    arg = Array.prototype.slice.call(arguments);
    if (!id) {
      id = setTimeout(function() {
        id = undefined;
        fn.apply(that, arg);
      }, millisec);
    }
  }
}

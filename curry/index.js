module.exports = function(fn) {
  return function generate(fn, left_argc, args) {
    if (!left_argc) {
      return fn.apply(this, args);
    }
    return function() {
      return generate(function(){
        return fn.apply(this, args.concat([].slice.call(arguments)));
      },left_argc-arguments.length, [].slice.call(arguments));
    }
  }(fn, fn.length, []);
}

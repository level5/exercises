module.exports = function(fn) {

	var called = {};

	return function() {
		var args = [].slice.call(arguments);
		var key = args.reduce(function(c, val){
			return c + "|" + val; 
		});
		if (!(key in called)) {
			called[key] = fn.apply(null, args);
		}
		return called[key];
	}
}
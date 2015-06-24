module.exports = function(fn, ctx) {
	var called, result;

	return function(){
		if (!called) {
			called = true;
			result = fn.apply(ctx || this, [].slice.call(arguments));
		}
		return result;
	}
}
module.exports = function(fn, ms) {

	var id, call;

	return function throttle() {
		if (!id) {
			id = setTimeout(function(){
				id = null;
				if (call) {
					var arg = call;
					call = null;
					throttle.apply(this, arg);
				}
			}, ms);
			fn.apply(this, [].slice.call(arguments));
		} else {
			call = [].slice.call(arguments);
		}
	}
}
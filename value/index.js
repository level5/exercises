module.exports = function(fn) {
	return function(func) {
		 if (func instanceof Function) {
		 	return arguments.callee(func())
		 } else {
		 	return func;
		 }
	}(fn);
}
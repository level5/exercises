module.exports = function() {

	var funcArr = [];
	var self = {};

	this.use = function(fn) {
		funcArr.push(fn);
	}

	this.go = function(fn) {

		function next() {
			if (!funcArr.length) {
				fn.call(self);
			} else {
				var func = funcArr.shift();
				func.call(self, next);
			}
		}
		next();
	}
}
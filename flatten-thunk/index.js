module.exports = function (func) {
	return function (fn) {
		function bc(err, data) {
			if (err || !(data instanceof Function)) {
				fn(err, data);
			} else {
				data(bc);
			}
		}
		func(bc);		
	}
}
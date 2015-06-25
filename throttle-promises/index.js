module.exports = function(limit, array) {

	var promises = [];
	var finished;

	return new Promise(function(f, r){

		var running = array.splice(0, limit);
		if (running.length == 0) {
			f([]);
		} else {
			running.forEach(function(fn){
				addPromise(fn);
			});
		}

		function addPromise(fn) {
			var p = fn();
			promises.push(p);
			p.then(function(r){
				if (array.length) {
					addPromise(array.pop());
				} else if (!finished) {
					finished = true;
					Promise.all(promises).then(function(rs){
						f(rs);
					});
				}
			});
		}
	});
}
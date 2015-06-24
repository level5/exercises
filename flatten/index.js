module.exports = function(arrs) {

	function forEach(val, collection) {
		if (val instanceof Array) {
			val.forEach(function(v){
				forEach(v, collection);
			});
		} else {
			collection.push(val);
		}
	}
	
	var collection = []
	forEach(arrs, collection);
	return collection;
}
module.exports = function(arr, func, ctx) {
	var result = [];
	for(var i = 0; i < arr.length; i++) {
		result.push(func.call(ctx, arr[i], i, arr));
	}
	return result;
}
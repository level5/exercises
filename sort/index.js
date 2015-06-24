module.exports = function (arr)
{
	buildMaxHeap(arr);

	for (var i = arr.length - 1; i > 0; i--)
	{
		var tmp = arr[i];
		arr[i] = arr[0];
		arr[0] = tmp;

		maxHeapify(arr, 0, i);
	}

	return arr;
};

function maxHeapify(arr, i, size)
{
	var l = 2*(i + 1) - 1;
	var r = 2*(i + 1);

	var lagest = i;
	if (l + 1 <= size && arr[lagest] < arr[l])
	{
		lagest = l;
	}
	if (r + 1 <= size && arr[lagest] < arr[r])
	{
		lagest = r;
	}

	if (lagest != i) 
	{
		var tmp = arr[lagest];
		arr[lagest] = arr[i];
		arr[i] = tmp;

		maxHeapify(arr, lagest, size);
	}
}

function buildMaxHeap (arr)
{
	var lastNode = parseInt(arr.length/2) - 1;

	for (var i = lastNode; i >= 0; i--)
	{
		maxHeapify(arr, i, arr.length);
	}
}
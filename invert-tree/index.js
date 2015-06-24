module.exports = function invert(root) {

	var tmp = root.left;
	if (root.right) {
		root.left = root.right;
	} else {
		delete root.left;
	}

	if (tmp) {
		root.right = tmp;
	} else {
		delete root.right;
	}

	if (root.left) {
		invert(root.left);
	}
	if (root.right) {
		invert(root.right);
	}
}
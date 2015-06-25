function itWill(fun){
	var opt = fun();

	it(opt.desc, function(){

		var flag = false;

		runs(function() {
			opt.setup(function(){
				flag = true;
			});
		});

		waitsFor(function(){
			return flag;
		}, 750);

		runs(opt.test);
	});
}

module.exports = itWill;
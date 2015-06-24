exports.sequence = function(array) {

    return function(func) {
        function bc(err, data) {
            if (err || !array.length) {
                func(err, data);
            } else {
                var fn = array.shift();
                fn(bc, data);
            }
        }
        bc(null, "");
    }
}

exports.parallel =  function (array) {

    return function(func) {
        
        var result = [], error = [];
        
        function bc(err, data) {
            result.push(data);
            error.push(error);
            if (array.length == result.length) {
                func(error, result);
            } 
        }

        array.forEach(function(fn){
            fn(bc);
        });
    }
}

exports.race = function(array) {

    return function(func) {
        
        var finished;

        function bc(err, data) {
            if (!finished) {
                finished = true;
                func(err, data);
            }
        }

        array.forEach(function(fn){
            fn(bc);
        });
    }
}

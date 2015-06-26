module.exports = function(opt, func) {
  // 用 t(-)来代替字符之间的三个时间
  var now = opt.message.split(' ').reduce(function(cur_ms, word){
    var now = word.split('').join('t').split('').reduce(function(cur_ms, char){
      var now = opt.codes[char].split('').join('.').split('').reduce(function(cur_ms, morse){
        opt.timeouter(opt.toggle, cur_ms);
        return cur_ms + (morse == '.' ? 1 : 3);
      }, cur_ms);
      return now;
    }, cur_ms);
    opt.timeouter(opt.toggle, now);
    return now + 7;
  }, 0);
  opt.timeouter(func, now-7);
}

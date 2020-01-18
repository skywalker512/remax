var elements = {};
module.exports = {
  v: function(value) {
    return value !== undefined ? value : '';
  },
  tid: function (type, ancestor) {
    var items = ancestor.split(',');
    var depth = 1;

    for (var i = 0; i < items.length; i++) {
      if (type === items[i]) {
        depth = depth + 1;
      }
    }

    var id = 'REMAX_TPL_' + depth + '_' + type;
    return id;
  }
};

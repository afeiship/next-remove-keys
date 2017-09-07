(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.treeMap = function(inItems,inMap){
    var result = [];
    var map = inMap || {
      label: 'label',
      value: 'value',
      children: 'children'
    };

    nx.map( inItems, function(index, item) {
      var newItem = {};
      var children = item[ map.children ];
      newItem.label = item [map.label];
      newItem.value = item [map.value];
      result.push(newItem);
      if( children && children.length>0 ){
        newItem.children = nx.treeMap( children , map);
      }
    });

    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.treeMap;
  }

}());

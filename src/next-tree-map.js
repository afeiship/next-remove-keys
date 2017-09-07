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
      newItem.label = item [map.label];
      newItem.value = item [map.value];
      newItem.children = item [map.children];
      result.push(newItem);
      if( item[ map.children ]){
        newItem.children = nx.treeMap( item[ map.children ] );
      }
    });

    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.treeMap;
  }

}());

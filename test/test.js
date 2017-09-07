var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-tree-map');

describe('next-treemap', function () {


  var items = require('./test.json');

  it('nx.treeMap', function () {
    var rs = nx.treeMap( items,{
      label:'HYMC',
      value:'HY_DM',
      children:'children'
    });

    console.log(rs);
  });

});

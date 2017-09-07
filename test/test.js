var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-tree-map');

describe('next-treemap', function () {


  var items = require('./test.json');

  it('nx.treeMap - big data', function () {
    var rs = nx.treeMap( items,{
      label:'HYMC',
      value:'HY_DM',
      children:'children'
    });

    // console.log(rs);
  });


  it('nx.treeMap - simple', function () {
    var data = [{
      key: 'zhejiang',
      name: 'Zhejiang',
      child: [{
        key: 'hangzhou',
        name: 'Hangzhou',
        child: [{
          key: 'xihu',
          name: 'West Lake',
        }],
      }],
    }, {
      key: 'jiangsu',
      name: 'Jiangsu',
      child: [{
        key: 'nanjing',
        name: 'Nanjing',
        child: [{
          key: 'zhonghuamen',
          name: 'Zhong Hua Men',
        }],
      }],
    }];
    var rs = nx.treeMap( data,{
      label:'name',
      value:'key',
      children:'child'
    });

    assert.deepEqual(rs[0].children,[{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }] );
  });

});

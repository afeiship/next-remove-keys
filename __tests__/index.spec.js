require('../src');

describe('nx.removeKeys', () => {
  test('01/single object', function () {
    const obj = {
      college: 'Carnegie Mellon University',
      can_exchange_credit: false,
      is_editing: false
    };

    nx.removeKeys(obj, {
      keys: ['is_editing']
    });

    expect(obj).toEqual({
      college: 'Carnegie Mellon University',
      can_exchange_credit: false
    });
  });

  test('02/dot/normal keys in objects', function () {
    const obj = {
      name: 'John Doe',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      },
      phone: {
        home: '555-555-1234',
        work: '555-555-5678'
      }
    };

    nx.removeKeys(obj, {
      keys: ['address.zip', 'work']
    });

    expect(obj).toEqual({
      name: 'John Doe',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
      },
      phone: {
        home: '555-555-1234'
      }
    });
  });

  test('03/array of objects', function () {
    var arr1 = [
      {
        college: 'Carnegie Mellon University',
        can_exchange_credit: false,
        is_editing: false
      },
      {
        college: 'Stanford University',
        can_exchange_credit: true,
        is_editing: true
      }
    ];

    nx.removeKeys(arr1, {
      keys: ['is_editing']
    });

    expect(arr1).toEqual([
      {
        college: 'Carnegie Mellon University',
        can_exchange_credit: false
      },
      {
        college: 'Stanford University',
        can_exchange_credit: true
      }
    ]);
  });

  test('04/none object should not be modified', function () {
    const arr2 = [1, 2, 3];
    const v1 = 1;
    const v2 = 'hello';
    const v3 = true;
    const v4 = null;
    const v5 = undefined;
    nx.removeKeys(arr2, { keys: ['is_editing'] });
    expect(arr2).toEqual([1, 2, 3]);

    nx.removeKeys(v1, { keys: ['is_editing'] });
    expect(v1).toEqual(1);
    nx.removeKeys(v2, { keys: ['is_editing'] });
    expect(v2).toEqual('hello');

    nx.removeKeys(v3, { keys: ['is_editing'] });
    expect(v3).toEqual(true);

    nx.removeKeys(v4, { keys: ['is_editing'] });
    expect(v4).toEqual(null);

    nx.removeKeys(v5, { keys: ['is_editing'] });
    expect(v5).toEqual(undefined);
  })
});

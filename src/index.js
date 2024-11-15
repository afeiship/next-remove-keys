import nx from '@jswork/next';
import '@jswork/next-deep-each';

const defaults = { keys: [] };
const isObject = (inTarget) => typeof inTarget === 'object' && inTarget!== null;

nx.removeKeys = function (inTarget, inOptions) {
  if (!isObject(inTarget)) return inTarget;

  var options = nx.mix(null, defaults, inOptions);
  var itHasDot = (key) => key.includes('.') === true;
  var normalKeys = options.keys.filter((key) => !itHasDot(key));
  var dotKeys = options.keys.filter(itHasDot);

  // delete normal keys.
  nx.deepEach(inTarget, function (key, _, target) {
    if (normalKeys.includes(key)) delete target[key];
  });

  // delete dot keys.
  dotKeys.forEach(function (key) {
    nx.del(inTarget, key);
  });
  
  return inTarget;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.removeKeys;
}

export default nx.removeKeys;

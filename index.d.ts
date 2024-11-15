interface NxRemoveKeysOptions {
  keys: string[];
}

interface NxStatic {
  removeKeys: (target: any, options?: NxRemoveKeysOptions) => any;
}

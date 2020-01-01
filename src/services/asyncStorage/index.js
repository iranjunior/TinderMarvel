import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';

const normalizeKey = key => {
  String(key)
    .trim()
    .toLocaleUpperCase()
    .padStart(1, '@')
    .replace(/[^a-zA-Z0-9]/g, '_');
};

const get = async key => {
  try {
    normalizeKey(key);
    const value = await AsyncStorage.getItem(key);

    return JSON.parse(value);
  } catch (error) {
    return undefined;
  }
};
const set = async (key, value) => {
  try {
    normalizeKey(key);

    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};
const remove = async key => {
  try {
    normalizeKey(key);

    await AsyncStorage.removeItem(key);
  } catch (error) {}
};
const merge = async (key, value) => {
  try {
    normalizeKey(key);
    const result = await AsyncStorage.mergeItem(key, JSON.stringify(value));

    return JSON.parse(result);
  } catch (error) {
    return undefined;
  }
};
const getAll = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    return result.map(data => JSON.parse(data));
  } catch (error) {
    return undefined;
  }
};
const multiGet = async keys => {
  try {
    const normalizedKeys = keys.map(key => normalizeKey(key));
    let results = await AsyncStorage.multiGet(normalizedKeys);
    return results.filter((result, index) => {
      if (index % 2 === 1) {
        return JSON.parse(result);
      }
    });
  } catch (error) {
    return [];
  }
};

const multiSet = async (keys, values) => {
  try {
    const normalizedKeys = keys.map(key => normalizeKey(key));
    const valueString = values.map(value => JSON.stringify(value));
    let sets = [];
    for (let index = 0; index < normalizedKeys.length; index++) {
      sets.push([normalizeKey[index], valueString[index]]);
    }
    normalizedKeys.forEach((element, index) => {
      sets.push([element, valueString[index]]);
    });

    await AsyncStorage.multiSet(sets);
  } catch (error) {}
};

const multiRemove = async keys => {
  try {
    const normalizedKeys = keys.map(key => normalizeKey(key));

    await AsyncStorage.multiRemove(normalizedKeys);
  } catch (error) {}
};
const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

const model = async key => {
  normalizeKey(key);
  const methods = useAsyncStorage(key);

  return {
    get: () => methods.getItem,
    set: value => methods.setItem(JSON.stringify(value)),
    merge: value => methods.mergeItem(JSON.stringify(value)),
    remove: () => methods.removeItem,
  };
};
export default {
  get,
  set,
  remove,
  merge,
  getAll,
  multiGet,
  multiSet,
  multiRemove,
  clear,
  model,
};

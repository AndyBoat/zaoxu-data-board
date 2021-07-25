/**
 * @typedef {Object} Record
 * @property {string} species
 * @property {string} type
 * @property {string} subtype
 * @property {string} gene
 * @property {string} article
 * @property {string} method
 * */

/**@param {Record[]} recordList */
const parseRecord = (recordList) => {
  /**@type {{[key:string]:Set<string>}} */
  const keyValueMap = {};
  for (const record of recordList) {
    for (const key in record) {
      keyValueMap[key] = keyValueMap[key] || new Set();
      keyValueMap[key].add(record[key]);
    }
  }

  for (const key in keyValueMap) {
    keyValueMap[key] = [...keyValueMap[key]];
  }

  return keyValueMap;
};

export { parseRecord };

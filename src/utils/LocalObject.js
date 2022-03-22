export default class LocalObject {
  #id;

  constructor(id) {
    this.#id = id;
  }

  get(key) {
    const str = localStorage.getItem(this.#id+'#'+key);
    return str ? JSON.parse(str) : null;
  }

  set(key, value) {
    if (!key || !value) return;
    localStorage.setItem(this.#id+'#'+key, JSON.stringify(value));
  }

  getGroup(group) {
    const keys = this.get(group);
    if (!keys) return null;
    const acc = {};
    keys.forEach(key => acc[key] = this.get(group+'@'+key));
    return acc;
  }

  setGroup(group, key, value) {
    const keys = this.get(group) || [];
    keys.push(key);
    this.set(group+'@'+key, value);
    this.set(group, keys);
  }

  pick(key) {
    const result = this.get(key);
    this.remove(key);
    return result;
  }

  remove(key) {
    localStorage.removeItem(this.#id+'#'+key);
  }
}

export const getLocalObject = (() => {
  const map = {};
  return id => map[id] || (map[id] = new LocalObject(id));
})();

import { LinkedList } from "./linkedList.js";

class HashMap {
  #loadFactor = 0.75;
  _capacity = 16;
  _buckets;

  constructor(loadFactor = this.#loadFactor) {
    this.#loadFactor = loadFactor;
    this._buckets = new Array(this._capacity);
  }

  get buckets() {
    return this._buckets;
  }

  get capacity() {
    return this._capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this._capacity;
    }

    return hashCode;
  }
  set(key, value) {
    const chosenBucket = this.hash(key);
    if (!this._buckets[chosenBucket]) {
      let newList = new LinkedList();
      newList.append(key);
      const keyNode = newList.head;
      keyNode.value = value;
      this._buckets[chosenBucket] = newList;
      this.growthMethod();
    } else if (this.has(key)) {
      const keyIndex = this._buckets[chosenBucket].find(key);
      const keyNode = this._buckets[chosenBucket].at(keyIndex);
      keyNode.value = value;
    } else {
      this._buckets[chosenBucket].append(key);
      const keyNode = this._buckets[chosenBucket].tail;
      keyNode.value = value;
      this.growthMethod();
    }
  }
  growthMethod() {
    if (this.length() > this._capacity * this.#loadFactor) {
      this._capacity *= 2;
      const keyArray = this.keys();
      const valuesArray = this.values();
      this._buckets = new Array(this._capacity);
      for (let i = 0; i < keyArray.length; i++) {
        this.set(keyArray[i], valuesArray[i]);
      }
    }
  }
  get(key) {
    if (this.has(key)) {
      const chosenBucket = this.hash(key);
      const keyIndex = this._buckets[chosenBucket].find(key);
      const keyNode = this._buckets[chosenBucket].at(keyIndex);
      return keyNode.value;
    } else {
      return null;
    }
  }
  has(key) {
    const chosenBucket = this.hash(key);
    if (this.buckets[chosenBucket]) {
      return this.buckets[chosenBucket].contains(key);
    }
    return false;
  }
  remove(key) {
    if (this.has(key)) {
      const chosenBucket = this.hash(key);
      const keyIndex = this._buckets[chosenBucket].find(key);
      this._buckets[chosenBucket].removeAt(keyIndex);
      return true;
    } else {
      return false;
    }
  }
  length() {
    let numberOfKeys = 0;
    this._buckets.forEach((bucket) => {
      if (bucket) {
        numberOfKeys += bucket.size;
      }
    });
    return numberOfKeys;
  }
  clear() {
    this._buckets = new Array(this._capacity);
  }
  keys() {
    const keyArray = [];
    this._buckets.forEach((bucket) => {
      if (bucket) {
        for (let i = 0; i < bucket.size; i++) {
          const keyNode = bucket.at(i);
          keyArray.push(keyNode.key);
        }
      }
    });
    return keyArray;
  }
  values() {
    const valueArray = [];
    this._buckets.forEach((bucket) => {
      if (bucket) {
        for (let i = 0; i < bucket.size; i++) {
          const keyNode = bucket.at(i);
          valueArray.push(keyNode.value);
        }
      }
    });
    return valueArray;
  }
  entries() {
    const keyValueArray = [];
    const keyArray = this.keys();
    const valueArray = this.values();
    for (let i = 0; i < keyArray.length; i++) {
      keyValueArray.push(`[${keyArray[i]}, ${valueArray[i]}]`);
    }
    return keyValueArray;
  }
}

export { HashMap };

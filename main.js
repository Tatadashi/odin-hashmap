import { LinkedList } from "./linkedList.js";

class HashMap {
    #loadFactor = 0.75;
    #capacity = 16;
    _buckets;

    constructor (buckets = this.#capacity) {
        this.#capacity = buckets;
        this._buckets = new Array(this.#capacity);
    }

    get buckets() {
        return this._buckets;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
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
        } else if (this.has(key)) {
            const keyIndex = this._buckets[chosenBucket].find(key);
            const keyNode = this._buckets[chosenBucket].at(keyIndex);
            keyNode.value = value; 
        } else {
             this._buckets[chosenBucket].append(key);
             const keyNode = this._buckets[chosenBucket].tail;
             keyNode.value = value; 
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
}

const hor = new HashMap();
hor.set("jake", "lame");
hor.set("a", "shame");
console.log(hor.get("a"));
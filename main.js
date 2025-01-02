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
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode %= 16;
        }

        return hashCode;
    }
    set(key, value) {

    }
}

const hor = new HashMap();
console.log(hor.buckets);
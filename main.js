import { LinkedList } from "./linkedList.js";

class HashMap {
    #loadFactor = 0.75;
    #capacity = 16;
}

function hash(key) {
let hashCode = 0;
    
const primeNumber = 31;
for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
    hashCode %= 16;
}

return hashCode;
} 

console.log(hash("dasfajfdsjfenfasdfn"));
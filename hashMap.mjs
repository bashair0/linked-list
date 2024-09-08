import LinkedList from './linkedList.mjs'

export default class HashMap {
  constructor () {
    this.bucket = []
    this.capacity = 16
  }

  hash (key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
    }
    return hashCode
  }

  set (key, value) {
    let index = this.hash(key)
    if (this.bucket[index] === undefined) {
      let node = new LinkedList()
      node.prepend({ key, value })
      this.bucket[index] = node
    } else {
      if (this.bucket[index].contains(key)) {
        this.bucket[index].replace(key, value)
      } else {
        this.bucket[index].append({ key, value })
      }
    }
  }
}

const test = new HashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

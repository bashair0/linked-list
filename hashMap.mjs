import LinkedList from './linkedList.mjs'

export default class HashMap {
  constructor () {
    this.bucket = []
    this.capacity = 16
    this.size = 0
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
      this.size++
    } else {
      if (this.bucket[index].contains(key)) {
        this.bucket[index].replace(key, value)
      } else {
        this.bucket[index].append({ key, value })
        this.size++
      }
    }
  }

  get (key) {
    let index = this.hash(key)
    let node = this.bucket[index]
    if (node.get(key) === undefined) return null
    return node.get(key)
  }

  has (key) {
    let index = this.hash(key)
    let node = this.bucket[index]
    return node.contains(key)
  }

  remove (key) {
    if (this.has(key)) {
      let index = this.hash(key)
      let node = this.bucket[index]
      node.removeAt(node.find(key))
      this.size--
      return true
    }
    return false
  }

  length () {
    return this.size
  }

  clear () {
    this.bucket = []
    this.capacity = 16
    this.size = 0
  }

  getData (str) {
    let array = []
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i]) {
        let current = this.bucket[i].head
        while (current !== null) {
          array.push(current.data[str])
          current = current.next
        }
      }
    }
    return array
  }

  keys () {
    return this.getData('key')
  }

  values () {
    return this.getData('value')
  }

  entries () {
    let keysArray = [...this.keys()]
    let valuesArray = [...this.values()]
    let array = []
    for (let i = 0; i < keysArray.length; i++) {
      array.push([keysArray[i], valuesArray[i]])
    }
    return array
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

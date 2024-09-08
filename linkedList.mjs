import Node from './node.mjs'

export default class LinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  prepend (value) {
    let node = new Node(value)
    let temp
    if (this.head !== null) {
      temp = this.head
      this.head = node
      node.next = temp
    } else {
      this.head = node
    }
    this.size++
  }

  append (value) {
    let node = new Node(value)
    if (this.head === null) this.head = node
    else {
      let temp = this.head
      while (temp.next !== null) temp = temp.next
      temp.next = node
    }
    this.size++
  }

  getSize () {
    return this.size
  }

  getHead () {
    let msg
    if (this.head === null) msg = 'List is empty'
    else {
      msg = `Head is : ${this.head.data.key} - ${this.head.data.value}`
    }
    return msg
  }

  getTail () {
    let temp = this.head
    if (this.head === null) return null
    else {
      while (temp !== null) {
        temp = temp.next
        if (temp.next === null) return temp.data.key
      }
    }
  }

  at (index) {
    let temp = this.head
    let i = 0
    let element
    if (this.head === null) return null
    else {
      while (temp !== null) {
        i++
        element = temp.data
        if (i === index) return element
        temp = temp.next
        if (temp === null) return null
      }
    }
  }

  toString () {
    let msg = ''
    let temp = this.head
    while (temp !== null) {
      msg += `(key: ${temp.data.key} - value: ${temp.data.value}) -> `
      temp = temp.next
    }
    return (msg += null)
  }

  pop () {
    let current = this.head
    let prev = null
    if (this.head === null) return null
    while (current !== null) {
      if (current.next === null) {
        prev.next = null
      }
      prev = current
      current = current.next
    }
  }

  contains (value) {
    let temp = this.head
    if (this.head === null) return null
    else {
      while (temp !== null) {
        let data = temp.data.key
        if (data === value) return true
        temp = temp.next
      }
    }
    return false
  }

  replace (key, value) {
    let temp = this.head
    while (temp !== null) {
      if (temp.data.key === key) {
        temp.data.value = value
      }
      temp = temp.next
    }
  }

  find (value) {
    let temp = this.head
    let i = 0
    if (this.head === null) return
    else {
      while (temp !== null) {
        i++
        let data = temp.data.key
        if (data === value) return i
        temp = temp.next
      }
    }
    return null
  }

  insertAt (value, index) {
    let node = new Node(value)
    let current = this.head
    let prev = null
    let i = 0
    if (index === 1 || this.head === null) {
      prev = this.head
      this.head = node
      node.next = prev
    } else {
      while (current !== null) {
        i++
        if (i + 1 === index) {
          prev = current.next
          current.next = node
          node.next = prev
          this.size++
        }
        current = current.next
      }
    }
  }

  removeAt (index) {
    let current = this.head
    let prev = null
    let i = 0
    if (this.head === null) return null
    if (index === 1) {
      this.head = this.head.next
      return
    }
    while (current !== null && i + 1 !== index) {
      i++
      prev = current
      current = current.next
    }
    if (current === null) return
    prev.next = current.next
  }
}

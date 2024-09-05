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
      msg = `Head is : ${this.head.data}`
    }
    return msg
  }

  getTail () {
    let temp = this.head
    if (this.head === null) return null
    else {
      while (temp !== null) {
        temp = temp.next
        if (temp.next === null) return temp.data
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
}

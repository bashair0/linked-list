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
}

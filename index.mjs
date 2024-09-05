import LinkedList from './linkedList.mjs'

const list = new LinkedList()
list.append('dog')
list.append('cat')
list.prepend('parrot')
list.append('hamster')
list.append('snake')
list.append('turtle')
console.log(list.getSize())

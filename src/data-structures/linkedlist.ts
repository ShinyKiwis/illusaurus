class LinkedListNode {
  value: number;
  next: LinkedListNode | null;
  constructor(value: number) { 
    this.value = value
    this.next = null
  }
}

export default class LinkedList { 
  head: LinkedListNode | null;
  length: number;
  tail: LinkedListNode | null;

  constructor() {
    this.head = this.tail = null
    this.length = 0
    this.values = []
  }

  insert(value: number, idx: number): void { 
    const newNode = new LinkedListNode(value)
    if(this.head == null) {
      this.head = newNode
      this.tail = newNode
    } else {
      switch(idx) {
        case 0:
          newNode.next = this.head
          this.head = newNode
          break
        case this.length:
          this.tail!.next = newNode
          this.tail = newNode
          break
        default:
          let temp: LinkedListNode | null = this.head
          for(let i =0;i<idx-1 && idx < this.length;i++) {
            temp = temp!.next
          }
          newNode.next = temp!.next
          temp!.next = newNode
        break
      }
    }
    this.length += 1
  }

  getValues() {
    const values = []
    let temp = this.head
    while(temp!==null ) {
      values.push(temp.value)
      temp = temp.next
    }
    return values
  }

  delete(value: number) {

  }

  generate(numberOfNodes: number) {

  }

  clearList() {

  }

  search(value: number) {

  }

  debug() {
    let temp = this.head
    let values = []
    while(temp!=null) {
      values.push(temp.value)
      temp = temp.next
    }
    console.log(values)
  }
}

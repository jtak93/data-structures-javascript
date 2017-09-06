export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(val) {
    var node = new Node(val);
    var currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;
        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
  }

  shift() {
    // removes first node
    this.head = this.head.next
    this._length--
  }

  pop() {
    // removes last node
    // go to second to last list node and remove the last node
    var currentNode = this.head;
    while(currentNode.next.next) {
      currentNode = currentNode.next
    }
    currentNode.next = null;
    this._length--
  }

  findNodeAt(index) {
    // zero based finder
    var currentNode = this.head;
    var length = this._length;
    var count = 0;
    var message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid index
    if (length === 0 || index < 0 || index > length - 1) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid index
    while (count < index) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
  }

  remove(index) {
    var currentNode = this.head;
    var length = this._length;
    var count = 0;
    var message = {failure: 'Failure: non-existent node in this list.'};
    var beforeNodeToDelete = null;
    var nodeToDelete = null;
    var deletedNode = null;

    // 1st use-case: an invalid index
    if (index < 0 || index >= length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (index === 0) {
        deletedNode = this.head
        this.head = this.head.next
        this._length--
        return deletedNode
    }

    // 3rd use-case: any other node is removed
    while (count < index) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
  }
}

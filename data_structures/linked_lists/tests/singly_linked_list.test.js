import { SinglyLinkedList, Node } from '../singly_linked_list'
describe('singly linked list', () => {
  var node = new Node(1);
  var list = new SinglyLinkedList();

  test('create new SLL', () => {
    var emptySLL = {
      _length: 0,
      head: null,
    }
    expect(new SinglyLinkedList()).toMatchObject(emptySLL);
  });

  test('add method for empty list', () => {
    var expectedNode = {
      val: 1,
      next: null,
    }
    var expectedList = {
      _length: 1,
      head: node
    }
    expect(list.add(1)).toMatchObject(expectedNode);
    expect(list).toMatchObject(expectedList);
  });

  test('add method for non empty list', () => {
    var expectedNode = {
      val: 2,
      next: null,
    }
    var expectedList = {
      _length: 2,
      head: {
        val:1,
        next: {
          val: 2,
          next: null
        }
      }
    }
    expect(list.add(2)).toMatchObject(expectedNode);
    expect(list).toMatchObject(expectedList);
  })
})

// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;
        // this.tail.value = null;
        const oldTail = this.tail;
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let currNode = this.head

          while (currNode.next !== this.tail) {
            currNode = currNode.next
          }
          currNode.next = null;
          this.tail = currNode
        }
        this.length--;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
      let newNode = new Node(val);

      if(!this.length){
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
      }

      this.length++;
      return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;

        const removedHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = removedHead.next;
            this.head = newHead;
        }

        this.length--;
        return removedHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let curr = this.head;

        while (curr) {
            if (target === curr.value) {
                curr = null;
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let curr = this.head;
        let count = 0;

        while (curr) {
            if (count === index) {
                return curr;
            }
            count++;
            curr = curr.next;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        // add value at index; previous node next -> val next -> following node
        if (index < 0 || index > this.length - 1) return false;

        const updatedVal = this.get(index);
        updatedVal.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.addToHead(val);
            return true
        } else if (index === this.length) {
            this.addToTail(val);
            return true;
        }

        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();

        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;

        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

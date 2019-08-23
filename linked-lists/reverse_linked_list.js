/*
Input:
Linked List (head)

Ouput:
Linked List reversed

Mental Model - Linked List - Previous/Current/Next

1. if (!head) return head;
2. set previous = null;
3. set current = head
4. set next = current.next
5. loop while next
6. current.next = previous
7. previous = current
8. next.next = current
9. current = next
10. next = current.next
11. return head

*/

var reverseList = function(head) {
  if (!head) return head;
  let previous = null;
  let current = head;
  let next = current.next;

  while (current) {
    current.next = previous;
    previous = current;
    current = next;
    next = next && next.next;
  }

  return previous;
};

/*
Input:
Linked list (head)
Target Value to remove

Output:
Linked list with Target removed

Mental Model - Linked List - Previous/Current

1. if (!head) return null
2. set current to head
3. set previous;                - use next instead of previous?
3. loop while current is valid
5. if current.val === target
  if current equals head
    head equals current.next
  else
    previous.next = current.next
6. previous = current
7. current = current.next
*/

// Using previous

var removeElements = function(head, val) {
  let current = head;
  let previous;

  while (current) {
    if (current === head && current.val === val) {
      head = current.next;
      current = head;
      continue;
    }

    if (current.val === val) {
      previous.next = current.next;
      current = current.next;
      continue;
    }

    previous = current;
    current = previous.next;
  }

  return head;
};

/*
Input:
Sorted Linked List (head)

Output:
Linked List with duplicates removed.

Mental Model: Linked List - Current/Next

1. if (!head) return head
2. set current = head
3. set next = current.next
4. loop while next is valid
5. if current.val === next.val
  current.next = next.next
  next = next.next
6. else
  current = next
  next = next.next

return head
*/

var deleteDuplicates = function(head) {
  if (!head) return head;
  let current = head;
  let next = current.next;

  while (next) {
    if (current.val === next.val) {
      current.next = next.next;
      next = next.next;
    } else {
      current = next;
      next = next.next;
    }
  }

  return head;
};

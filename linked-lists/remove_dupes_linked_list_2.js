/*
Input:
Linked List

Output:
Linked List with ALL nodes that had a
duplicate value removed.

Mental Model - Linked List - Previous/Current/Next - Slide

toDelete = false



Set dummy to new ListNode(0)
dummy.next = head
previous = dummy
set current = head
set next = current.next
Loop while next
if current === next
  toDelete = true
else if toDelete
  previous.next = next
  toDelete = false
else
  previous = previous.next

current = current.next
next = next.next

return dummy.next

         P
NULL 1 > 2 > 3 > 3 > 4 > 4 > 5
             C
                 N

*/

var deleteDuplicates = function(head) {
  if (!head) return head;
  let dummy = new ListNode(null);
  dummy.next = head;
  let previous = dummy;
  let current = head;
  let next = current.next;

  while (next) {
    if (current.val === next.val) {
      while (next && current.val === next.val) {
        current = next;
        next = next.next;
      }

      current = next;
      next = next && next.next;
      previous.next = current;
    } else {
      previous = current;
      current = next;
      next = next.next;
    }
  }

  return dummy.next;
};

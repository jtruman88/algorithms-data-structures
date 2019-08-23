/*
Input:
linked List
start position
end position

Output:
linked list, with section from start to end reversed

Mental Model - Linked List - Previous/Current/Next



1. check if head is valid, return if not
2. set pos = 1;
3. set previous = null
4. set current = head
5. set next = current.next
6. set beforeReverse;
7. set beginReverse;
6. loop while current
7. Once current reaches the position to begin reversing, set reference to beforeReverse (previous) and
   set reference to beginReverse (current), move previous to current, current to next, next to next.next, pos += 1
    begin Loop while pos <= n
      current.next = previous
      previous = current
      current = next
      next = next.next
    After Loop
      set beforeReverse.next = Previous
      beginReverse.next = current
8. else
  previous = current
  current = next
  next = next.next
  pos += 1



  m = 1
  n = 2
  beforeReverse = NULL
  beginReverse = 3
  pos = 3

         P
             C
NULL 3 < 5 > NULL
             N
*/

var reverseBetween = function(head, m, n) {
  if (!head || m === n) return head;
  let pos = 1;
  let previous = null;
  let current = head;
  let next = current.next;
  let beforeReverse;
  let beginReverse;

  while (current) {
    if (pos === m) {
      beforeReverse = previous;
      beginReverse = current;
      previous = current;
      current = next;
      next = next && next.next;
      pos += 1;

      while (pos <= n) {
        current.next = previous;
        previous = current;
        current = next;
        next = next && next.next;
        pos += 1;
      }

      if (!beforeReverse) {
        head = previous;
        beginReverse.next = current || null;
      } else {
        beforeReverse.next = previous;
        beginReverse.next = current;
      }

      return head;
    } else {
      previous = current;
      current = next;
      next = next && next.next;
      pos += 1;
    }
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(1);
let n2 = new ListNode(2);
head.next = n2;
let n3 = new ListNode(3);
n2.next = n3;
let n4 = new ListNode(4);
n3.next = n4;
let n5 = new ListNode(5);
n4.next = n5;

console.log(reverseBetween(head, 2, 4));

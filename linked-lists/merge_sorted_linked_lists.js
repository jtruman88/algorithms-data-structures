/*
Input:
Two Sorted linked lists

Output:
One sorted linked list, combination of two

Mental Model - Linked List - Dummy Head

1. Create dummy as new node
2. set l1_current = li
3. set l2_current = l2
4. loop while l1_current && l2_current
5. if l1_current.val <= l2_current.val
  dummy.next = l1_current
  l1_current = l1_current.next
6. else
  dummy.next = l2_current
  l2_current = l2_current.next

// After loop

7. if !li_current dummy = l2_current : dummy = l1_current
8. return dummy.next
*/

var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  let currentDummy = dummy;
  let l1Current = l1;
  let l2Current = l2;

  while (l1Current && l2Current) {
    if (l1Current.val <= l2Current.val) {
      currentDummy.next = l1Current;
      l1Current = l1Current.next;
    } else {
      currentDummy.next = l2Current;
      l2Current = l2Current.next;
    }

    currentDummy = currentDummy.next;
  }

  currentDummy.next = (l1Current ? l1Current : l2Current);
  return dummy.next;
};

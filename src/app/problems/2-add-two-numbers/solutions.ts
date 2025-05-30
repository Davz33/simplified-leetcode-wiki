import { CodeSolutionData } from '../../components/CodeSolution';

export const addTwoNumbersSolutions: CodeSolutionData[] = [
  {
    language: 'Python',
    explanation: 'Clean and readable Python solution using dummy node pattern.',
    code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(0)
        cur = dummy
        carry = 0
        
        while l1 or l2 or carry:
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            total = x + y + carry
            
            carry = total // 10
            cur.next = ListNode(total % 10)
            cur = cur.next
            
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            
        return dummy.next`
  },
  {
    language: 'Java',
    explanation: 'Standard Java solution with explicit null checks and clear variable naming.',
    code: `public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        int carry = 0;
        
        while (l1 != null || l2 != null || carry != 0) {
            int x = (l1 != null) ? l1.val : 0;
            int y = (l2 != null) ? l2.val : 0;
            int sum = x + y + carry;
            
            carry = sum / 10;
            current.next = new ListNode(sum % 10);
            current = current.next;
            
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        
        return dummy.next;
    }
}`
  },
  {
    language: 'C++',
    explanation: 'Efficient C++ solution with pointer manipulation and memory management.',
    code: `struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode dummy(0);
        ListNode* current = &dummy;
        int carry = 0;
        
        while (l1 || l2 || carry) {
            int x = l1 ? l1->val : 0;
            int y = l2 ? l2->val : 0;
            int sum = x + y + carry;
            
            carry = sum / 10;
            current->next = new ListNode(sum % 10);
            current = current->next;
            
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }
        
        return dummy.next;
    }
};`
  },
  {
    language: 'JavaScript',
    explanation: 'Modern JavaScript solution with arrow functions and concise syntax.',
    code: `function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const addTwoNumbers = (l1, l2) => {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const x = l1?.val || 0;
        const y = l2?.val || 0;
        const sum = x + y + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    return dummy.next;
};`
  },
  {
    language: 'Go',
    explanation: 'Go solution demonstrating idiomatic pointer handling and struct initialization.',
    code: `type ListNode struct {
    Val  int
    Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    dummy := &ListNode{Val: 0}
    current := dummy
    carry := 0
    
    for l1 != nil || l2 != nil || carry != 0 {
        x := 0
        if l1 != nil {
            x = l1.Val
            l1 = l1.Next
        }
        
        y := 0
        if l2 != nil {
            y = l2.Val
            l2 = l2.Next
        }
        
        sum := x + y + carry
        carry = sum / 10
        
        current.Next = &ListNode{Val: sum % 10}
        current = current.Next
    }
    
    return dummy.Next
}`
  },
  {
    language: 'Python',
    filename: 'recursive.py',
    explanation: 'Alternative recursive approach - elegant but uses more stack space.',
    code: `class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode, carry: int = 0) -> ListNode:
        if not l1 and not l2 and not carry:
            return None
        
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        
        node = ListNode(total % 10)
        
        next1 = l1.next if l1 else None
        next2 = l2.next if l2 else None
        new_carry = total // 10
        
        node.next = self.addTwoNumbers(next1, next2, new_carry)
        return node`
  }
]; 
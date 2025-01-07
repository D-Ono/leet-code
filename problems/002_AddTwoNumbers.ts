// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function verifySum (value: number): number[] {
    if (value > 9) return [value % 10, 1];
    return [value, 0]
}

function addTwoNumbersRecursive(l1: ListNode | null, l2: ListNode | null, value: number): ListNode | null {
    if (l1 === null && l2 === null && value === 0) return null;
    else if (l1 === null && l2 === null && value !== 0) return new ListNode(value, null);
    else if (l1 === null && l2 !== null) {
        const [result, nextValue] = verifySum(l2.val + value);
        return new ListNode(result, addTwoNumbersRecursive(null, l2.next, nextValue));
    }
    else if (l1 !== null && l2 === null) {
        const [result, nextValue] = verifySum(l1.val + value);
        return new ListNode(result, addTwoNumbersRecursive(l1.next, null, nextValue));
    }
    else {
        const [result, nextValue] = verifySum(l1.val + l2.val + value);
        return new ListNode(result, addTwoNumbersRecursive(l1.next, l2.next, nextValue));
    }
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoNumbersRecursive(l1, l2, 0);
};

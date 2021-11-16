class Node {
   constructor(val) {
      this.data = val;
      this.left = null;
      this.right = null;
   }
}

let root;
let head;
let prev = null;

function BinaryTree2DoubleLinkedList(root) {

   if (root == null)
      return;

   BinaryTree2DoubleLinkedList(root.left);

   if (prev == null)
      head = root;
   else {
      root.left = prev;
      prev.right = root;
   }
   prev = root;

   BinaryTree2DoubleLinkedList(root.right);
}

function printList(node) {
   while (node != null) {
      document.write(node.data + " ");
      node = node.right;
   }
}
// https://www.youtube.com/watch?v=fbJrO4ohUN0
let arr = []

for (let i = 1; i < 7; i++) {
   const result = prompt('Значение', '')
   arr.push(result)
}

root = new Node(arr[0]);
root.left = new Node(arr[1]);
root.right = new Node(arr[2]);
root.left.left = new Node(arr[3]);
root.left.right = new Node(arr[4]);
root.right.left = new Node(arr[5]);

BinaryTree2DoubleLinkedList(root);
printList(head);
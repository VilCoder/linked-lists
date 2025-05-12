import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append("dog");
linkedList.append("cat");
linkedList.append("parrot");
linkedList.append("hamster");
linkedList.append("snake");
linkedList.append("turtle");

console.log(linkedList.size());
console.log(linkedList.getHead());
console.log(linkedList.getTail());
console.log(linkedList.contains('hamster'));
console.log(linkedList.at(3));
console.log(linkedList.find('snake'));

linkedList.pop();

linkedList.insertAt(3, 2);

console.log(linkedList.removeAt(4));

console.log(linkedList.toString());
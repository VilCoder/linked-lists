import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append(2);
linkedList.prepend(1);
linkedList.append(5);

console.log(linkedList.size());
console.log(linkedList.toString());
console.log(linkedList.getHead());
console.log(linkedList.getTail());
console.log();
console.log(linkedList.at(4));

# Working with Algorithms and Data Structure

This repository provides implementations of various data structures in JavaScript.

## Table of Contents

1. **[Introduction](#introduction)**
2. **[Stack](#stack)**
3. **[Set](#set)**
4. **[Binary Search Tree](#bst)**

---

## Introduction

This repository contains implementations of several fundamental data structures. Each data structure is implemented with a focus on efficiency and clarity. The following sections describe each data structure, its methods, and usage examples.

## Stack

A stack is a collection of elements with a last-in, first-out (LIFO) ordering, meaning the most recently added element is the first to be removed.

1. [Description](#description)
2. [Methods](#methods)
   - [isEmpty](#isempty)
   - [clear](#clear)
   - [contains](#contains)
   - [peek](#peek)
   - [print](#print)
   - [size](#size)
   - [feed](#feed)
   - [reverse](#reverse)
   - [push](#push)
   - [unshift](#unshift)
   - [pop](#pop)
   - [shift](#shift)
   - [min](#min)
   - [max](#max)
   - [Iterable](#iterable)
3. [Usage Example](#stack-usage-example)

## Description

The `Stack` class provides a variety of methods for managing a stack of elements, supporting operations such as adding, removing, and inspecting elements. This implementation also includes features to handle capacity constraints and allows the stack to be iterable.

## Features

- **Capacity Management**: Set a maximum capacity for the stack to prevent overflow.
- **Standard Stack Operations**: Push, pop, shift, and unshift elements.
- **Additional Operations**: Peek at the top element, check for containment, clear the stack, and reverse the stack.
- **Utility Methods**: Find the minimum and maximum values for numeric stacks.
- **Iterable**: Allows the stack to be used in iteration contexts.

## Methods

### `isEmpty()`

```javascript
stack.isEmpty()
```

Description: Checks if the stack is empty.
Returns: true if the stack is empty, otherwise false.

### `contains(value: any)`

```javascript
stack.contains(value)
```

Description: Checks if the specified element is in the stack.
Parameters:
value: The element to check for.
Returns: true if the element is found, otherwise false.

### `peek()`

```javascript
stack.peek()
```

Description: Returns the element at the top of the stack without removing it.
Returns: The element at the top of the stack, or undefined if the stack is empty.

### `print()`

```javascript
stack.print()
```

Description: Returns the whole stack as a JSON string.
Returns: A string representation of the stack's contents.

### `size()`

```javascript
stack.size()
```

Description: Returns the number of elements in the stack.
Returns: The count of elements in the stack.

### `feed()`

```javascript
stack.feed()
```

Description: Returns the stack's internal storage object.
Returns: The storage object of the stack.

### `reverse()`

```javascript
stack.reverse()
```

Description: Reverses the order of elements in the stack.
Returns: void

### `push(value: any)`

```javascript
stack.push(value)
```

Description: Adds an element to the end of the stack.
Parameters:
`value: The element to add.`
Returns: void
Throws: An error if the stack has reached its maximum capacity (maxCapacity).

### `unshift(value: any)`

```javascript
stack.unshift(value)
```

Description: Adds an element to the beginning of the stack.
Parameters:
value: The element to add.
Returns: void
Throws: An error if the stack has reached its maximum capacity (maxCapacity).

### `pop()`

```javascript
stack.pop()
```

Description: Removes and returns the element at the end of the stack.
Returns: The removed element, or undefined if the stack is empty.

### `shift()`

```javascript
stack.shift()
```

Description: Removes and returns the element at the beginning of the stack.
Returns: The removed element, or undefined if the stack is empty.

### `min()`

```javascript
stack.min()
```

Description: Returns the minimum value in the stack. Applicable only for numeric values.
Returns: The minimum numeric value, or undefined if the stack is empty or does not contain numeric values.

### `max()`

```javascript
stack.max()
```

Description: Returns the maximum value in the stack. Applicable only for numeric values.
Returns: The maximum numeric value, or undefined if the stack is empty or does not contain numeric values.

### `Iterable`

```javascript
for (const item of stack) {
	console.log(item)
}
```

Description: Makes the stack iterable. Allows the stack to be used in for...of loops and other iterable contexts.
Returns: An iterator that yields the elements of the stack.

<h2 id="stack-usage-example">Usage example</h2>

```javascript
// Create a new stack with a maximum capacity of 5
const stack = new Stack(5)

// Add elements to the stack
stack.push('JavaScript 💛')
stack.unshift(69)

// Print the stack
console.log(stack.print()) // Output: {"0":69,"1":"JavaScript 💛"}

// Peek at the top element
console.log(stack.peek()) // Output: "JavaScript 💛"

// Check if the stack contains a specific element
console.log(stack.contains(69)) // Output: true

// Reverse the stack
stack.reverse()
console.log(stack.print()) // Output: {"0":"JavaScript 💛","1":69}

// Remove and print elements
console.log(stack.pop()) // Output: "JavaScript 💛"
console.log(stack.shift()) // Output: 69

// Check stack size
console.log(stack.size()) // Output: 0

// Clear the stack
stack.clear()
console.log(stack.isEmpty()) // Output: true
```

## Set

A set is a collection of unique elements. This implementation includes various methods to interact with the set, such as adding, removing, and performing set operations like union, intersection, and difference.

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Methods](#methods)
   - [has](#has)
   - [values](#values)
   - [add](#add)
   - [remove](#remove)
   - [size](#size)
   - [union](#union)
   - [combine](#combine)
   - [intersection](#intersection)
   - [difference](#difference)
4. [Usage Example](#set-usage-example)

## Description

The `CustomSet` class provides a variety of methods to manage a set of unique elements. It supports standard set operations, such as union, intersection, and difference, and provides utility methods to interact with the set.

## Features

- **Unique Elements**: Ensures all elements in the set are unique.
- **Standard Set Operations**: Add, remove elements and check for containment.
- **Set Operations**: Perform union, intersection, and difference with other sets.
- **Utility Methods**: Retrieve all values in the set and check the size of the set.

## Methods

### `has(element)`

```javascript
customSet.has(element)
```

Description: Checks if the specified element is in the set.
Parameters:
element: The element to check for.
Returns: true if the element is found, otherwise false.

### `values()`

```javascript
customSet.values()
```

Description: Returns all the elements in the set.
Returns: An array of elements in the set.

### `add()`

```javascript
customSet.add()
```

Description: Adds an element to the set if it is not already present.
Parameters:
element: The element to add.
Returns: true if the element was added, otherwise false.

### `remove(element)`

```javascript
customSet.remove(element)
```

Description: Removes the specified element from the set if it is present.
Parameters:
element: The element to remove.
Returns: true if the element was removed, otherwise false.

### `size()`

```javascript
customSet.size()
```

Description: Returns the number of elements in the set.
Returns: The count of elements in the set.

### `union(otherSet)`

```javascript
customSet.union(otherSet)
```

Description: Returns a new set that is the union of the original set and the given set.
Parameters:
otherSet: Another instance of CustomSet.
Returns: A new CustomSet instance representing the union of the two sets.

### `intersection(otherSet)`

```javascript
customSet.intersection(otherSet)
```

Description: Returns a new set that is the intersection of the original set and the given set.
Parameters:
otherSet: Another instance of CustomSet.
Returns: A new CustomSet instance representing the intersection of the two sets.

### `difference(otherSet)`

```javascript
customSet.difference(otherSet)
```

Description: Returns a new set that is the difference of the original set and the given set.
Parameters:
otherSet: Another instance of CustomSet.
Returns: A new CustomSet instance representing the difference of the two sets.

<h2 id="set-usage-example">Usage example</h2>

```javascript
// Create a new set
const setA = new CustomSet()
setA.add(1)
setA.add(2)
setA.add(3)

// Create another set
const setB = new CustomSet()
setB.add(3)
setB.add(4)
setB.add(5)

// Union of setA and setB
const unionSet = setA.union(setB)
console.log(unionSet.values()) // Output: [1, 2, 3, 4, 5]

// Intersection of setA and setB
const intersectionSet = setA.intersection(setB)
console.log(intersectionSet.values()) // Output: [3]

// Difference of setA and setB
const differenceSet = setA.difference(setB)
console.log(differenceSet.values()) // Output: [1, 2]
```

<h2 id="bst">Binary Search Tree</h2>

A BST is a node-based binary tree data structure in which each node has at most two children referred to as the left child and the right child. For each node, the value of all the nodes in the left subtree is less than the value of the node, and the value of all the nodes in the right subtree is greater than the value of the node.

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Classes](#classes)
   - [TreeNode](#treenode)
   - [BinarySearchTree](#binarysearchtree)
4. [Methods](#methods)
   - [TreeNode Methods](#treenode-methods)
   - [BinarySearchTree Methods](#binarysearchtree-methods)
     - [insert](#insert)
     - [find](#find)
     - [contains](#contains)
     - [inOrderTraversal](#inordertraversal)
5. [Usage Example](#bst-usage-example)

## Description

The `BinarySearchTree` class provides a way to create and manage a binary search tree. This implementation includes methods for inserting values, searching for values, checking for containment, and performing in-order traversal.

## Features

- **Node Insertion**: Insert values into the BST maintaining the binary search property.
- **Value Search**: Search for specific values in the BST.
- **Containment Check**: Check if a value exists in the BST.
- **Traversal**: Perform in-order traversal to get values in sorted order.

## Classes

### `TreeNode`

The `TreeNode` class represents a node in the binary search tree.

#### Properties

- `value`: The value stored in the node.
- `right`: Reference to the right child node.
- `left`: Reference to the left child node.

### `BinarySearchTree`

The `BinarySearchTree` class represents the binary search tree itself.

#### Properties

- `root`: The root node of the BST.

## Methods

### TreeNode Methods

No specific methods for `TreeNode` are exposed; nodes are managed internally by the `BinarySearchTree` methods.

### BinarySearchTree Methods

#### `insert`

```javascript
insert(value)
```

Description: Inserts a value into the BST.
Parameters:
value: The value to insert.
Returns: The BST instance with the new value inserted.

Example:

```javascript
bst.insert(10)
```

#### `find(value)`

```javascript
find(value)
```

Description: Searches for a value in the BST.
Parameters:
value: The value to search for.
Returns: The node containing the value if found, otherwise undefined.

Example:

```javascript
const node = bst.find(10)
```

#### `contains(value)`

```javascript
contains(value)
```

Description: Checks if a value exists in the BST.
Parameters:
value: The value to check for.
Returns: true if the value is found, otherwise false.

Example:

```javascript
const exists = bst.contains(10)
```

#### `inOrderTraversal`

```javascript
inOrderTraversal(node, (result = []))
```

Description: Performs in-order traversal of the BST.
Parameters:
node: The starting node for the traversal.
result: An array to store the traversal results.
Returns: An array of values in in-order.

Example:

```javascript
const result = bst.inOrderTraversal(bst.root)
```

<h2 id="bst-usage-example">Usage example</h2>

```javascript
// Create a new Binary Search Tree
const bst = new BinarySearchTree();

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(15);

// Search for a value
const node = bst.find(10);
console.log(node); // TreeNode { value: 10, right: TreeNode {...}, left: TreeNode {...} }

// Check if a value exists
const exists = bst.contains(5);
console.log(exists); // true

// Perform in-order traversal
const result = bst.inOrderTraversal(bst.root);
console.log(result); // [5, 10, 15]

```

```

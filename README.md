# Working with Algorithms and Data Structure

This repository provides implementations of various data structures in JavaScript.

## Table of Contents

1. **[Introduction](#introduction)**
2. **[Stack](#stack)**

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
3. [Usage Example](#usage-example)

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

<h2 id="usage-example">Usage example</h2>

```javascript
// Create a new stack with a maximum capacity of 5
const stack = new Stack(5);

// Add elements to the stack
stack.push('JavaScript 💛');
stack.unshift(69);

// Print the stack
console.log(stack.print()); // Output: {"0":69,"1":"JavaScript 💛"}

// Peek at the top element
console.log(stack.peek()); // Output: "JavaScript 💛"

// Check if the stack contains a specific element
console.log(stack.contains(69)); // Output: true

// Reverse the stack
stack.reverse();
console.log(stack.print()); // Output: {"0":"JavaScript 💛","1":69}

// Remove and print elements
console.log(stack.pop()); // Output: "JavaScript 💛"
console.log(stack.shift()); // Output: 69

// Check stack size
console.log(stack.size()); // Output: 0

// Clear the stack
stack.clear();
console.log(stack.isEmpty()); // Output: true
```
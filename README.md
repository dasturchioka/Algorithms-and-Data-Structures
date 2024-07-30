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
4. [Contributing](#contributing)
5. [License](#license)

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

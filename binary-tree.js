class TreeNode {
	constructor(value) {
		this.value = value
		this.right = null
		this.left = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	// Method to insert a value into the BST
	insert(value) {
		const newNode = new TreeNode(value)
		if (this.root === null) {
			this.root = newNode
			return this
		}

		let current = this.root

		while (current) {
			if (current.value === value) return undefined
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode
					return this
				}
				current = current.left
			} else {
				if (current.right === null) {
					current.right = newNode
					return this
				}
				current = current.right
			}
		}
	}

	// Method to search for a value in the BST
	find(value) {
		if (!this.root) return false

		let current = this.root
		let found

		while (current && !found) {
			if (value < current.value) {
				current = current.left
			} else if (value > current.value) {
				current = current.right
			} else {
				found = current
			}
		}

		return found
	}

	contains(value) {
		if (!this.root) return false

		let current = this.root

		while (current) {
			if (value === current.value) {
				return true
			} else if (value < current.value) {
				current = current.left
			} else {
				current = current.right
			}
		}

		return false
	}

	// Method to perform in-order traversal
	inOrderTraversal(node, result = []) {
		if (node !== null) {
			this.inOrderTraversal(node.left, result)
			result.push(node.value)
			this.inOrderTraversal(node.right, result)
		}
		return result
	}
}


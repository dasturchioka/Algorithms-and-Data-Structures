// STACKS
function Stack(maxCapacity) {
	this.count = 0
	this.storage = {}
	this.maxCapacity = maxCapacity

	// checks if the stack is empty
	this.isEmpty = function () {
		return this.count === 0
	}

	// clears all elements from the stack
	this.clear = function () {
		this.storage = {}
		this.count = 0
	}

	// checks if the given element is in the stack
	this.contains = function (value) {
		for (let i = 0; i < this.count; i++) {
			if (this.storage[i] === value) {
				return true
			}
		}

		return false
	}

	// returns the element at the top of the stack without removing it, normally the last added el.
	this.peek = function () {
		return this.storage[this.count - 1]
	}

	// returns the whole stack as string
	this.print = function () {
		return JSON.stringify(this.storage)
	}

	// returns how many elements are in the store
	this.size = function () {
		return this.count
	}

	// returns the stack itself
	this.feed = function () {
		return this.storage
	}

	// reverses the order of elements in the stack
	this.reverse = function () {
		let reversed = {}
		for (let i = 0; i < this.count; i++) {
			reversed[i] = this.storage[this.count - 1 - i]
		}

		this, (this.storage = reversed)
	}

	// add element into end of the stack, doesn't return anything
	this.push = function (value) {
		if (this.count < this.maxCapacity) {
			this.storage[this.count] = value
			this.count++
		} else {
			throw new Error('Stack has reached its max capacity')
		}
	}

	// add element into beginning of the stack, doesn't return anything
	this.unshift = function (value) {
		if (this.count < this.maxCapacity) {
			let incrementedObj = {}
			for (const key in this.storage) {
				const newKey = (+key + 1).toString()
				incrementedObj[newKey] = this.storage[key]
			}
			this.count++
			incrementedObj[0] = value
			this.storage = incrementedObj
		} else {
			throw new Error('Stack has reached its max capacity')
		}
	}

	// remove the last element from the stack, returns removed element
	this.pop = function () {
		if (this.count === 0) {
			return undefined
		}

		this.count--
		const result = this.storage[this.count]
		delete this.storage[this.count]
		return result
	}

	// remove the first element from the stack, returns the deleted element
	this.shift = function () {
		if (this.count === 0) {
			return undefined
		}

		const result = this.storage[0]
		delete this.storage[0]

		let newStack = {}

		for (let i = 1; i < this.count; i++) {
			newStack[i - 1] = this.storage[i]
		}

		this.storage = newStack
		this.count--

		return result
	}

	// returns the minimum value in the stack (for numbers)
	this.min = function () {
		if (this.isEmpty()) return undefined

		let minValue = this.storage[0]

		for (let i = 0; i < this.count; i++) {
			if (minValue > this.storage[i]) {
				minValue = this.storage[i]
			}
		}

		return minValue
	}

	// returns the maximum value in the stack (for numbers)
	this.max = function () {
		if (this.isEmpty()) return undefined

		let maxValue = this.storage[0]

		for (let i = 0; i < this.count; i++) {
			if (maxValue < this.storage[i]) {
				maxValue = this.storage[i]
			}
		}

		return maxValue
	}

	// make the stack iterable (making it available for looping)
	this[Symbol.iterator] = function* () {
		for (let i = 0; i < this.count; i++) {
			yield this.storage[i]
		}
	}
}
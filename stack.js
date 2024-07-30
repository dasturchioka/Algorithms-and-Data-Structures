// STACKS
function Stack() {
	this.count = 0
	this.storage = {}

	// returns how many elements are in the store
	this.size = function () {
		let result = this.count + 1
		return result
	}

	// returns the storage itself
	this.feed = function () {
		return this.storage
	}

	// add element into end of the storage, doesn't return anything
	this.push = function (value) {
		this.storage[this.count] = value
		this.count++
	}

	// add element into beginning of the storage, doesn't return anything
	this.unshift = function (value) {
		let incrementedObj = {}
		for (const key in this.storage) {
			const newKey = (+key + 1).toString()
			incrementedObj[newKey] = this.storage[key]
		}
		this.count++
		incrementedObj[0] = value
		this.storage = incrementedObj
	}

	// remove the last element from the storage, returns removed element
	this.pop = function () {
		if (this.count === 0) {
			return undefined
		}

		this.count--
		const result = this.storage[this.count]
		delete this.storage[this.count]
		return result
	}

	// remove the first element from the storage, returns the deleted element
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
		delete newStack

		return result
	}
}

const myStack = new Stack()

myStack.push('JavaScript 💛')
myStack.unshift(69)
console.log(myStack.feed()) // { '0': 69, '1': 'JavaScript 💛' }
myStack.push(['I am a string inside of an array'])
myStack.unshift(true)
console.log(myStack.feed()) // {'0': true, '1': 69, '2': 'JavaScript �', '3':['I am a string inside of an array']}

myStack.shift()
console.log(myStack.feed()) //{'0': 69, '1': 'JavaScript �', '2': [ 'I am a string inside of an array' ]}

myStack.push({ name: 'Sardor' })
myStack.unshift(69.69)
console.log(myStack.feed()) // {'0': 69.69,'1': 69,'2': 'JavaScript �','3': [ 'I am a string inside of an array' ],'4': { name: 'Sardor' }}

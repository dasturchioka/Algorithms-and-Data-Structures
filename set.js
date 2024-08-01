function CustomSet() {
	// store
	let collection = []

	// checks if there is an element in the collection
	this.has = element => {
		return collection.indexOf(element) !== -1
	}

	// returns the collection
	this.values = () => {
		return collection
	}

	// adds element if there is no copy in the store
	this.add = element => {
		if (!this.has(element)) {
			collection.push(element)
			return true
		}

		return false
	}

	// removes the element if there is in the store
	this.remove = element => {
		if (this.has(element)) {
			const index = collection.indexOf(element)
			collection.splice(index, 1)

			return true
		}

		return false
	}

	// the size (length of the set)
	this.size = () => {
		return collection.length
	}

	// returns the union of 2 sets (original and given in the parameter) as a new set
	this.union = otherSet => {
		let unionSet = new CustomSet()

		let firstSet = this.values()
		let secondSet = otherSet.values()

		firstSet.forEach(e => {
			unionSet.add(e)
		})
		secondSet.forEach(e => {
			unionSet.add(e)
		})

		return unionSet
	}

	// returns the original set by adding another set
	this.combine = otherSet => {
		otherSet.values().forEach(e => {
			this.add(e)
		})

		return this.values()
	}

	// returns the intersection of 2 sets (original and given) as a new set
	this.intersection = otherSet => {
		let intersectionSet = new CustomSet()

		let firstSet = this.values()

		firstSet.forEach(e => {
			if (otherSet.has(e)) {
				intersectionSet.add(e)
			}
		})

		return intersectionSet
	}

	// returns the difference of 2 sets (original and given) as a new set
	this.difference = otherSet => {
		let differenceSet = new CustomSet()

		let firstSet = this.values()

		firstSet.forEach(e => {
			if (!otherSet.has(e)) {
				differenceSet.add(e)
			}
		})

		return differenceSet
	}
}

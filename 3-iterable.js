/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  constructor() {
    this.array = []; //creates an empty group
  }

  add(val) {
    if (!this.has(val)) { //adds a value to the group
      this.array.push(val); 
    }
  }

  delete(val) { //removes its argument from the group
    this.array = this.array.filter(x => x !== val);
  }

  has(val) { //returns a Boolean value indicating whether its argument is a member of the group.
    return this.array.includes(val);
  }

  static from(valAll) {
    let group = new Group;
    for (let val of valAll) { //excutes a loop that operates on a swquance o values sourced from a iterable object 
      group.add(val);
    } //takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
    return group;
  }

}


// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
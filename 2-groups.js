/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
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
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false


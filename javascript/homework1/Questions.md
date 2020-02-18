
1. Explain in your own words the difference between declaring variables via `var`, `let` and `const`. 

var and let is basically the same, but var is function scoped, 'let' is block scoped. We can declare variables using 'var' and 'let' , then reassign values.

However, when a variable declared using const, it cannot be changed, meaning cannot get a new value. We should use const when we are sure that, reassigning values to this variable will not be necessary. 


2. Why is declaration of a variable via `var` considered a bad tone?

Because when variable declared (with 'var') outside of a function is can be used everywhere in the window. So it is reachable globally.

But as let is block scoped it cannot be reached outside of block scope. And variables when declared inside the block treated as a different variable, meaning that, even if we have variable with sampleName  in the window, we can create same named var inside block, because it will be treated as a new variable in this scope.


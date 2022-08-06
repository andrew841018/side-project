'use strict';
let greet = greeting => name => console.log(`${greeting} ${name}`);
let func = greet('hey');
func('Andrew');
func('John');

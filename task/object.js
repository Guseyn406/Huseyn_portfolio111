const obj = {
  // 1
  sayHi() {
    console.log("Hi!");
  },

  // 2
  greet(name) {
    console.log(`Hello, ${name}!`);
  },

  // 3
  add(a, b) {
    return a + b;
  },

  // 4
  subtract(a, b) {
    return a - b;
  },

  // 5
  multiply(a, b) {
    return a * b;
  },

  // 6
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  },

  // 7
  square(n) {
    return n * n;
  },

  // 8
  isEven(n) {
    return n % 2 === 0;
  },

  // 9
  max(a, b) {
    return a > b ? a : b;
  },

  // 10
  min(a, b) {
    return a < b ? a : b;
  },

  // 11
  printObject() {
    console.log(this);
  },

  // 12
  setProperty(key, value) {
    this[key] = value;
  },

  // 13
  getProperty(key) {
    return this[key];
  },

  // 14
  removeProperty(key) {
    delete this[key];
  },

  // 15
  listMethods() {
    return Object.getOwnPropertyNames(this)
      .filter(k => typeof this[k] === "function");
  }
};


obj.sayHi();                
obj.greet("Ivan");         
console.log(obj.add(5, 3)); 
console.log(obj.subtract(5, 3)); 
console.log(obj.multiply(4, 3)); 
console.log(obj.divide(10, 2));  
console.log(obj.square(6));      
console.log(obj.isEven(7));      
console.log(obj.max(10, 20));    
console.log(obj.min(10, 20));    
obj.printObject();               
obj.setProperty("newKey", 123);
console.log(obj.getProperty("newKey")); 
obj.removeProperty("newKey");
console.log(obj.listMethods()); 

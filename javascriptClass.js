let p = new TestClass(); // Reference Error
/* 
You have to instantiate the class before 
you actually use the class in javascript!
*/

class TestClass {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let q = new TestClass(); // TestClass instantiation
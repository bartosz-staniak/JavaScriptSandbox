// npx nodemon index.js

{
    const array1 = [1, 2, 3, 4]; // using the 'const' keyword limits the scope in which constant is visible
    
    const object = {};
    console.log(object);
    console.log(object.1);
    console.log(object.$1);
    // console.log(array1.0);
    console.log(array1.$0); console.log(typeof array1.$0);
    console.log(array1.$1); console.log(typeof array1.$1);
    console.log(array1[0]);
}

// console.log(array1); // attempt to use a constant outside of its scope causes a crash as it is not defined
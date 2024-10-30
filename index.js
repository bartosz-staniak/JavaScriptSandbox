// npx nodemon index.js

{
    const array1 = [1, 2, 3, 4]; // using the 'const' keyword limits the scope in which constant is visible
    
    const object = {};
    console.log(object);
    // console.log(object.1); // crashes because of non-existing identifier
    console.log(object.$1);
    object.$1 = "foo";
    console.log(object.$1);
    // console.log(array1.0); // crashes because of non-existing identifier
    array1.$1 = 5;
    console.log(array1.$0); console.log(typeof array1.$0); // undefined because of non-existing identifier?
    console.log(array1.$1); console.log(typeof array1.$1); // result is 5
    console.log(array1[0]);
    console.log(array1); // [ 1, 2, 3, 4, '$1': 5 ]
}

// console.log(array1); // attempt to use a constant outside of its scope causes a crash as it is not defined

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 0; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1;

    console.log(initialValue, sumWithInitial);
}
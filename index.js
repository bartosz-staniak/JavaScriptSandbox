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

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 0; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => sum
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 0; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => sum + iteratedValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 0; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => sum + iteratedValue, initialValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => sum + iteratedValue, initialValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => {
            sum + iteratedValue, initialValue
        }
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => {
            return sum + iteratedValue, initialValue
        }
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => {
            return sum + iteratedValue
        }
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => {
            return sum + iteratedValue
        }, initialValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    let cycleNo = 1;
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => {
            let sumPlusIterated = sum + iteratedValue;
            console.log("   " + cycleNo++ +": " + sumPlusIterated);
            return sumPlusIterated
        }//, initialValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    const array1 = [1, 2, 3, 4];

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    let cycleNo = 1;
    const sumWithInitial = array1.reduce(
        (sum, iteratedValue) => {
            let sumPlusIterated = sum + iteratedValue;
            console.log("   " + cycleNo++ +": " + sumPlusIterated);
            return sumPlusIterated
        }, initialValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    // const array1 = [1, 2, 3, 4];
    const sparseArray1 = [, , , 3, 4, 5]

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    let cycleNo = 1;
    const sumWithInitial = sparseArray1.reduce(
        (sum, iteratedValue) => {
            let sumPlusIterated = sum + iteratedValue;
            console.log("   " + cycleNo++ +": " + sumPlusIterated);
            return sumPlusIterated
        }, initialValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

{
    // const array1 = [1, 2, 3, 4];
    const sparseArray1 = [, , , 3, 4, 5]
    sparseArray1[0] = 1;
    console.log(sparseArray1); // [ 1, <2 empty items>, 3, 4, 5 ]
    sparseArray1[-1] = 1;
    console.log(sparseArray1); // [ 1, <2 empty items>, 3, 4, 5, '-1': 1 ]

    const initialValue = 1; // a substitute for the 'previous result' the first time a callback function is run?
    let cycleNo = 1;
    const sumWithInitial = sparseArray1.reduce(
        (sum, iteratedValue) => {
            let sumPlusIterated = sum + iteratedValue;
            console.log("   " + cycleNo++ +": " + sumPlusIterated);
            return sumPlusIterated
        }, initialValue
    );

    console.log("Initial value: " + initialValue + ", Sum of the values in the array: " + sumWithInitial);
}

// Reduce end

{
    function longestString() {
        let longest = "";
        console.log(typeof arguments);

        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i].length > longest.length) {
                longest = arguments[i];
            }
        }
        return longest;
    }

    longestString(); // object
    longestString(1); // also object
    let returned = longestString("a", "abc", "ab");
    console.log(returned + ", " + typeof returned); // abc, string
}

{
    function longestString() {
        let longest = "";
        console.log(typeof arguments);
        console.log("Type of the first argument: " + typeof arguments[0]);

        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i].length > longest.length) {
                longest = arguments[i];
            }
        }
        return longest;
    }

    longestString(); // object
    longestString(1); // also object
    let returned = longestString("a", 12345, "abc", "ab", 1);
    console.log(returned + ", " + typeof returned); // abc, string
}

// variadic end

{
    function fun (a, b, ...restArgs) {
        console.log("a", a);
        console.log("b", b);
        console.log("restArgs", restArgs);
    }

    fun("one", "two", "three", "four", "five", "six", "seven", "eight");
}

{
    function sum() {
        
    }
}
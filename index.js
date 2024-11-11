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
    function sum(...arguments) {
        let total = 0;
        for (const oneArg of arguments) {
            total += oneArg;
        }
        return total;
    }

    console.log(sum(10, 20, 30));
    console.log(sum(10, "20", 30)); // due to type coercion the result is 102030
}

{
    function sum(...arguments) {
        let total = 0;
        for (const oneArg of arguments) {
            let numCastOneArg = Number(oneArg);
            total += numCastOneArg;
        }
        return total;
    }

    console.log(sum(10, 20, 30));
    console.log(sum(10, "20", 30)); // problem removed by Number casting
    console.log(sum(10, "20", "abc", "030")); // NaN as the non numeric string could not be converted to a number
}

{
    function sum(...args) {
        let total = 0;
        for (const oneArg of args) {
            let numCastOneArg = Number(oneArg);
            let argNanChecked = Number.isNaN(numCastOneArg) ? 0 : numCastOneArg;
            total += argNanChecked;
        }
        return total;
    }

    console.log("Sum function result: " + sum(10, 20, 30));
    console.log("Sum function result: " + sum(10, "20", 30)); // problem removed by Number casting
    console.log("Sum function result: " + sum(10, "20", "abc", "030")); // problem removed by checking for NaN and assigning a zero '0' in case NaN is present
    console.log("Sum function result: " + sum(10, "20", "abc", "030", "", " ", -1));
}

{
    function ignoreFirst(...[, b, c]) {
        console.log("The first arguments element: " + arguments[0]);
        return b + c;
    }
    ignoreFirst();
    ignoreFirst(1);
    ignoreFirst(1, 2);
    console.log(ignoreFirst()); // NaN
    console.log(ignoreFirst(1)); // NaN
    console.log(ignoreFirst(1, 2)); // NaN probably because of null/undefined as c
}

{
    function ignoreFirst(...[, b, c]) {
        console.log("The first arguments element: " + arguments[0]);
        return (b ?? 0) + (c ?? 0);
    }
    ignoreFirst();
    ignoreFirst(1);
    ignoreFirst(1, 2);
    console.log(ignoreFirst()); // NaN removed using nullish coalescing '??'
    console.log(ignoreFirst(1)); // NaN removed using nullish coalescing '??'
    console.log(ignoreFirst(1, 2)); // NaN removed using nullish coalescing '??'
    console.log(ignoreFirst(1, 2, 3)); // 5
    console.log(ignoreFirst(1, 2, "1", 3)); // 21 due to type coercion into string
}

{
    function ignoreFirst(...[, b, c]) {
        console.log("The first arguments element: " + arguments[0]);
        b = Number(b);
        b = Number.isNaN(b) ? 0 : b;
        c = Number(c);
        c = Number.isNaN(c) ? 0 : c;
        return b + c;
    }
    ignoreFirst();
    ignoreFirst(1);
    ignoreFirst(1, 2);
    console.log(ignoreFirst()); // NaN removed using a zero '0' when NaN
    console.log(ignoreFirst(1)); // NaN removed using a zero '0' when NaN
    console.log(ignoreFirst(1, 2)); // NaN removed using a zero '0' when NaN
    console.log(ignoreFirst(1, 2, 3)); // 5
    console.log(ignoreFirst(1, 2, "1", 3)); // Type coercion avoided by casting parameter into a number or using a 0 in case of NaN
    console.log(ignoreFirst(1, 2, "string", 3)); // Type coercion avoided by casting parameter into a number or using a 0 in case of NaN
}

{
    function sortRestArgs(...theArgs) {
        const sortedArgs = theArgs;
        return sortedArgs;
    }

    console.log(sortRestArgs()); // []
}

{
    function sortRestArgs(...theArgs) {
        const sortedArgs = theArgs;
        return sortedArgs;
    }

    console.log(sortRestArgs(1, 3, 2, 7, 12 , 0)); // [ 1, 3, 2, 7, 12, 0 ]
}

{
    function sortRestArgs(...theArgs) {
        const sortedArgs = theArgs.sort();
        return sortedArgs;
    }

    console.log(sortRestArgs(1, 3, 2, 7, 12 , 0)); // [ 0, 1, 12, 2, 3, 7 ] revisited by using a comparator funciton as argument for the sort function
}

{
    function sortRestArgs(...theArgs) {
        const sortedArgs = arguments.sort(); // arguments.sort() cannot be used with a rest variable
        return sortedArgs;
    }

    // console.log(sortRestArgs(1, 3, 2, 7, 12 , 0)); // [ 0, 1, 12, 2, 3, 7 ] // crashes the program
}

{
    function sortRestArgs(...theArgs) {
        const sortedArgs = theArgs.sort(compareNumbers);
        return sortedArgs;
    }

    function compareNumbers(a, b) {
        return a - b;
    }

    console.log(sortRestArgs(1, 3, 2, 7, 12 , 0)); // [ 0, 1, 2, 3, 7, 12 ]
}

{
    function sortRestArgs(...theArgs) {
        const sortedArgs = theArgs.sort(compareNumbers);
        return sortedArgs;
    }

    function compareNumbers(a, b) {
        return b - a;
    }

    console.log(sortRestArgs(1, 3, 2, 7, 12 , 0)); // [ 12, 7, 3, 2, 1, 0 ]
}
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vitalyzaff/lotide`

**Require it:**

`const _ = require('@vitalyzaff/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.head(array)` : returns firt element of an array
* `_.tail(array)` : pushes all, but first element of the array to the new array
* `_.middle(array)` : returns the middle element of the array, in case if array length is even number, returns 2 middle elements 
* `_.countLetters(string)` : returns the # of occurances of each letter in the string in the form of object
* `_.countOnly(allItems, itemsToCount)` : returns the number of occurances for certain array (allItems) element, given the object key value of true/false 
* `_.eqArrays(array1,array2)` : returns true/false when comapring two arrays. If equal return true, and if not equal return false.
* `_.eqObjects(obj1, obj2)` : returns true/false when comapring two objects and its values and keys. If equal then returns true.
* `_.findKey(object, callback)` : returns the specified key when callback function condition is satisfied
* `_.findKeyByValue(object, value)` : returns the key of the given value within the object
* `_.flatten(array)` : returns flattened input array
* `_.letterPositions(string)` : returns the index of every letter in the string in the form of the object
* `_.map(array, callback)` : returns first character of each string in the array
* `_.takeUntil(array, callback)` : iterrates over the array and pushes values to new array until a specified callback function condition  
* `_.without(source, remove)` : removes the specified value from the array
* `_.assertArraysEqual(actual, expected)` : asserts if either array1 = array2 and returns either PASS or FAIL
* `_.assertEqual(actual, expected)` : asserts if either actual and expected values are equal
* `_.assertObjectsEqual()` : asserts if either actual object snd expected object are equal
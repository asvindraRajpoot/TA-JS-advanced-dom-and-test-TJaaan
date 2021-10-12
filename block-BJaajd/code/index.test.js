let { 
   
    removeFromArray,
    map,
    reduce,}=require('./index');

//testing for removeFromArray.
test(`([1, 2, 3, 4], 3) will give [1,2,4]`,()=>{
    expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1,2,4]);
})




// testing of map
const mockCallback = jest.fn(x => 42 + x);
map([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);

// testing of reduce
const mockCallback2 = jest.fn(x => 42 + x);
reduce([0, 1], mockCallback2);

// The mock function is called twice
expect(mockCallback2.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback2.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback2.mock.calls[1][0]).toBe(42);

// The return value of the first call to the function was 1
expect(mockCallback2.mock.results[0].value).toBe(42);


import Cart from './index'
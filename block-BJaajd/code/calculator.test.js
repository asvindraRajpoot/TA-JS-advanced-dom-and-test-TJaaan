let {add,
    subtract,
    sum,
    multiply,
    power,
    factorial,}=require('./calculator');

// test for add
test(`asvindra and rajpoot is asvindra rajpoot`,()=>{
    expect(add('asvindra','rajpoot')).toEqual('asvindra rajpoot');
})
test(`2-2 is 0`,()=>{
    expect(subtract(2,2)).toBe(0);
})
test(`2+2 is 4`,()=>{
    expect(sum(2,2)).toBe(4);
})
test(`2*3 is 6`,()=>{
    expect(multiply(2,3)).toBe(6);
})
test(`power of 2 is 4`,()=>{
    expect(power(2,2)).toBe(4);
})
test(`factorial of 4 is 24`,()=>{
    expect(factorial(4)).toBe(24);
})
let { getFullName,
    isPalindrome,
    getCircumfrence,
    getArea,}=require('./index');


 //testing for getFullName    
// positive test cases
test(`getFullName 'asvindra' +'rajpoot' of is asvindra rajpoot`,()=>{
    expect(getFullName('asvindra','rajpoot')).toBe('asvindra rajpoot');
})
test(`getFullName 'arti' +'rajpoot' of is arti rajpoot`,()=>{
    expect(getFullName('arti','rajpoot')).toBe('arti rajpoot');
})
test(`getFullName 'mohni' +'rajpoot' of is mohni rajpoot`,()=>{
    expect(getFullName('mohni','rajpoot')).toBe('mohni rajpoot');
})
// negative test cases
test(`getFullName 'asvindra' +'rajpoot' of is not asvindra rajput`,()=>{
    expect(getFullName('asvindra','rajpoot')).not.toBe('asvindra rajput');
})
test(`getFullName 'arti' +'rajpoot' of is not arti rajput`,()=>{
    expect(getFullName('arti','rajpoot')).not.toBe('arti rajput');
})
test(`getFullName 'mohni' +'rajpoot' of is not mohni rajput`,()=>{
    expect(getFullName('mohni','rajpoot')).not.toBe('mohni rajput');
})

 //testing for isPalindrom
// positive test cases
test(`  reviver is palindrom`,()=>{
    expect(isPalindrome('reviver')).toBeTruthy();
})
test(`level is palindrom`,()=>{
    expect(isPalindrome('level')).toBeTruthy();
})
test(`radar is palindrom`,()=>{
    expect(isPalindrome('radar')).toBeTruthy();
})
// negative test cases
test(`asvindra is not  palindrom`,()=>{
    expect(isPalindrome('asvindra')).not.toBeTruthy();
})
test(`sam is not palindrom`,()=>{
    expect(isPalindrome('sam')).not.toBeTruthy();
})
test(`ram is not palindrom`,()=>{
    expect(isPalindrome('ram')).not.toBeTruthy();
})

// getCircumfrence testing

//positive test cases
test(`circumference is 12.56`,()=>{
    expect(getCircumfrence(2)).toBe("The circumference is 12.56");
})
test(`circumference is 18.84`,()=>{
    expect(getCircumfrence(3)).toBe("The circumference is 18.84");
})
test(`circumference is 25.12`,()=>{
    expect(getCircumfrence(4)).toBe("The circumference is 25.12");
})

//negative test cases
test(`circumference is not 12.56`,()=>{
    expect(getCircumfrence(2)).not.toBe("The circumference is 12.5");
})
test(`circumference is not 18.84`,()=>{
    expect(getCircumfrence(3)).not.toBe("The circumference is 18.8");
})
test(`circumference is not 25.12`,()=>{
    expect(getCircumfrence(4)).not.toBe("The circumference is 25.1");
})


// testing getArea 
//positive test cases
test(`Area is 12.56`,()=>{
    expect(getArea(2)).toBe("The area is 12.56");
})
test(`Area is 28.26`,()=>{
    expect(getArea(3)).toBe("The area is 28.259999999999998");
})
test(`Area is 50.24`,()=>{
    expect(getArea(4)).toBe("The area is 50.24");
})
// negative test cases
test(`Area is not 12.56`,()=>{
    expect(getArea(2)).not.toBe("The area is not 12.5");
})
test(`Area is not 28.26`,()=>{
    expect(getArea(3)).not.toBe("The area is not 28.2");
})
test(`Area is not 50.24`,()=>{
    expect(getArea(4)).not.toBe("The area is not  50.2");
})
function calculateArea(a, b) {
   const obj = {
       area: a * b,
       figure: 'square',
       input: {
           firstInput: a,
           secondInput: b
       }
}
    return obj;
}

calculateArea(3, 5);
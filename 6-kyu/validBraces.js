function validBraces(braces) {
    let bracket = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let stack = [];
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] == '(' || braces[i] == '{' || braces[i] == '[') {
            stack.push(braces[i])
        } else if (stack[stack.length - 1] === bracket[braces[i]]) {
            stack.pop();
        } else {
            return false
        }
    }
    console.log(stack);
    return stack.length == 0;

}

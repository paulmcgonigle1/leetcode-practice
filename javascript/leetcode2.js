// Valid Parentheses (LeetCode #20)
// Check if a given string of parentheses is valid 
// (i.e., properly closed and nested).


function isValid(s){
    let stack = [];
    let pairs = {')':'(', '}':'{', ']':'['}

    for(let char of s){
        if(char === '(' || char === '{' || char === '[' ){
            stack.push(char);
        }else {
            if (stack.length === 0 || stack.pop() !== pairs[char])
                return false;

            }
        }

        return stack.length ===0;
    }
console.log(isValid("()"));       // ✅ true
console.log(isValid("()[]{}"));   // ✅ true
console.log(isValid("(]"));       // ❌ false
console.log(isValid("([)]"));     // ❌ false
console.log(isValid("{[]}"));     // ✅ true
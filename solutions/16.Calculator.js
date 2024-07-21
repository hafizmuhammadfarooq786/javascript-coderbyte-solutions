// Calculator
// Evaluating a mathematical expression within a string

// Solution 1:
function calculator1(str){
    return eval(str.replace(/()()|(d()|()d)/g, (match) => {
        return match.split('').join("*");
    }));
}
// Example usage:
console.log(' --------------- #16-1: Calculator --------------- ');
console.log(`Solution 1: input str="6*(4/2)+3*1", output: `+ calculator1("6*(4/2)+3*1")); // Output: 15
console.log(`Solution 1: input str="6/3-1", output: `+ calculator1("6/3-1")); // Output: 1
console.log(`Solution 1: input str="7-4-1+8(3)/2", output: `+ calculator2("7-4-1+8(3)/2")); // Output: 15

// Solution 2:
function calculator2(str){
    let stack = [];
    let lastToken;

    const performFunc = function(a,b,func){
        if(func == "+"){
            return a + b;
        }else if(func == "-"){
            return a - b;
        }else if(func == "/"){
            return a / b;
        }else if(func == "*"){
            return a * b;
        }
    }

    const processStack = function (stack){
        var i = 0;
        if(stack.length === 0){ return NaN }
        if(stack.length === 1){ return stack }

        while (i < stack.length && stack.length > 2){
            if(stack[i+1] == "*" || stack[i+1] == "/"){
                var a = stack[i];
                var b = stack[i+2];
                var func = stack[i+1];
                var value = performFunc(a, b, func);
                stack.splice(i, 3, value);
            }else if(stack[i+1] == "+" || stack[i+1] == "-"){
                var a = stack[i];
                var b = stack[i+2];
                var func = stack[i+1];
                var value = performFunc(a, b, func);
                stack.splice(i, 3, value);
            }else{ i += 2}
        }

        // i = 0;
        
        // while (i < stack.length && stack.length > 2){
        //     if(stack[i+1] == "+" || stack[i+1] == "-"){
        //         var a = stack[i];
        //         var b = stack[i+2];
        //         var func = stack[i+1];
        //         var value = performFunc(a, b, func);
        //         stack.splice(i, 3, value);
        //     }else{ i += 2}
        // }

        return stack;
    }

    const processChar = function(char){
        if(char == "+"){
            stack.push("+")
        }else if(char == "-"){
            stack.push("-")
        }else if(char == "/"){
            stack.push("/")
        }else if(char == "*"){
            stack.push("*")
        }else if(char == "("){
            if(lastToken === ")" || (
                lastToken !== undefined &&
                lastToken.match(/d+/g) !== null
            )){
                stack.push("*")
            }
            stack.push("(")
        }else if(char == ")"){
            let parentStack = [];
            while ((char = stack.pop()) != "("){
                parentStack.unshift(char);
            }
            stack.push(processStack(parentStack).pop())
        }else{
            stack.push(parseInt(char));
        }
    }

    let tokens = str.match(/\d+|[()+\-*/]/g);
    for(var i = 0; i < tokens.length; i++){
        processChar(tokens[i]);
        lastToken = tokens[i];
    }
    stack = processStack(stack);
    return stack.pop();
}
// Example usage:
console.log(' --------------- #16-2: Calculator --------------- ');
console.log(`Solution 2: input str="6*(4/2)+3*1", output: `+ calculator2("6*(4/2)+3*1")); // Output: 15
console.log(`Solution 2: input str="6/3-1", output: `+ calculator2("6/3-1")); // Output: 1
console.log(`Solution 2: input str="7-4-1+8(3)/2", output: `+ calculator2("7-4-1+8(3)/2")); // Output: 15

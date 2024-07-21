// HTML Elements - Interview Assessment
// Determine whether HTML elements are nested correctly.
function HTMLElements(str){
    let stack = [];
    // Loop through each character in the input string
    for(let i = 0; i < str.length; i++){
        // If an opening tag is found, push it onto the stack
        if(str[i] === "<" && str[i+1] !=="/"){
            let end = str.indexOf(">", i);
            let tag = str.slice(i + 1, end);
            stack.push(tag);
            i = end;
        }

        // If a closing tag is found, pop the top tag off the stack and compare it to the closing tag
        else if(str[i] === "<" && str[i+1] ==="/"){
            let end = str.indexOf(">", i);
            let tag = str.slice(i + 2, end);
            let top = stack.pop();
            // if the tag don't match, return the expected tage
            if(top !== tag){
                return top;
            }
            i=end;
        }

    }

    // If the stack is not empty, return the top tag on the stack
    if(stack.length > 0){
        return stack.pop();
    }else{
        // otherwise the string is properly formatted
        return "true";
    }
}
console.log(' --------------- #23: HTML Elements - Interview Assessment --------------- ');
console.log(`Solution: input: str="<div><div><b></b></div></p>", output: `+ 
    HTMLElements("<div><div><b></b></div></p>")); // Output: div
console.log(`Solution: input: str="<div>abc</div><p><em><i>test test test</b></em></p>", output: `+ 
    HTMLElements("<div>abc</div><p><em><i>test test test</b></em></p>")); // Output: i
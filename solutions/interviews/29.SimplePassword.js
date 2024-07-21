// Simple Password - Interview Assessment
// Determine if a string is a valid password
function simplePassword(str){
    if(!/[A-Z]/g.test(str)){ return false }
    if(!/[0-9]/g.test(str)){ return false }
    if(!/[!=]/g.test(str)){ return false }
    if(/password/gi.test(str)){ return false }

    if(!(str.length > 7  && str.length < 31)){ return false }

    return true;
}

console.log(' --------------- #29: Simple Password - Interview Assessment --------------- ');
console.log(`Solution: input: str="passWord123!!!", output: `+ simplePassword("passWord123!!!")); // Output: false
console.log(`Solution: input: str="turkey90AAA=", output: `+ simplePassword("turkey90AAA=")); // Output: true
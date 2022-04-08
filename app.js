const checkParenthesis = (str) => {
    const getParenthesisArrayLength = () => {
        let parenthesis = [];
        for (let i = 0; i < str.length; i++) {
            // adds any opening brackets to the array of parenthesis
            if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
                parenthesis.push(str[i]);
                // if a closing bracket is read it looks to see if it has a matching opening bracket 
                // if not it pushes a star into the array 
            } else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
                if (parenthesis[parenthesis.length - 1] === "(" || parenthesis[parenthesis.length - 1] === "[" || parenthesis[parenthesis.length - 1] === "{") {
                    parenthesis.pop();
                }
                else {
                    parenthesis.push("*");
                    break;
                }
            }
        }
        return parenthesis.length;
    }
    const printBalance = () => {
        let balanced = false;
        if (getParenthesisArrayLength() === 0) {
            balanced = true;
        }
        return balanced
    }
    return { printBalance }
}


let balanced = checkParenthesis('()[]{}}') // false

console.log(balanced.printBalance());

balanced = checkParenthesis('(o)(o)') //true 

console.log(balanced.printBalance());

balanced = checkParenthesis('(()()') // false 

console.log(balanced.printBalance());

balanced = checkParenthesis('(asdf)asdf((aasdfa)))') //false

console.log(balanced.printBalance());

balanced = checkParenthesis('({{BOOOKS}})') // true 

console.log(balanced.printBalance());

balanced = checkParenthesis('(_)_)lllllllD') // false

console.log(balanced.printBalance());
